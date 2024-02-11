import React from "react";

interface Props {
  id: string;
  autoComplete : string;
  type : string;
  name : string;
  placeholder : string;
}
// eslint-disable-next-line react/display-name
export const InputText = React.forwardRef((props: Props) => (
  <input
    className="w-[80%] text-white outline-none border-none p-2 bg-[#21363B] h-[36px] rounded-md text-xs"
    id={props.id}
    autoComplete={props.autoComplete}
    type={props.type}
    name={props.name}
    placeholder={props.placeholder}
  />
));
