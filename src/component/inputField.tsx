import { useForm } from 'react-hook-form';
import React from 'react';

type InputFieldProps = {
  type: string;
  name?: string;
  placeholder?: string;
  register?: ReturnType<typeof useForm>['register'];
  validation?: any;
};

const InputField: React.FunctionComponent<InputFieldProps> = ({ type, name, placeholder, register, validation }) => (
  <input
    type={type}
    placeholder={placeholder}
    {...register && register(name, validation)}
    className="max-sm:mx-0 max-sm:w-[23rem] bg-[#FFFFFF] w-[28.125rem] h-[3.813rem] rounded-xl text-xl p-4"
  />
);

export default InputField;

