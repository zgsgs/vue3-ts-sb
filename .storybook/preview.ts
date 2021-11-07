import '../src/assets/index.css'

// @ts-ignore
import { initialize, mswDecorator } from 'msw-storybook-addon'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator } from '@storybook/vue3'

initialize()
addDecorator(mswDecorator)

// 手机机型
const customViewports = {
  pixel2: {
    name: 'Pixel 2',
    styles: {
      width: '411px',
      height: '731px',
    },
  },
  iphone5: {
    name: 'iPhone 5/SE',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  iphone678: {
    name: 'iPhone 6/7/8',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
}
// 全局类型
export const globalTypes = {
  // 主题模式
  darkMode: {
    name: 'Dark Mode',
    description: '主题模式',
    defaultValue: 'default',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'default', icon: 'circlehollow', title: 'Default' },
        { value: 'dark', icon: 'circle', title: 'Dark' },
      ],
      showName: false,
    },
  },
  // 国际化
  locale: {
    name: 'Locale',
    description: '本地国际化',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'zh', right: '🇨🇳', title: '中文' },
      ],
    },
  },
}
// 装饰器 执行逻辑
export const decorators = [
  (story, context) => {
    // 主题
    const darkModeColor = {
      default: 'auto',
      dark: '#333333',
    }
    return {
      component: { story },
      template: `<story class="${context.globals.darkMode}" style="background-color: ${darkModeColor[context.globals.darkMode]}"/>`,
    }
  },
  (story, context) => {
    // 国际化
    return {
      component: { story },
      template: `<story class="${context.globals.locale}" />`,
    }
  },
]
// 参数
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
  a11y: {
    // Avoid doing this, as it will fully disable all accessibility checks for this story.
    disable: true,
    // Instead, override rules 👇
    // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    config: {
      rules: [
        {
          // You can exclude some elements from failing a specific rule:
          id: 'autocomplete-valid',
          selector: '*:not([autocomplete="nope"])',
        },
        {
          // You can also signify that a violation will need to be fixed in the future
          // by overriding the result of a rule to return "Needs Review"
          // rather than "Violation" if the rule fails:
          id: 'landmark-complementary-is-top-level',
          reviewOnFail: true,
        },
      ],
    },
  },
}
