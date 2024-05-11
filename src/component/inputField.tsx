import React from 'react';
import { useForm } from 'react-hook-form';

type InputFieldProps = {
  type: string;
  name: string;
  placeholder?: string;
  register?: ReturnType<typeof useForm>['register'];
  validation?: any;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  register,
  validation,
  value,
  onChange,
  className,
}) => (
  <input
    type={type}
    value={value || ''}
    onChange={onChange}
    placeholder={placeholder}
    {...register && register(name, validation)}
    className={className}
  />
);


export default InputField;
