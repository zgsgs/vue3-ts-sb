# Storybook

经过这些自定义的 Story，基本摸清了 Storybook 的使用技巧

## 踩坑指北

### Storybook 插件使用和自定义配置

不得不说，Storybook 现在网上资料少的可怜，尤其是国内社区。国内仅存的一些教程也都是止于 Storybook 的安装运行环节，根本无法让同学们体验到 Storybook 的强大，以及它带来的丝滑的开发体验和组件管理功能。我也是查阅了国外仅存的解读资料和 Storybook 官方文档，才对它有了一个比较全面的认识和尝试。下面介绍几个比较常用的插件使用以及自定义配置。
目前我使用的是`v6.3`版本，这个版本淘汰了一些原来常用的插件，也集成了一些常用插件，这里我主要介绍一些常用插件的配置和使用方法

1. [`@storybook/addon-a11y`](https://storybook.js.org/addons/@storybook/addon-a11y/)
2. [`storybook-addon-designs`](https://storybook.js.org/addons/storybook-addon-designs/)
3. [`@storybook/addon-storysource`](https://storybook.js.org/addons/@storybook/addon-storysource/)
4. [`chromatic`](https://storybook.js.org/addons/chromatic/)
5. [`storybook-addon-grid`](https://storybook.js.org/addons/storybook-addon-grid/)
6. [Mock Service Worker](https://storybook.js.org/addons/msw-storybook-addon/)

### JSX/TSX 语法组件支持

不得不说，目前而言 Storybook 对于 JSX 语法的支持依然还不是很好。引入该类型组件，会报编译错误，无法解析 JSX 语法。需要 Webpack/Vite 相关 loader 的支持。目前我还没找到正确的配置方法。

## TODO

1. 如何进行组件测试
2. 如何使用 Graphql 模拟数据
3. 是否可以对 JSX 组件进行 story 案例
4. 使用将 TS 引入到 story 中
