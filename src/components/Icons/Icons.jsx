import styled from "styled-components";
import IconsSymbols from "./SVGIcons";
import Tooltip from "../Tooltip";

const switchIcon = (icon) => {
  switch (icon) {
    case "info":
      return <IconsSymbols.InfoCircle />;
    case "checkCircle":
      return <IconsSymbols.CheckCircle />;
    case "error":
      return <IconsSymbols.ErrorCircle />;
    case "agent":
      return <IconsSymbols.Agent />;
    case "agentFilled":
      return <IconsSymbols.AgentFilled />;
    case "edit":
      return <IconsSymbols.Edit />;
    case "editBox":
      return <IconsSymbols.EditBox />;
    case "delete":
      return <IconsSymbols.Delete />;
    case "close":
      return <IconsSymbols.Close />;
    case "check":
      return <IconsSymbols.Check />;
    case "circle":
      return <IconsSymbols.Circle />;
    case "search":
      return <IconsSymbols.Search />;
    case "download":
      return <IconsSymbols.Download />;
    case "eye":
      return <IconsSymbols.Eye />;
    case "eyeOff":
      return <IconsSymbols.EyeOff />;
    case "plus":
      return <IconsSymbols.Plus />;
    case "chevronDown":
      return <IconsSymbols.ChevronDown />;
    case "chevronLeft":
      return <IconsSymbols.ChevronLeft />;
    case "chevronRight":
      return <IconsSymbols.ChevronRight />;
    case "link":
      return <IconsSymbols.Link />;
    case "key":
      return <IconsSymbols.Key />;
    case "headset":
      return <IconsSymbols.Headset />;
    case "refresh":
      return <IconsSymbols.Refresh />;
    case "clock":
      return <IconsSymbols.Clock />;
    case "filter":
      return <IconsSymbols.Filter />;
    case "plusCircle":
      return <IconsSymbols.PlusCircle />;
    case "unlocked":
      return <IconsSymbols.Unlocked />;
    case "locked":
      return <IconsSymbols.Locked />;
    case "scheduled":
      return <IconsSymbols.Scheduled />;
    case "attendance":
      return <IconsSymbols.Attendance />;
    case "delegated":
      return <IconsSymbols.Delegated />;
    case "pdf":
      return <IconsSymbols.Pdf />;
    case "comment":
      return <IconsSymbols.Comment />;
    case "attachment":
      return <IconsSymbols.Attachment />;
    case "infoFilled":
      return <IconsSymbols.InfoFilled />;
    case "user":
      return <IconsSymbols.User />;
    case "book":
      return <IconsSymbols.Book />;
    case "exit":
      return <IconsSymbols.Exit />;
    case "play":
      return <IconsSymbols.Play />;
    case "closeSmall":
      return <IconsSymbols.CloseSmall />;
    case "warning":
      return <IconsSymbols.Warning />;
    case "square":
      return <IconsSymbols.Square />;
    case "excel":
      return <IconsSymbols.Excel />;
    case "bell":
      return <IconsSymbols.Bell />;
    case "inbox":
      return <IconsSymbols.Inbox />;
    case "moreVertical":
      return <IconsSymbols.MoreVertical />;
    case "starCircle":
      return <IconsSymbols.StarCircle />;
    default:
      return null;
  }
};

const Container = styled.div`
  svg {
    ${({ color }) =>
      color &&
      `
      color: ${color} !important;
    `}
  }
`;

export const Icons = ({ icon = "", tooltip = "", color = "" }) => {
  if (tooltip) {
    return (
      <Tooltip tooltip={tooltip}>
        <Container color={color}>{switchIcon(icon)}</Container>
      </Tooltip>
    );
  }

  return <Container color={color}>{switchIcon(icon)}</Container>;
};
