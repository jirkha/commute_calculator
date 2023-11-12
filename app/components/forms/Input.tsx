import React, {useState, ChangeEvent} from "react";

export interface InputProps {
  
  classNameInput: string;
  name: string;
  label?: string;
  type?: string;
  value?: string;
  onClick?: any;
  // onClick?:
  //   | ((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  //   | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col items-center">
      <label className="text-2xl font-semibold text-calcd">{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        required={props.required}
        className={props.classNameInput}
      />
    </div>
  );
}
