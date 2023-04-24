import React from 'react';
import { useFormik } from 'formik';
import Button from '../ui/button/Button';
import * as Yup from 'yup';
import { useAuthCtx } from '../../store/AuthProvider';
import css from '../auth/form.module.css'
import FormContainer from '../ui/formContainer/FormContainer';




function AddShopForm({onNewShop}) {
  const {user} = useAuthCtx();
  const formik = useFormik({
    initialValues: {
      shopName: '',
      town: '',
      startYear: '',
      description: '',
      ImageUrl: '',
      userUid: user?.uid,
    },
    validationSchema: Yup.object({
      shopName: Yup.string().min(4).required(),
      town: Yup.string().min(4).required(),
      startYear: Yup.number().min(1970).max(2022).required(),
      description: Yup.string().min(6).required(),
      ImageUrl: Yup.string().min(5).required(),
    }),
    onSubmit: (values) => {
      console.log(values);
      const newShop = {
        shopName: values.shopName,
        town: values.town,
        startYear: values.startYear,
        description: values.description,
        ImageUrl: values.ImageUrl,
        userUid: user.uid,
      };
      console.log('newShop ===', newShop);
      onNewShop(newShop)
    },
  });
  return (
    <>
    <FormContainer>
    <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          id="shopName"
          name="shopName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.shopName}
          placeholder='Shop name'
        />
        {formik.errors.shopName && formik.touched.shopName && (
          <p className={css.errorMsg}>*{formik.errors.shopName}</p>
        )}
        <input
          type="text"
          id="town"
          name="town"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.town}
          placeholder='Town'
        />
         {formik.errors.town && formik.touched.town && (
          <p className={css.errorMsg}>*{formik.errors.town}</p>
        )}
        <input
          type="number"
          id="startYear"
          name="startYear"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.startYear}
          placeholder='Start year'
        />
         {formik.errors.startYear && formik.touched.startYear && (
          <p className={css.errorMsg}>*{formik.errors.startYear}</p>
        )}
        <textarea
          id='description'
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          placeholder='Description'
        />
         {formik.errors.description && formik.touched.description && (
          <p className={css.errorMsg}>*{formik.errors.description}</p>
        )}
        <input
          type="text"
          id="image"
          name="ImageUrl"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.ImageUrl}
          placeholder='Import image Url'
        />
         {formik.errors.ImageUrl && formik.touched.ImageUrl && (
          <p className={css.errorMsg}>*{formik.errors.ImageUrl}</p>
        )}
      <Button type="submit">
        Submit
      </Button>
    </form>
    </FormContainer>
    </>
  )
}

export default AddShopForm