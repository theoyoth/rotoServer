import { extend } from 'vee-validate'
import {
  required,
  numeric,
  alpha_spaces,
  alpha_dash,
  confirmed,
  min,
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
  message: 'isikan huruf dan spasi',
})

extend('alpha_dash', {
  ...alpha_dash,
  message: 'isikan huruf dan angka',
})
extend('confirmed', {
  ...confirmed,
  message: 'password tidak cocok',
})
extend('min', {
  ...min,
  message: 'minimal 8 karakter',
})
extend('passchar', {
  message: 'inputan harus berupa huruf dan angka',
  validate: (value) => {
    const spaceAlphaNum = /^[a-zA-Z\s\d]*$/
    const anychar = spaceAlphaNum.test(value)
    if (anychar) {
      return true
    } else {
      return false
    }
  },
})
// extend('passwordcheck',{
//   validate: (value) => {
//     const minpass = /^[min:8]/
//   }
// })
