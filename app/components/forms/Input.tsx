import React, {useState, ChangeEvent} from "react";

export interface InputProps {
  // id?: string;
  className: string;
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
    <div className="flex flex-col">
      <label>{props.label}</label>
      <input
        {...props}
      />
    </div>
  );
}
