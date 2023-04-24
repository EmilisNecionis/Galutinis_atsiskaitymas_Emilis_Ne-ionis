import Button from '../ui/button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import css from './form.module.css';
import { useAuthCtx } from '../../store/AuthProvider';
import FormContainer from '../ui/formContainer/FormContainer';


function RegisterForm({onRegister}) {
  const { ui } = useAuthCtx()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).trim().required(),
      repeatPassword: Yup.string().min(6).trim().required(),
    }),
    onSubmit: (values) => {
      console.log('form values ===', values);
      const { password, repeatPassword } = formik.values;
      if (password === repeatPassword) {
        onRegister({
          email: values.email,
          password,
        });
      } else {
        ui.showError('Passwords do not match')
      }
    },
  });


  return (
    <>
    <FormContainer>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="email"
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type='text'
          placeholder='Email'
        />
        {formik.errors.email && formik.touched.email && (
          <p className={css.errorMsg}>*{formik.errors.email}</p>
        )}
        <input
          id="password"
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type='password'
          placeholder='Password'
        />
        {formik.errors.password && formik.touched.password && (
          <p className={css.errorMsg}>*{formik.errors.password}</p>
        )}
        <input
          id="repeatPassword"
          name='repeatPassword'
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type='password'
          placeholder='Repeat password'
        />
         {formik.errors.repeatPassword && formik.touched.repeatPassword && (
          <p className={css.errorMsg}>*{formik.errors.repeatPassword}</p>
        )}
        <Button type='submit'>Register</Button>
      </form>
      </FormContainer>
    </>
  );
}

export default RegisterForm;