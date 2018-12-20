# 后台api

## user

### 用户注册
> 请求地址 /api/user/register

> 请求方法 POST

> request

|参数名|类型|描述|
|:----:|:----:|:----:|
|username|String|用户名|
|password|String|密码|

***
> response

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|state | int |0：正常，1：错误，2：服务器错误 |
|token | string | token |


### 用户登录
> 请求地址 /api/user/login

> 请求方法 POST

> request

|参数名|类型|描述|
|:----:|:----:|:----:|
|username|String|用户名|
|password|String|密码|

***
> response

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|state | int |0：正常，1：错误，2：服务器错误 |
|token | string | token |

### 用户验证信息
> 请求地址 /api/user/getInfo

> 请求方法 GET

> request

***
> response

|参数名|类型|描述|
|:----:|:----:|:----:|
|username| string| 用户名|
|userId| string|用户id|


### 获取朋友
> 请求地址 /api/userchat/friendList

> 请求方法 GET

> request

***
> response

|参数名|类型|描述|
|:----:|:----:|:----:|
|username| string| 用户名|
|userId| string|用户id|

### 聊天信息
> 请求地址 /api/userchat/msglist

> 请求方法 GET

> request

***
> response

|参数名|类型|描述|
|:----:|:----:|:----:|
|username| string| 用户名|
|userId| string|用户id|


### 获取所有商户
> 请求地址 /api/userchat/userlist

> 请求方法 GET

> request

***
> response

|参数名|类型|描述|
|:----:|:----:|:----:|
|username| string| 用户名|
|userId| string|用户id|

## scoket

### user

#### 登录
> socket.emit('userLogin',id）

***

|参数名|类型|描述|
|:----:|:----:|:----:|
|id|String|用户id|

#### 发送信息
> socket.emit('userMsg',data)

***

|参数名|类型|
|:----:|:----:|
|data|Object| 

|data对象|描述|
|:----:|:----:|
|from|用户id|
|to|商户id|
|msg| 信息体|


#### 接受信息
> socket.on('userRecMsg',msg)

*** 

|参数名|类型|
|:----:|:----:|
|msg|信息体| 

### shop

#### 登录
> socket.emit('shopLogin',id）

***

|参数名|类型|描述|
|:----:|:----:|:----:|
|id|String|商户id|

#### 发送信息
> socket.emit('shopMsg',data)

***

|参数名|类型|
|:----:|:----:|
|data|Object| 

|data对象|描述|
|:----:|:----:|
|from|商户id|
|to|用户id|
|msg| 信息体|

#### 接受信息
> socket.on('shopRecMsg',msg)

***

|参数名|类型|
|:----:|:----:|
|msg|信息体| 


## shop

### 商户注册
> 请求地址 /api/shop/register

> 请求方法 POST

> request

|参数名|类型|描述|
|:----:|:----:|:----:|
|username|String|用户名|
|password|String|密码|

***
> response

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|state | int |0：正常，1：错误，2：服务器错误 |
|token | string | token |

### 商户登录
> 请求地址 /api/shop/login

> 请求方法 POST

> request

|参数名|类型|描述|
|:----:|:----:|:----:|
|username|String|用户名|
|password|String|密码|

***
> response

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|state | int |0：正常，1：错误，2：服务器错误 |
|token | string | token |

### 商户验证信息
> 请求地址 /api/shop/getInfo

> 请求方法 GET

> request

***
> response

|参数名|类型|描述|
|:----:|:----:|:----:|
|username| string| 用户名|
|userId| string|用户id|

### 获取朋友
> 请求地址 /api/shopchat/friendList

> 请求方法 GET

> request

***
> response

|参数名|类型|描述|
|:----:|:----:|:----:|
|username| string| 用户名|
|userId| string|用户id|

### 聊天信息
> 请求地址 /api/shopchat/msglist

> 请求方法 GET

> request

***
> response

|参数名|类型|描述|
|:----:|:----:|:----:|
|username| string| 用户名|
|userId| string|用户id|


### 获取所有商户
> 请求地址 /api/shopchat/userlist

> 请求方法 GET

> request

***
> response

|参数名|类型|描述|
|:----:|:----:|:----:|
|username| string| 用户名|
|userId| string|用户id|


### 七牛云上传token
> 请求地址 /api/shop/getUptoken

> 请求方法 GET

> request

***
> response

|参数名|类型|描述|
|:----:|:----:|:----:|
|uploadToken| string| 上传token|

### 上传头像
> 请求地址 /api/shop/upAvatar

> 请求方法 POST

> request

|参数名|类型|描述|
|:----:|:----:|:----:|
|id|String|商户id|
|img|String|图像地址|

***
> response

|参数名|类型|描述|
|:----:|:----:|:----:|
|finshed| string|？？|

### 修改信息
> 请求地址 /api/shop/set

> 请求方法 POST

### 添加商品
> 请求地址 /api/shop/addgood

> 请求方法 POST

> request

|参数名|类型|描述|
|:----:|:----:|:----:|
|name|String|商品名称|
|pice|String|商品价格|

***
> response

### 商品图片
> 请求地址 /api/shop/upgoodimg

> 请求方法 POST

> request

|参数名|类型|描述|
|:----:|:----:|:----:|
|goodId|String|商品id|
|img|String|图片地址|

***
> response
