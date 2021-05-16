//liblary
import cc from "classcat";

export const Button = (props) => {
  const className = cc([
    props.className,
    "p-4 bg-primary hover:bg-secondary text-white font-bold text-sm focus:outline-none",
  ]);
  return (
    <button type="button" className={className} onClick={props.onClick}>{props.children}</button>
  )
}