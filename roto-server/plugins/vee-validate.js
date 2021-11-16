import { extend } from 'vee-validate'
import {
  required,
  numeric,
  alpha_spaces,
  alpha_dash,
} from 'vee-validate/dist/rules'

// Object.keys(rules).forEach((rule) => {
//   extend(rule, rules[rule])
// })

extend('required', {
  ...required,
  message: 'bagian ini harus di isi',
})

extend('numeric', {
  ...numeric,
  message: 'isian harus berupa angka',
})

extend('alpha_spaces', {
  ...alpha_spaces,
  message: 'isikan angka dan huruf',
})

extend('alpha_dash', {
  ...alpha_dash,
  message: 'isian berupa huruf dan angka',
})
