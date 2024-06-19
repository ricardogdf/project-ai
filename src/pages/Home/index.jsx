import "./Home.styles.js";
import Content from "./Home.styles.js";
import Chat from "./components/Chat";
import TextFieldWithFile from "./components/TextFieldWithFile";
import { Box } from "@mui/material";
import { useRef } from "react";

function Home() {
  const boxTextAreaRef = useRef(null);

  return (
    <Box width="100%" height="100vh">
      <Content>
        <Chat />
      </Content>
      <div
        ref={boxTextAreaRef}
        style={{
          display: "flex",
          justifyContent: "center",
          maxHeight: "180px",
        }}
        flexDirection="column"
        alignItems="center"
      >
        <TextFieldWithFile boxTextAreaRef={boxTextAreaRef} />
      </div>
    </Box>
  );
}

export default Home;
