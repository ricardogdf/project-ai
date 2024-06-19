import Row from "../Row";
import { ListItem, OrderedList } from "./Timeline.styles";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const Timeline = ({ children }) => <OrderedList>{children}</OrderedList>;

const TimelineItem = ({ remetente, children }) => (
  <Row
    style={{
      width: remetente === "usuario" ? "auto" : "100%",
      maxWidth: remetente === "usuario" ? "70%" : "100%",
    }}
  >
    {remetente === "ia" && <AutoAwesomeIcon sx={{ padding: "0 8px" }} />}
    <ListItem
      style={{
        flexDirection: remetente === "ia" ? "row" : "row-reverse",
        borderRight: remetente === "usuario" && "2px solid",
        borderLeft: remetente === "ia" && "2px solid",
        backgroundColor: remetente === "usuario" && "#2f2f2f",
        borderRadius: remetente === "usuario" && "15px 0 0 15px",
      }}
    >
      {children}
    </ListItem>
  </Row>
);

export { Timeline, TimelineItem };
