import React from "react";
import parse from "html-react-parser";
import { Box, Paper, Typography } from "@mui/material";
import { Timeline, TimelineItem } from "../../../../components/Timeline";
import Row from "../../../../components/Row";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const Chat = ({ content }) => {
  return (
    <Box width="48rem" pt={3}>
      {content.length ? (
        <Timeline>
          {content?.map(({ remetente, mensagem, anexos }) => {
            return (
              <TimelineItem remetente={remetente}>
                {mensagem && (
                  <Box>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ "& > p": { m: "0" }, px: "16px", py: "12px" }}
                    >
                      {parse(mensagem)}
                    </Typography>
                    <Row flexWrap="wrap">
                      {anexos &&
                        anexos?.length > 0 &&
                        anexos.map(({ arquivo }) => (
                          <Paper
                            sx={{
                              backgroundColor: "var(--terciary-background)",
                              color: "#FFF",
                              m: "0 16px",
                              cursor: "pointer",
                              width: "calc(50% - 16px)",
                            }}
                          >
                            <Typography
                              variant="body2"
                              p="10px"
                              component="div"
                            >
                              {arquivo}
                            </Typography>
                          </Paper>
                        ))}
                    </Row>
                  </Box>
                )}
              </TimelineItem>
            );
          })}
        </Timeline>
      ) : (
        <Box
          height="calc(100vh - 300px)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <AutoAwesomeIcon
            sx={{ width: "70px", height: "70px", opacity: "0.7" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Chat;
