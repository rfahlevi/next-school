import React from 'react'
import { FieldError } from 'react-hook-form';

type InputFieldProps = {
    label: string;
    type?: string;
    register: any;
    name: string;
    defaultValue?: string;
    error?: FieldError;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}   

const InputField = ({
    label,
    type = "text",
    register,
    name,
    defaultValue,
    error,
    inputProps,
} : InputFieldProps ) => {
    return (
        <div className="flex flex-col gap-1 w-full md:w-[calc(33.33%-1rem)]">
            <label className="text-xs text-gray-500">{label}</label>
            <input type={type} {...register(name)}
                className="border border-slate-300 p-2 rounded-md text-sm w-full"
                {...inputProps} defaultValue={defaultValue} />
            {error?.message && <p className="text-[11px] text-red-500 italic">{error?.message.toString()}</p>}
        </div>
    )
}

export default InputField