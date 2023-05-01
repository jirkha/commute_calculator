import React, {useState, ChangeEvent} from "react";

function generateOptions(start: number, end: number, step: number) {
  let options = [];
  for (let i = start; i <= end; i += step) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return options;
}

export interface DataListProps {
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
  list: string;
  start: number;
  stop: number;
  step: number;
  required?: boolean;
}

export default function DataList(props: DataListProps) {
  
  return (
    <div className="flex flex-col">
      <label>{props.label}</label>
      <input {...props} />
      <datalist id={props.list}>
        {generateOptions(props.start, props.stop, props.step)}
      </datalist>
    </div>
  );
}
