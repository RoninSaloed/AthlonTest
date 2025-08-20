import { computed, reactive, ref, watch, type UnwrapNestedRefs } from 'vue'
import { watchOnce } from '@vueuse/core'
import type { ZodTypeAny } from 'zod'

type IFormOptions<T> = {
  initialValue: T
  schema?: ZodTypeAny
  submitCallback: (form: UnwrapNestedRefs<T>) => void | Promise<void>
}

export const useValidationForm = <T extends object>(options: IFormOptions<T>) => {
  const { initialValue, schema, submitCallback } = options

  const formValues = reactive<T>({ ...initialValue })

  const isValid = ref(false)
  const isInvalid = computed(() => !isValid.value)
  const dirty = ref(false)
  const errors = reactive({} as Record<keyof T, string>) as Record<keyof T, string>

  const resetForm = () => {
    Object.assign(form.formValues, initialValue)
  }

  const form = reactive({
    formValues,
    dirty,
    isValid,
    isInvalid,
    errors,
    reset: resetForm,
  })

  const resetErrors = () => {
    for (const key in errors) {
      errors[key] = ''
    }
  }

  watchOnce(form.formValues, () => {
    if (!dirty.value) {
      dirty.value = true
    }
  })

  const validate = () => {
    if (!schema) {
      isValid.value = true
      return
    }
    for (const key in errors) {
      errors[key] = ''
    }
    const validationResult = schema.safeParse(form.formValues)

    if (validationResult.error) {
      for (const issue of validationResult.error.issues) {
        const { message, path } = issue
        errors[path[0] as keyof T] = message
      }
      isValid.value = false
    }

    if (validationResult.success) {
      isValid.value = true

      for (const key in errors) {
        errors[key] = ''
      }
      return
    }
  }

  watch(form.formValues, () => {
    if (dirty.value) {
      validate()
    }
  })

  const submit = () => {
    resetErrors()
    validate()

    if (!isValid.value) {
      return
    }

    submitCallback(formValues)
  }

  return {
    submit,
    errors,
    form,
    formValues,
    isValid,
    isInvalid,
  }
}
