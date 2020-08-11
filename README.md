# MyVue

MyVue是一个基于Vue.js的前端项目工程，即下即用，快速上手。与官方提供的脚手架Vue CLI相比，MyVue的编译和构建速度大大提升。

##### 目前已支持：

- Vue.js
- Vue Router
- Vuex
- Sass
- ES6
- ...



## Installation

在开始之前，请务必确保已安装Node.js环境（v12.0.0）

```javascript
git clone https://github.com/Lorienn/myvue.git

cd dir

npm i	// install necessary dependencies
```



## Documentation

#### 项目结构

- src	根目录

  - index.html	项目`HTML`模板

  - css	存放`CSS`文件（支持CSS、Sass）

  - img	存放`图片`文件（支持jpg、png、svg、gif）

  - js	存放`JavaScript`文件
  
    - router
    
      - index.js	`Vue Router`配置文件
      
    - store
    
      - index.js	`Vuex`配置文件
      
    - components	存放普通组件
    
	- views	存放页面级组件
	
	- index.vue	根组件
	
	- index.js	入口文件


#### 编译/构建

```javascript
cd dir

npm run dev	// compile and run

npm run build	// build
```



## Contributing

本项目的引入Vue部分借鉴了HumanSean同学的博客。[原文链接](http://seanboy.club/docs/webpack-feast/#/guide/detail/%E5%BC%95%E5%85%A5Vue)

在搭建脚手架的过程中遇到了许多问题，感谢HumanSean同学的耐心解惑:)

