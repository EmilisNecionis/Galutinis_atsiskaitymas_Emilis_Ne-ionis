import Button from '../ui/button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import css from './form.module.css';
import { useAuthCtx } from '../../store/AuthProvider';
import FormContainer from '../ui/formContainer/FormContainer';

function LoginForm({onLogin}) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).trim().required(),
    }),
    onSubmit: (values) => {
      console.log('form values ===', values);
      onLogin(values)
    },
  });

  return (
    <>
    <FormContainer>
      <form onSubmit={formik.handleSubmit}>
        <input
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
        <Button type="submit">Login</Button>
      </form>
     </FormContainer> 
    </>
  );
}

export default LoginForm;
