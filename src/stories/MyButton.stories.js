import Button from '../components/Button/Button.vue'

export default {
  title: 'Components/Button/基本用法',
  component: Button,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Button',
    },
    type: {
      control: { type: 'select' },
      defaultValue: 'secondary',
      options: ['secondary', 'primary', 'dashed', 'outline', 'text'],
    },
    shape: {
      control: { type: 'select' },
      defaultValue: 'square',
      options: ['square', 'round', 'circle'],
    },
    status: {
      control: { type: 'select' },
      defaultValue: 'normal',
      options: ['normal', 'warning', 'success', 'danger'],
    },
    size: {
      control: { type: 'select' },
      defaultValue: 'medium',
      options: ['mini', 'small', 'medium', 'large'],
    },
    long: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    loading: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    htmlType: {
      control: { type: 'text' },
      defaultValue: 'button',
    },
    href: {
      control: 'text',
      defaultValue: '',
    },
  },
}

const Template = args => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: `<Button v-bind="args">${args.label}</Button>`,
})

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
}
export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
}
export const Dashed = Template.bind({})
Dashed.args = {
  type: 'dashed',
}
export const Outline = Template.bind({})
Outline.args = {
  type: 'outline',
}
export const Text = Template.bind({})
Text.args = {
  type: 'text',
}
const IconTemplate = args => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: `<Button v-bind="args">
  <template #icon> Icon </template>
    ${args.label}
    </Button>`,
})
export const Icon = IconTemplate.bind({})
Icon.args = {
  type: 'secondary',
}
