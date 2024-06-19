import { StyledTooltip } from "./Tooltip.styles";

const Tooltip = ({ params, children }) => {
  return <StyledTooltip {...params}>{children}</StyledTooltip>;
};

export default Tooltip;
