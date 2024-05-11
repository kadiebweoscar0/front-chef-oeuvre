import { useForm } from 'react-hook-form';
import React from 'react';

type InputFieldProps = {
  type: string;
  name?: string;
  placeholder?: string;
  register?: ReturnType<typeof useForm>['register'];
  validation?: any;
  value?: any;
  onChange?: any
};

const InputField: React.FunctionComponent<InputFieldProps> = ({ type, name, placeholder, register, validation, value, onChange }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    {...register && register(name, validation)}
    className="max-sm:mx-0 max-sm:w-[23rem] mb-3 border-2 bg-[#FFFFFF] w-[28.125rem] h-[3.813rem] rounded-xl text-xl p-4"
  />
);

export default InputField;

