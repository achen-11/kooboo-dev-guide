# k.net.IP

> k.net.IP 提供了一系列用于获取和处理IP地址信息的方法。

## k.net.IP.context

## k.net.IP.getCity()
> 获取IP地址所在的城市

> params: 
> - IP: `string`
> 
> return: `IPViewModel`

```js
k.api.get("getCity", () => {
    const ip = k.net.IP.myIP
    return k.net.IP.getCity(ip)
})
// return
{
    "Ip": null,
    "City": "Xiamen",
    "State": "Fujian",
    "CountryName": "China",
    "CountryCode": "CN",
    "Latitude": 24.4798,
    "Longitude": 118.0819
}
```

## k.net.IP.getCityOrCountry
> 获取IP地址所在的城市或国家

> params: 
> - IP: `string`
> 
> return: `IPViewModel`

```js
k.api.get("getCityOrCountry", () => {
    const ip = k.net.IP.myIP
    return k.net.IP.getCityOrCountry(ip)
})
// return
{
    "Ip": null,
    "City": "Xiamen",
    "State": "Fujian",
    "CountryName": "China",
    "CountryCode": "CN",
    "Latitude": 24.4798,
    "Longitude": 118.0819
}
```

## k.net.IP.getCountry
> 获取IP地址所在的国家

> params: 
> - IP: `string`
> 
> return: `IPViewModel`

```js
k.api.get("getCountry", () => {
    const ip = k.net.IP.myIP
    return k.net.IP.getCountry(ip)
})
// return
{
    "Ip": null,
    "City": null,
    "State": null,
    "CountryName": "China",
    "CountryCode": "CN",
    "Latitude": 35.86166,
    "Longitude": 104.195397
}
```

## k.net.IP.myIP
> 获取ip 地址

> type: `string`

```js
k.api.get("myIP", () => {
    return k.net.IP.myIP
})
```