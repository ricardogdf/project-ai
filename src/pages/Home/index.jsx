import "./Home.styles.js";
import Content from "./Home.styles.js";
import Chat from "./components/Chat";
import TextFieldWithFile from "./components/TextFieldWithFile";
import { Box } from "@mui/material";
import { useRef, useState } from "react";

function Home() {
  const [content, setContent] = useState([]);
  const boxTextAreaRef = useRef(null);

  return (
    <Box width="100%" height="100vh">
      <Content>
        <Chat content={content} />
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
        <TextFieldWithFile
          boxTextAreaRef={boxTextAreaRef}
          content={content}
          setContent={setContent}
        />
      </div>
    </Box>
  );
}

export default Home;
