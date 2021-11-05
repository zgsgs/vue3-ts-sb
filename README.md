# vue3-ts-sb

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Run your Storybook

```
npm run storybook
```

### Compiles and minifies for Storybook production

```
npm run build:sb
```

### Compiles and minifies for Storybook document production

```
npm run build:sb-doc
```

### Published your Storybook to Chromatic

```
npm run chromatic
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 踩坑指北

### Storybook 与 Vite 结合遇险

作为一个探索项目，自然是要面向最新技术进行探索。因此，项目最开始我是采用 Storybook+Vite 的模式进行的。幸运的是，Michael Shilman 大神的不懈努力，Storybook 可以支持 Vite 了[Storybook for Vite](https://storybook.js.org/blog/storybook-for-vite/)。但无奈的是当一切看起来都很顺利的时候，我遇到了无法打包 Vue 项目的窘境。也许是 Storybook 或者 Vite 支持的原因，也许是二者兼容性的原因，导致始终无法正确打包。无奈我只得退而求其次，使用 Storybook+Webpack 的模式进行搭建。

### Vue3 与 TS 兼容

原本以为只需要将`script`标签改为`<script lang="ts">`就可以使用 TS 了，但是却意外报错了，原因是 props 和 emit 类型没有正确约束。通过 defineProps 和 defineEmit 也许可以解决这种约束问题，于是采用 defineCustomElement 方法封装组件，但这又产生了新的无法解决的问题，VS Code 一直报错 style 变量找不到，props 上没有 primary 属性等等，最终尝试使用`<script setup>`的方式进行。终于，通过了，VS Code 没有报错了，props 上的属性也可以找到了。

### Vue3 语法与 VS Code 提示

这里主要是 VS Code 插件的问题，如果使用 Vue3 开发，需要关闭原来 Vue2 使用的 Vetur 插件，安装 Volar 插件（现在叫`Vue Language Features (Volar)`），以此来获得最佳的代码提示和语法高亮。
