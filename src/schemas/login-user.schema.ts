import { RELATED_USER_FORM_FIELDS } from '@/shared/users-domain.fields'
import * as zod from 'zod'

export const loginUserSchema = zod.object({
  [RELATED_USER_FORM_FIELDS.NAME]: zod.string().min(1, 'required'),
  [RELATED_USER_FORM_FIELDS.SURNAME]: zod.string().min(1, 'required'),
  [RELATED_USER_FORM_FIELDS.EMAIL]: zod
    .string()
    .min(1, 'required')
    .email({ message: 'Invalid email' }),
  [RELATED_USER_FORM_FIELDS.PASSWORD]: zod
    .string()
    .min(1, 'required')
    .min(8, { message: 'min length' }),
})
