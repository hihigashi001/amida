import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = (props) => {
  return <FontAwesomeIcon icon={props.icon} size={props.size} color={props.color} />;
};

Icon.defaultProps = {
  size: "lg",
  color: "#FFF",
};
