<template>
  <label
    :class="{
      'flex items-center': true,
      'cursor-not-allowed opacity-70': isDisabled,
      'cursor-pointer': !isDisabled,
    }"
  >
    <div
      :class="{
        'relative min-h-5 min-w-5  rounded border border-dark-gray': true,
        'border-wh-600 bg-violet-500 ': isChecked,
      }"
    >
      <div
        :class="{
          'check-mark absolute left-1/2 inline-block h-3.5 w-2': true,
          'opacity-100': isChecked,
          'opacity-0': !isChecked,
        }"
      />
    </div>
    <div class="ml-2"><slot></slot></div>
    <input
      :disabled="isDisabled"
      type="checkbox"
      class="hidden"
      v-model="modelValue"
      :value="value"
    />
  </label>
  <p class="text-red-500" v-if="isShowError && errorMessage">{{ errorMessage }}</p>
</template>

<script setup lang="ts" generic="T">
import { computed } from 'vue'

interface Props {
  isShowError?: boolean
  errorMessage?: string
  value?: T
  isDisabled?: boolean
}

type ScCheckboxModelValue = boolean | T[]
const props = withDefaults(defineProps<Props>(), {
  isShowError: true,
  label: '',
  errorMessage: '',
  isDisabled: false,
})

const modelValue = defineModel<ScCheckboxModelValue>('modelValue', { required: true })

const isChecked = computed<boolean>(() => {
  const checkboxValue = props.value
  if (Array.isArray(modelValue.value) && !!checkboxValue) {
    return modelValue.value.includes(checkboxValue)
  }

  return !!modelValue.value
})
</script>
