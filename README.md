# 实现一键将HTML元素转为pdf并导出

<!-- <img src="https://img.shields.io/badge/-JavaScript-oringe?style=flat-square&logo=javascript" /> -->
<p align="center">
<span > 
<img alt="GitHub commit activity (branch)" src="https://img.shields.io/github/commit-activity/t/zhChuXiao/htmldownload2pdf">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/zhChuXiao/htmldownload2pdf?logoColor=%235dbfa2&color=%235dbfa2">
<a href="https://github.com/zhChuXiao/htmldownload2pdf"><img alt="GitHub top language" src="https://img.shields.io/badge/zhChuXiao-%E5%88%9D%E6%99%93-green?style=social&logo=github"></a>
 </span>
</p>
<div align="center">  
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>  
<a href="https://www.typescriptlang.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="50" /></a>  
<a href="https://vuejs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/vuejs-original-wordmark.svg" alt="Vue.js" height="50" /></a>  
</div>


借助了两个插件二次封装实现一键将HTML原生转为pdf并导出，通过将html元素转换成canvas，再将canvas转换成pdf下载，可以直接使用自定义指令的方式点击下载，工具还导出了一个printOut的函数，可以自己决定在什么时机调用，更灵活的进行下载。
> 已发布到npm，可直接通过npm进行安装

> 安装

```shell
npm install htmldownload2pdf
```

> 使用方式
- 在main.js或者main.ts里导入并use
>
```js
// vue2 ↓
import Vue from 'vue';

import htmldownload2pdf from 'htmldownload2pdf'

Vue.use(htmldownload2pdf)

new Vue({
  render: h => h(App)
}).$mount(document.getElementById('app'));

// vue3 ↓
import { createApp } from 'vue'
import htmldownload2pdf from 'htmldownload2pdf'

const app = createApp(App)
app.use(htmldownload2pdf).mount('#app')

```
> **在组件内直接给按钮绑定指令: v-exportpdf，点击按钮即可下载**
>

> 指令参数传入一个对象: 
>
| 参数 | 值 |
| --- | --- |
| el  | 要导出为pdf的dom的选择器，可书写任意css选择器，比如：#box .box | 
| name  | 导出下载的文件名称，不需要带后缀名.pdf  | 
> 
> **例：**

```html
<div id="container">
    内容......
</div>
<!-- 点击按钮即可导出名字为《文件名称》的pdf文件，内容就是上方div渲染的内容 -->
<button v-exportpdf="{el: '#container', name: '文件名称'}"></button>
```

## 除了自定义指令的使用方式，也可以通过工具导出的printOut函数实现

 > 直接调用函数的方式不需要在main.js注册，直接导入就能使用

 ``` js
import { printOut } from 'htmldownload2pdf'

btn.onClick = () => {
    printOut(document.getElementById('box'), '文件名称')
}
 ```



