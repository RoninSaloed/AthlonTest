<template>
  <div class="relative">
    <span v-if="label" class="mb-2 block text-xs text-dark-blue">{{ label }}</span>
    <span class="relative block">
      <input
        v-model="modelValue"
        :class="{
          'pr-8 rounded-lg px-1 py-1': true,
          'bg-slate-500': !inputClass,
          [inputClass]: true,
        }"
        :type="type"
        :placeholder="placeholder"
      />

      <button
        @mousedown.prevent.stop="showPassword"
        @mouseup.prevent.stop="hidePassword"
        v-if="type === 'password' || isShowPassword"
        type="button"
        class="absolute bottom-1/2 top-1/2 right-0 flex items-center"
      >
        <EyeIcon data-testid="eye-icon" class="h-5 w-5 text-gray-400" />
      </button>
    </span>
    <span v-show="errorMessage" class="text-red-500 absolute -bottom-4 text-xs">{{
      errorMessage
    }}</span>
  </div>
</template>

<script setup lang="ts">
import { EyeIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'

export interface TextInputProps {
  label?: string
  placeholder?: string
  inputClass?: string
  type?: string
  isValid?: boolean
  errorMessage?: string
}

const props = withDefaults(defineProps<TextInputProps>(), {
  label: '',
  placeholder: '',
  inputClass: '',
  type: 'text',
  isValid: true,
  errorMessage: '',
})

const modelValue = defineModel({ default: '' })
const type = ref(props.type)

const isShowPassword = ref(false)

const showPassword = () => {
  type.value = type.value === 'password' ? 'text' : 'password'
  isShowPassword.value = true
}
const hidePassword = () => {
  type.value = 'password'
  isShowPassword.value = false
}
</script>
