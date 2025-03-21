# k.payment
> k.payment 提供了一系列接入第三方支付相关的功能

## 配置
> 所有的支付方式都先需要进入站点 CMS 进行配置
1. 打开配置菜单
![打开菜单](/images/payment-01.png)
2. 进入配置页面
![进入配置](/images/payment-02.png)
3. 选择对应的支付方式,并填入相关信息

## 使用案例 (以支付宝为例)
### 发起支付请求, 跳转支付页面
```js
// ------------ payment api ------------
// commerce 模块创建 order 数据
const product = k.commerce.product.get('test-product') // 需要到商品管理页添加商品'test-product'
const cartId = k.commerce.cart.create()
k.commerce.cart.addOrUpdateLine(cartId, product.variants[0].id, 1)
k.commerce.cart.updateContact(cartId, "wgjiachen@gmail.com")
const order = k.commerce.order.create(cartId, {address: {firstName: "", phone: "123"}})
// 发起支付请求 (返回上下文信息)
const payContext = k.payment.alipayForm.charge({
  currency: or,
  description: "test desc",
  name: product.title,
  order: order.id,
  returnUrl: `/__paymentCallback?orderId=${order.id}`,
  totalAmount: order.totalAmount,
  callbackCodeName: 'PaymentCallback',
})
// 记录支付相关信息...
const req_id = payContext.requestId
// 可以创建一张 oder_request 表, 用于关联 order <- -> request 的相关信息
k.logger.information("Payment.Info", `req_id: ${req_id}, order_id: ${order.id}`)
// 跳转到支付页面
k.response.renderView(payContext.nextAction.renderHtml)
```
> 若配置和代码正确, 则此时可以看到站点跳转到支付宝支付页面

  ![支付宝支付页面](/images/payment-03.png)
### 支付回调
> 支付成功后会访问上方定义的 returnUrl, 需要的数据则可以通过 params 携带
```js
// ------------ api: __paymentCallback ------------
// 
k.api.get(() => {
    const orderId = k.request.queryString?.orderId
    if (orderId) {
        const req_id = getReqIdByOrderId(order_id) // 自行封装根据 order_id 获取 req_id 的方法

        const paymentStatus = k.payment.alipayForm.checkStatus(req_id)
        if (req_id) {
            if (paymentStatus?.paid) {
                // 支付成功
                // 根据业务处理及更新数据
                // ...
                // 根据业务跳转到对应页面
                return k.response.redirect(`/order/${oderId}`)
            } else {
                // 未支付, 根据业务重定向到指定页面
                return k.response.redirect(`/xxx`)
            }
        } else {
            // req_id 缺失异常处理
            k.response.json({
                code: -1,
                msg: "payment request ID is not found"
            })
            return k.api.httpCode(400)
        }
    } else {
        // order_id 缺失异常处理
        k.response.json({
            code: -1,
            msg: "order ID is not found"
        })
        return k.api.httpCode(400)
    }
})
```

## 支付 API 明细
> 所有的支付 api 基本大同小异, 这里以支付宝举例, `alipayForm` 可以替换为其他支付方式

### 基础属性
> 所有的支付方式都包含一下的基础属性
```js
k.payment.alipayForm.name // "AlipayForm"
k.payment.alipayForm.displayName // "Alipay Web"
k.payment.alipayForm.icon // ""
k.payment.alipayForm.iconType // "img"
k.payment.alipayForm.supportedCurrency // ["CNY"]
k.payment.alipayForm.context // 上下文信息
```

### k.payment.alipayForm.charge()
> 创建支付请求

