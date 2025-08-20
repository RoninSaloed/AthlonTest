<template>
  <sc-loader class="p-10" v-if="isLoading" />
  <div class="mt-[75px] max-w-[806px] m-auto">
    <form @submit.prevent="submit()" class="mt-8 w-full flex-row justify-center">
      <div
        v-if="successMessage"
        class="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50"
      >
        {{ successMessage }}
      </div>
      <div class="grid grid-cols-2 gap-4 mb-5">
        <sc-input
          v-for="(item, idx) of textInputs"
          :key="idx"
          :type="item.type"
          :label="item.label"
          :placeholder="item.placeholder"
          v-model="formValues[item.type as keyof FormType]"
          :error-message="errors[item.type as keyof FormType]"
          class="w-full md:w-1/2"
        />
      </div>

      <div>Add to list</div>

      <div class="bg-gray-400 w-[340px] h-[200px] p-5 rounded-lg overflow-x-hidden">
        <ScCheckbox
          v-for="(item, i) of checkBoxInputs"
          :key="i"
          v-model="selectedTechniques"
          :value="item.type"
        >
          {{ item.label }}
        </ScCheckbox>
      </div>
      <p class="text-red-500" v-if="isCheckboxInvalid">{{ checkboxErrors }}</p>

      <div class="mt-5">
        <sc-radio
          text-size="text-sm"
          v-model="selectedMode"
          :value="ShiftsEnum.DAY_SHIFT"
          :label="ShiftsEnum.DAY_SHIFT"
        />
      </div>
      <div class="mb-5">
        <sc-radio
          text-size="text-sm"
          v-model="selectedMode"
          :value="ShiftsEnum.NIGHT_SHIFT"
          :label="ShiftsEnum.NIGHT_SHIFT"
        />
      </div>

      <div class="bg-gray-400 w-[340px] h-[200px] p-5 rounded-lg overflow-x-hidden">
        <sc-radio
          v-for="(item, idx) of peopleInputs"
          :key="idx"
          text-size="text-sm"
          v-model="selectedHuman"
          :value="item.type"
          :label="item.label"
        />
      </div>
      <p class="text-red-500" v-if="isSelectedHumanCheckboxInvalid">
        {{ radioError }}
      </p>

      <sc-button htmlType="submit" class="mt-10" label="Let’s go!" :isDisabled="isInvalid" />
    </form>
  </div>
</template>

<script setup lang="ts">
import ScInput from '@/components/shared/inputs/ScInput.vue'
import { useValidationForm } from '@/helpers/validationForm'
import { loginUserSchema } from '@/schemas/login-user.schema'
import {
  checkBoxInputs,
  peopleInputs,
  RELATED_USER_FORM_FIELDS,
  ShiftsEnum,
  textInputs,
} from '@/shared/users-domain.fields'
import ScButton from '@/components/shared/buttons/ScButton.vue'
import type * as zod from 'zod'
import ScCheckbox from '@/components/shared/inputs/checkbox/ScCheckbox.vue'
import { computed, ref } from 'vue'
import ScRadio from '@/components/shared/inputs/radio/ScRadio.vue'
import { usePostForm } from '@/use/usePostForm'
import ScLoader from '@/components/loader/ScLoader.vue'
type FormType = zod.infer<typeof loginUserSchema>

const successMessage = ref('')

const onSubmit = async (form: FormType) => {
  const formData = {
    ...formValues,
    selectedTechniques: selectedTechniques.value,
    selectedMode: selectedMode.value,
    selectedHuman: selectedHuman.value,
  }

  console.log(formData)
  await postForm()

  if (response) {
    Object.keys(formValues).forEach((key) => {
      formValues[key as keyof FormType] = ''
    })

    selectedTechniques.value = []
    selectedMode.value = ShiftsEnum.DAY_SHIFT
    selectedHuman.value = null
    successMessage.value = 'Form submitted successfully!'
    setTimeout(() => {
      successMessage.value = ''
    }, 3000)
  }
}

const { submit, errors, formValues, isInvalid } = useValidationForm({
  schema: loginUserSchema,
  initialValue: {
    [RELATED_USER_FORM_FIELDS.SURNAME]: '',
    [RELATED_USER_FORM_FIELDS.NAME]: '',
    [RELATED_USER_FORM_FIELDS.PASSWORD]: '',
    [RELATED_USER_FORM_FIELDS.EMAIL]: '',
  },
  submitCallback: onSubmit,
})

const { isLoading, postForm, response } = usePostForm()

const selectedTechniques = ref<string[]>([])

const checkboxErrors = computed(() => {
  return selectedTechniques.value.length < 1 ? 'required' : ''
})

const isCheckboxInvalid = computed(() => selectedTechniques.value.length < 1)

const selectedMode = ref(ShiftsEnum.DAY_SHIFT)
const selectedHuman = ref()

const isSelectedHumanCheckboxInvalid = computed(() => !selectedHuman.value)

const radioError = computed(() => {
  return isSelectedHumanCheckboxInvalid.value ? 'required' : ''
})
</script>
