//liblary
import cc from "classcat";

export const Button = (props) => {
  const className = cc([
    props.className,
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
  ]);
  return (
    <button type="button" className={className} onClick={props.onClick}>{props.children}</button>
  )
}