> params: `AlipayFormParams` 
> - 不同的请求方式, params 会有略微的差异, 可以通过cmd/ctrl+J 查看智能提示
> - 这里以 `k.payment.alipayForm.charge()` 为例
> - name: `string` - 订单名称
> - description: `string` - 订单描述
> - totalAmount: `number` - 订单金额
> - currency: `string` - 货币类型
> - order?: `string` 
>   - Commerce.Order 的 id, 如果提供该字段, 则会在支付完成后更新 order 的支付状态
> - returnUrl: `string` - 支付完成后跳转的页面
> - callbackCodeName?: `string` - 回调代码名称, 提供该字段, 则会在支付完成后调用该回调代码

> return: `ChargeResponse`
```js
k.api.get(()=>{
  const payment = k.payment.alipayForm.charge({
    name: "test product",
    description: "kooboo order:1739521656997",
    totalAmount: 22,
    currency: "CNY",
    // order: "1739521656997",
    returnUrl: "/__ProductAliPayCallback?order_id=1739521656997&payType=alipay"
  })
})
```

### k.payment.alipayForm.checkStatus()
> 检查支付状态

> params: `string` - requestId

> return: `PaymentRequest`

```js
k.api.get(()=>{
  const paymentStatus = k.payment.alipayForm.checkStatus(req_id)
})
// return:
{
    "hasResult": false,
    "paid": false,
    "failed": false,
    "status": "NotAvailable",
    "message": null,
    "_koobootrace": null
}
```

## 其他API
### k.payment.get()
> 返回对应支付方式的通用相关信息和方法

> params: `string` - 对应第三方支付的函数名

> return: `IPaymentMethod`
```js
k.api.get(() => {
    const payment = k.payment.get("alipayForm")

    return {
        name: payment.name, // "AlipayForm"
        displayName: payment.displayName, // "Alipay Web"
        icon: payment.icon, // ""
        iconType: payment.iconType, // "img"
        supportedCurrency: payment.supportedCurrency // ["CNY"]
        // context: payment.context, // 上下文信息
        // checkStatus: payment.checkStatus() // 根据 request_id 检查支付状态
    }
})
```

### k.payment.getRequest()
> 根据 requestId 获取支付信息

> params: `string` - requestId

> return: `PaymentRequest`

```js
k.api.get(()=>{
  const request = k.payment.getRequest("xxx-xx...")
  // return:
  {
      "Id": "c6b8d873-4765-4bda-8478-ced522bb2c94",
      "Description": null,
      "TotalAmount": 22,
      "Currency": "CNY",
      "Country": null,
      "Order": "1739521656997" // 与 Commerce.Order 关联,
      "PaymentMethod": "AlipayForm",
      "Paid": false,
      "Failed": false,
      "ReferenceId": "c6b8d873-4765-4bda-8478-ced522bb2c94",
      "ReferenceIdHash": "4faa838d-f21d-6714-e58d-3e615cbcbb3e",
      "ReturnUrl": "/__ProductAliPayCallback?order_id=1739521656997&payType=alipay",
      "Additional": {
          "totalAmount": 22,
          "currency": "CNY",
          "order": "1739521656997",
          "name": "kooboo order:1739521656997",
          "returnUrl": "/__ProductAliPayCallback?order_id=1739521656997&payType=alipay"
      },
      "CreationDate": "2025-02-14T08:27:53.6144657Z",
      "LastModified": "2025-02-14T08:27:53.6238906Z",
      "name": "kooboo order:1739521656997",
      ...
  }
})
```

## 已支持的第三方支付
### 支付宝支付
```js
k.payment.alipayApp
k.payment.alipayForm
k.payment.alipayH5
```

### Pay.NL 支付
```js
k.payment.paynlCheckout
```

### PayPal 支付
```js
k.payment.paypalCheckout
k.payment.paypalForm
```

### Square 支付
```js
k.payment.square
```

### Stripe 支付
```js
k.payment.stripe
k.payment.stripeCheckout
```

### TwoCheckout 支付
```js
k.payment.twoCheckout
```

### 微信支付
```js
k.payment.weChatH5
k.payment.wechat
k.payment.wechatApp
k.payment.wechatJsApi
```