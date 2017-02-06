>建议学习时间：1天以上时间
>建议在学习完es6语法之后，把这个项目自己用es6进行改造

## 项目团队成员组成
- pm(product manager) 产品经理
- ui(user interface) 设计师
- fe(frontend engineer) 前端工程师
- backend(backend engineer) 后端工程师
- QA(quality assurance) 测试工程师

## 项目初始化 - 路由设计

从项目的最终效果，我们可以划分出来如下的几个请求链接：
<-----------------规划
首页
添加歌曲的显示表单页面
添加歌曲的表单提交的操作
编辑歌曲显示
编辑歌曲提交表单
删除歌曲
根据规划我们的设计如下------------>
GET / 
GET /add
POST /add
GET /edit
POST /edit
GET /remove

## 项目初始化(这一块直接提前修改好，不要临时再修改页面) ---> step_0
- npm init -y
- 执行`npm install --save bootstrap`
- 创建app.js(或者index.js)

## 创建服务器 --> step_1
- config.js(把经常会发生变化的端口号、ip地址提取出来)

## 首页渲染 --> step_2
- 首页相关的路由
- 静态资源相关的路由 ---> mime第三方模块获取当前静态资源的Content-Type

## 首页添加动态数据 --> step_3
- 添加动态数据的两种方式
    + ajax --> 通过ajax从后台获取json数据 --> art-template模板引擎渲染 --> 追加到DOM树上
    + node.js把数据获取，直接通过art-template渲染出来 --> 通过response响应的对象返回给我们的浏览器
- art-template在Node.js当中的用法

## 编辑页面、添加页面添加动态数据 --> step_4

## 用MVC重构代码(结合音乐项目架构分析.xls和MVC模型.png)
- video
1. 当用户在地址栏输入网址按下回车的时候
2. 进入`路由`判断
3. 找到对应的`控制器`
4. 控制器找到对应的`数据模型`、`视图模板`拼接成

## 提取出来路由 --> step_5

## 提取出来控制器代码 --> step_6

## 提取出来渲染render方法(因为控制器的代码好多逻辑是重复的) --> step_7

我们观察各个控制器发现散落在每个控制器里面的数据模型，根据我们的MVC架构图，我们的数据模型还没有提取出来--->
## 提取出来数据模型 --> step_8 
--> 前置知识：面向对象复习(curd_demo.html)
- video

## 添加歌曲
- 前置知识：step_9 --> 用postman测试
- video1 + video2
    + 用流的方式接收表单提交的数据 --> step_10
    + 使用querystring来将请求的url的参数转换成对象.js
    + 如何使用formidable第三方包(难点)接收提交的表单数据 --> step_11

## 编辑歌曲
- video1 --> 编辑数据显示 --> step_12
- video2 --> 编辑操作完成 
                --> 流的方式 --> step_13

## 删除歌曲
- video --> step_14




