import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email(' Inválid Email ').required('Email is Required'),
  password: Yup.string().required('Password is Required'),
});

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email(' Inválid Email ').required('Email is Required'),
  lastname: Yup.string().required('Lastname is Required'),
  // firstName: Yup.string().required('Firstname is Required'),
  phone: Yup.string().required('Phone is Required'),
  identification: Yup.string().required('Document is Required'),
  birthDate: Yup.string().required('Datebirth is Required'),
  address: Yup.string().required('Address is Required'),

  password: Yup.string().required('Password is Required'),
});
