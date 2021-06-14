import { Validators } from "@angular/forms";

export default {
  firstName: {
    name: 'firstName',
    label: 'First Name',
    maxlength: 15,
    options: [{ value: '', disabled: true, }]
  },
  lastName: {
    name: 'lastName',
    label: 'Last Name',
    maxlength: 15,
    options: [{ value: '', disabled: false }]
  },
  dob: {
    name: 'dob',
    label: 'Date of birth',
    maxlength: 15,
    options: [{ value: '', disabled: false }]
  },
  email: {
    name: 'email',
    label: 'Email',
    maxlength: 255,
    options: [{ value: '', disabled: false }]
  },
  phone: {
    name: 'phone',
    label: 'Phone',
    maxlength: 15,
    options: [{ value: '', disabled: false }]
  },
  address: {
    name: 'address',
    label: 'Address',
    maxlength: 15,
    options: [{ value: '', disabled: false }]
  },
}
