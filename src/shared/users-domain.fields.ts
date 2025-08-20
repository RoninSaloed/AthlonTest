export const RELATED_USER_FORM_FIELDS = {
  NAME: 'name',
  SURNAME: 'surname',
  EMAIL: 'email',
  PASSWORD: 'password',
} as const

export enum ShiftsEnum {
  DAY_SHIFT = 'day shift',
  NIGHT_SHIFT = 'night shift',
}

export const textInputs = [
  {
    label: 'Name',
    placeholder: 'Write your name',
    type: RELATED_USER_FORM_FIELDS.NAME,
  },
  {
    label: 'Surname',
    placeholder: 'Write your surname',
    type: RELATED_USER_FORM_FIELDS.SURNAME,
  },
  {
    label: 'Email',
    placeholder: 'Write your email ',
    type: RELATED_USER_FORM_FIELDS.EMAIL,
  },
  {
    label: 'Password',
    placeholder: 'Write your password',
    type: RELATED_USER_FORM_FIELDS.PASSWORD,
  },
]

export const checkBoxInputs = [
  { id: 0, label: 'Laptop', type: 'laptop' },
  { id: 1, label: 'Smartphone', type: 'smartphone' },
  { id: 2, label: 'Headphones', type: 'headphones' },
  { id: 3, label: 'Keyboard', type: 'keyboard' },
  { id: 4, label: 'Mouse', type: 'mouse' },
  { id: 5, label: 'Monitor', type: 'monitor' },
  { id: 6, label: 'Tablet', type: 'tablet' },
  { id: 7, label: 'Smartwatch', type: 'smartwatch' },
  { id: 8, label: 'Camera', type: 'camera' },
  { id: 9, label: 'Printer', type: 'printer' },
  { id: 10, label: 'Speaker', type: 'speaker' },
  { id: 11, label: 'Router', type: 'router' },
  { id: 12, label: 'Projector', type: 'projector' },
  { id: 13, label: 'External Hard Drive', type: 'external_hdd' },
  { id: 14, label: 'Microphone', type: 'microphone' },
  { id: 15, label: 'Scanner', type: 'scanner' },
  { id: 16, label: 'Smart TV', type: 'smart_tv' },
  { id: 17, label: 'Drone', type: 'drone' },
  { id: 18, label: 'VR Headset', type: 'vr_headset' },
  { id: 19, label: 'Game Console', type: 'game_console' },
]

export const peopleInputs = [
  { id: 0, label: 'John', type: 'john' },
  { id: 1, label: 'Mary', type: 'mary' },
  { id: 2, label: 'Michael', type: 'michael' },
  { id: 3, label: 'Sarah', type: 'sarah' },
  { id: 4, label: 'David', type: 'david' },
  { id: 5, label: 'Emma', type: 'emma' },
  { id: 6, label: 'Daniel', type: 'daniel' },
  { id: 7, label: 'Olivia', type: 'olivia' },
  { id: 8, label: 'James', type: 'james' },
  { id: 9, label: 'Sophia', type: 'sophia' },
  { id: 10, label: 'William', type: 'william' },
  { id: 11, label: 'Isabella', type: 'isabella' },
  { id: 12, label: 'Alexander', type: 'alexander' },
  { id: 13, label: 'Mia', type: 'mia' },
  { id: 14, label: 'Benjamin', type: 'benjamin' },
  { id: 15, label: 'Charlotte', type: 'charlotte' },
  { id: 16, label: 'Matthew', type: 'matthew' },
  { id: 17, label: 'Amelia', type: 'amelia' },
  { id: 18, label: 'Joseph', type: 'joseph' },
  { id: 19, label: 'Evelyn', type: 'evelyn' },
]
