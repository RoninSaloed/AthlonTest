<template>
  <button
    @click="handleClick()"
    class="bg-slate-500 text-white px-2 py-1 rounded-lg"
    :type="htmlType"
    :disabled="isDisabled"
  >
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
import type { HTMLButtonTypes } from '@/types/shared'

export interface ScButtonProps {
  label: string
  htmlType: HTMLButtonTypes
  isDisabled: boolean
}

withDefaults(defineProps<ScButtonProps>(), {
  htmlType: 'button',
})

const emit = defineEmits(['btn-click'])

const handleClick = () => {
  emit('btn-click')
}
</script>
