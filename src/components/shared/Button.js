//liblary
import cc from "classcat";

export const Button = (props) => {
  const className = cc([
    props.className,
    "bg-primary hover:bg-secondary text-seoColor font-bold text-xs focus:outline-none",
  ]);
  return (
    <button type="button" className={className} onClick={props.onClick}>{props.children}</button>
  )
}