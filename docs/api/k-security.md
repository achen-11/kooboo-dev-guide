# k.security
> k.security 提供一系列用于处理安全相关的方法

## k.security.aesDecrypt()
> aes 解密
> params:
> - input: `string`
> - key: `string`

> return: `string`

```js
k.api.get("aesDecrypt", ()=>{
  const input = "Kz7vs9lbMnpR3NRCFmzImA=="
  const key = "hashkey"
  const output = k.security.aesDecrypt(input, key)
  return output
})
// "testValue"
```

## k.security.aesEncrypt()
> aes 加密

> params:
> - input: `string`
> - key: `string`

> return: `string` 

```js
k.api.get("aesEncrypt", () => {
    const input = "testValue"
    const key = "hashkey"
    const output = k.security.aesEncrypt(input, key)
    return output
})
// "Kz7vs9lbMnpR3NRCFmzImA=="
```


## k.security.decodeBase64()
> 将 base64 字符串转换为byte[]

> params:
> - input: `string`

> return: `byte[]`

```js
k.api.get("decodeBase64", () => {
    const payload = k.security.decodeBase64("aGVsbG8=")
    return payload
})
// [104, 101, 108, 108, 111]
```


## k.security.decrypt()
> 根据 key 解密

> params:
> - input: `string`
> - key: `string`

> return: `string`

```js
k.api.get("decrypt", () => {
    const input = "testValue"
    const key = "hashkey"
    const output = k.security.decrypt(input, key)
    return output
})
```


## k.security.encrypt()
> 根据 key 加密

> params:
> - input: `string`
> - key: `string`

> return: `string`

```js
k.api.get("encrypt", () => {
    const input = "testValue"
    const key = "hashkey"
    const output = k.security.encrypt(input, key)
    return output
})
```


## k.security.fromBase64()
> 将 base64 字符串转换

> params:
> - input: `string`

> return: `string`

```js
k.api.get("fromBase64", () => {
    const payload = k.security.fromBase64("aGVsbG8=")
    return payload
})
// "hello"
```


## k.security.hashGuid()
> 根据输入生成一个 guid

> params: 
> - input: `string`
> - options?: ``

> return: `HashGuidOptions`

```js
k.api.get("hashGuid", () => {
  // eg.1
    return k.security.hashGuid("hello")
    // eg.2
    return k.security.hashGuid("folder/1.jpg",{source:"FileIo"});
})
```

## k.security.hashPassword()
> 使用内置最佳实践对密码进行哈希运算

> params:
> - password: `string`

> return: `string`

```js
k.api.get("hashPassword", () => {
    return k.security.hashPassword("password")
})
```


## k.security.hmacMd5()
> 使用 HMAC-MD5 算法对输入进行加密

> params:
> - input: `string`
> - key: `string`

> return: `string`

```js
k.api.get("hmacMd5", () => {
    return k.security.hmacMd5("hello", "key")
})
```

## k.security.hmacSha1()
> 使用 HMAC-SHA1 算法对输入进行加密

> params:
> - input: `string`
> - key: `string`

> return: `string`

```js
k.api.get("hmacSha1", () => {
    return k.security.hmacSha1("hello", "key")
})
```

## k.security.hmacSha256()
> 使用 HMAC-SHA256 算法对输入进行加密

> params:
> - input: `string`
> - key: `string`

> return: `string`

```js
k.api.get("hmacSha256", () => {
    return k.security.hmacSha256("hello", "key")
})
```

## k.security.jwt
### 配置
> 前往 系统 -> 配置 -> Others -> JwtSetting

![JwtSetting](/images/jwt-setting.png)

### k.security.jwt.encode()
> 生成 JWT 令牌

> params:
> - payload: `object`

> return: `string`

```js
k.api.get("jwtEncode", () => {
    return k.security.jwt.encode({ name: "k-security" })
})
```

### k.security.jwt.decode()
> 解码 JWT 令牌, 默认从 header 中获取 token

> params:
> - token?: `string`

> return: `object`

```js
k.api.get("jwtDecode", () => {
    return k.security.jwt.decode()
})
```

### k.security.jwt.payload
> 获取 JWT 令牌中的 payload

```js
k.api.get("payload",()=>{
    const token = `Bearer ${k.security.jwt.encode({name:"k-security"})}`
    k.request.headers.add("Authorization", token)
    return k.security.jwt.payload
})
```


## k.security.md5()
> 计算字符串的 MD5 哈希值

> params:
> - input: `string`

> return: `string`

```js
k.api.get("md5", () => {
    return k.security.md5("hello")
})
```

## k.security.newGuid()
> 生成一个新的 GUID

> return: `string`

```js
k.api.get("newGuid", () => {
    return k.security.newGuid()
})
```



## k.security.rsa
### k.security.rsa.generateKeys()
> 生成 RSA 密钥

> params:
> - keySize: `number`

> return: `RsaKeys`

```js
k.api.get("rsaGenerateKeys", () => {
    return k.security.rsa.generateKeys(2048)
})
// return
{ 
  "publicKey": "xxxxx", 
  "privateKey": "xxxxx"
}
```

### k.security.rsa.encrypt()
> 使用 RSA 加密

> params:
> - publicKey: `string`
> - content: `string`

> return: `string`

```js
k.api.get("rsaEncrypt", () => {
    return k.security.rsa.encrypt("publicKey", "content")
})
```

### k.security.rsa.decrypt()
> 使用 RSA 解密

> params:
> - privateKey: `string`
> - content: `string`

> return: `string`

```js
k.api.get("rsaDecrypt", () => {
    return k.security.rsa.decrypt("privateKey", "content")
})
```

## k.security.sha1()
> 计算字符串的 SHA1 哈希值

> params:
> - input: `string`

> return: `string`

```js
k.api.get("sha1", () => {
    return k.security.sha1("hello")
})
```

## k.security.sha256()
> 计算字符串的 SHA256 哈希值

> params:
> - input: `string`

> return: `string`

```js
k.api.get("sha256", () => {
    return k.security.sha256("hello")
})
```


## k.security.sha256Binary()
> 计算字符串的 SHA256 哈希值, 返回二进制

> params:
> - input: `string`

> return: `string`

```js
k.api.get("sha256Binary", () => {
    return k.security.sha256Binary("hello")
})
```


## k.security.sha512()
> 计算字符串的 SHA512 哈希值

> params:
> - input: `string`

> return: `string`

```js
k.api.get("sha512", () => {
    return k.security.sha512("hello")
})
```


## k.security.shortGuid()
> 生成一个短的 GUID

> return: `string`

```js
k.api.get("shortGuid", () => {
    return k.security.shortGuid()
})
```

## k.security.toBase64()
> 将字符串或二进制数字转换为 base64

> params:
> - input: `string | number[]`

> return: `string`

```js
k.api.get("toBase64", () => {
  // eg.1
  return k.security.toBase64("hello")
  // eg.2
  const bytes = k.file.readBinary("a.jpg");
  return k.security.toBase64(bytes)
})
```
## k.security.verifyPassword()
> 验证密码

> params:
> - password: `string`
> - saltdpassword: `string`

> return: `boolean`

```js
k.api.get("verifyPassword", () => {
    return k.security.verifyPassword("password", "salt")
})
```





