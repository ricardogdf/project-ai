import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { Box, Paper, Typography } from "@mui/material";
import { Timeline, TimelineItem } from "../../../../components/Timeline";
import Row from "../../../../components/Row";

const Chat = () => {
  const [content, setContent] = useState([
    { id: 1, remetente: "usuario", mensagem: "Olá, como começo?", anexos: [] },
    {
      id: 2,
      remetente: "ia",
      mensagem: "Olá! envie sua dúvida.",
      anexos: [],
    },
    {
      id: 3,
      remetente: "usuario",
      mensagem: "Analise esse anexo pra mim.",
      anexos: [{ arquivo: "teste" }],
    },
    {
      id: 4,
      remetente: "ia",
      mensagem:
        "É um belo arquivo, mas esse está melhorado. Analisei isso, aquilo e mais isso também, agora está melhor.",
      anexos: [{ arquivo: "teste-melhor" }],
    },
    {
      id: 5,
      remetente: "usuario",
      mensagem: "Está melhor mesmo, obrigado.",
      anexos: [],
    },
    {
      id: 6,
      remetente: "ia",
      mensagem: "Disponha.",
      anexos: [],
    },
    {
      id: 7,
      remetente: "ia",
      mensagem:
        "Claro! Vou escrever um texto sobre um tema inspirador. Vamos falar sobre a importância da resiliência na vida.A Importância da Resiliência A vida é um percurso cheio de desafios, incertezas e mudanças constantes. Em meio a essa jornada, a resiliência emerge como uma das qualidades mais valiosas que podemos desenvolver. A resiliência é a capacidade de se adaptar e superar adversidades, transformando obstáculos em oportunidades de crescimento e aprendizado. O Conceito de Resiliência Originalmente um termo utilizado na física para descrever a capacidade de um material de retornar à sua forma original após ser deformado, a resiliência, no contexto humano, refere-se à habilidade de enfrentar crises e sair delas mais forte. Não se trata de evitar dificuldades, mas sim de enfrentá-las com coragem, flexibilidade e determinação.",
      anexos: [],
    },
    {
      id: 8,
      remetente: "usuario",
      mensagem:
        "Claro! Vou escrever um texto sobre um tema inspirador. Vamos falar sobre a importância da resiliência na vida.A Importância da Resiliência A vida é um percurso cheio de desafios, incertezas e mudanças constantes. Em meio a essa jornada, a resiliência emerge como uma das qualidades mais valiosas que podemos desenvolver. A resiliência é a capacidade de se adaptar e superar adversidades, transformando obstáculos em oportunidades de crescimento e aprendizado. O Conceito de Resiliência Originalmente um termo utilizado na física para descrever a capacidade de um material de retornar à sua forma original após ser deformado, a resiliência, no contexto humano, refere-se à habilidade de enfrentar crises e sair delas mais forte. Não se trata de evitar dificuldades, mas sim de enfrentá-las com coragem, flexibilidade e determinação.",
      anexos: [],
    },
    {
      id: 9,
      remetente: "usuario",
      mensagem:
        "Claro! Vou escrever um texto sobre um tema inspirador. Vamos falar sobre a importância da resiliência na vida.A Importância da Resiliência A vida é um percurso cheio de desafios, incertezas e mudanças constantes. Em meio a essa jornada, a resiliência emerge como uma das qualidades mais valiosas que podemos desenvolver. A resiliência é a capacidade de se adaptar e superar adversidades, transformando obstáculos em oportunidades de crescimento e aprendizado. O Conceito de Resiliência Originalmente um termo utilizado na física para descrever a capacidade de um material de retornar à sua forma original após ser deformado, a resiliência, no contexto humano, refere-se à habilidade de enfrentar crises e sair delas mais forte. Não se trata de evitar dificuldades, mas sim de enfrentá-las com coragem, flexibilidade e determinação.",
      anexos: [],
    },
  ]);

  return (
    <Box width="48rem" pt={3}>
      <Timeline>
        {content?.map(({ id, remetente, mensagem, anexos }) => {
          return (
            <TimelineItem key={id} remetente={remetente}>
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
                          <Typography variant="body2" p="10px" component="div">
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
    </Box>
  );
};

export default Chat;
