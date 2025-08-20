<template>
  <label class="flex cursor-pointer items-center">
    <input v-model="modelValue" type="radio" class="hidden" :value="value" />
    <span
      :class="{
        'relative rounded-full border border-dark-gray transition-all duration-200 before:h-2 before:w-2 h-5 w-5': true,
        'bg-dark-white before:absolute before:left-1/2 before:top-1/2 before:block before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full  before:bg-second-blue before:content-[\'*\']':
          !!isChecked,
      }"
    />
    <slot />
    <span
      v-if="label"
      :class="{
        'ml-2 text-dark-blue': true,
      }"
      >{{ label }}</span
    >
  </label>
  <p class="text-red-500" v-show="isShowError && errorMessage">{{ errorMessage }}</p>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'

export interface ScRadioProps {
  label?: string
  isShowError?: boolean
  errorMessage?: string
  value: string
}

const props = withDefaults(defineProps<ScRadioProps>(), {
  isShowError: true,
  label: '',
  errorMessage: '',
})

const modelValue = defineModel<string>('modelValue', { default: '' })

const { value } = toRefs(props)

const model = computed<string>({
  get() {
    return modelValue.value
  },
  set(value: string) {
    modelValue.value = value
  },
})

const isChecked = computed<boolean>(() => {
  return model.value === value.value
})
</script>
