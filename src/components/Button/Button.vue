<script setup lang="ts">
import './Button.css'
import { defineProps, defineEmits, computed } from 'vue';
const props = defineProps({
  type: {
    type: String,
    defaulte: 'secondary',
    validator: (value: string) => {
      return ['secondary', 'primary', 'dashed', 'outline', 'text'].includes(value)
    }
  },
  shape: {
    type: String,
    defaulte: 'square',
    validator: (value: string) => {
      return ['square', 'round', 'circle'].includes(value)
    }
  },
  status: {
    type: String,
    defaulte: 'normal',
    validator: (value: string) => {
      return ['normal', 'warning', 'success', 'danger'].includes(value)
    }
  },
  size: {
    type: String,
    defaulte: 'medium',
    validator: (value: string) => {
      return ['mini', 'small', 'medium', 'large'].includes(value)
    }
  },
  long: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  htmlType: {
    type: String,
    default: 'button'
  },
  href: {
    type: String,
    default: ''
  },
})

const class1 = computed(() => ({
  'arco-btn': true,
  [`arco-btn-${props.type}`]: true,
  [`arco-btn-shape-${props.shape}`]: true,
  [`arco-btn-size-${props.size}`]: true,
  [`arco-btn-status-${props.status}`]: true,
  [`arco-btn-loading`]: props.loading,
  [`arco-btn-long`]: props.long,
  [`arco-btn-disabled`]: props.disabled,
}))


const emit = defineEmits(['click'])
const onClick = () => {
  emit("click");
};
</script>
<template>
  <button :class="class1" :type="props.htmlType" :disabled="props.disabled" @click="onClick">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>
