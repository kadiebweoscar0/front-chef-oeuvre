import React from 'react';
import { useForm } from 'react-hook-form';

type InputFieldProps = {
  type: string;
  name: string;
  placeholder?: string;
  register?: ReturnType<typeof useForm>['register'];
  validation?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  register,
  validation,
  onChange,
}) => (
  <input
    type={type}
    onChange={onChange}
    placeholder={placeholder}
    {...register && register(name, validation)} 
    className="max-sm:mx-0 max-sm:w-[23rem] border-2 bg-[#FFFFFF] w-[28.125rem] h-[3.813rem] rounded-xl text-xl p-4"
  />
);
export default InputField;
