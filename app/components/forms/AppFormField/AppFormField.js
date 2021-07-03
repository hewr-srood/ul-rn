import { useFormikContext } from 'formik';
import React from 'react';
import AppTextInput from '../../AppTextInput/AppTextInput';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const AppFormField = ({ name, ...props }) => {
  const { setFieldTouched, handleChange, touched, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...props}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export default AppFormField;
