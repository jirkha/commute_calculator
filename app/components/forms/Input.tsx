import React, {useState, ChangeEvent} from "react";

interface InputProps {
  id?: number;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function Input(props: InputProps) {

  //const [value, setValue] = useState("")
  //const { setValue } = props;

  return (
    <div className="space-x-4">
      <label>{props.label}</label>
      <input
        className="rounded py-2 my-2 px-3 max-w-screen-sm"
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        //value={props.value || ""}
        defaultValue={""}
        placeholder={props.placeholder}
      />
    </div>
  );
}
