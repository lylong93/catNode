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
> socket.emit('userLogin'）

***

#### 发送信息
> socket.emit('userMsg')

***

#### 接受信息
> socket.on('userRecMsg')

*** 

### shop

#### 登录
> socket.emit('shopLogin'）

***

#### 发送信息
> socket.emit('shopMsg')

***

#### 接受信息
> socket.on('shopRecMsg')


## shop

#### 商户注册
> 请求方法 POST

> 请求参数

|参数名|类型|描述|
|:----:|:----:|:----:|
|username|String|用户名|
|password|String|密码|

### 商户登录
> 请求地址 /api/user/login

#### 用户登录
> 请求方法 POST

> 请求参数

|参数名|类型|描述|
|:----:|:----:|:----:|
|username|String|用户名|
|password|String|密码|

### 商户验证信息
> 请求方法 GET

> 请求参数

|参数名|类型|描述|
|:----:|:----:|:----:|

### 商户验证信息
> 请求方法 GET

> 请求参数

|参数名|类型|描述|
|:----:|:----:|:----:|

### 商户验证信息
> 请求方法 GET

> 请求参数

|参数名|类型|描述|
|:----:|:----:|:----:|