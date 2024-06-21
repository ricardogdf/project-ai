import React, { useRef, useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Row from "../../../../components/Row";
import SendIcon from "@mui/icons-material/Send";
import useAutosizeTextArea from "../../../../utils/useAutosizeTextArea";
import { handleUploadPDF } from "../../../../hooks/chat";

const tasks = [
  {
    id: 1,
    ativo: true,
    descricao: "Verificar ortografia",
    tarefa: "Verifique a ortografia corrigindo erros de escrita e corrija-os",
  },
  {
    id: 2,
    ativo: true,
    descricao: "Melhorar textos",
    tarefa:
      "Analise os textos e melhore-os deixando-os mais formais e coerentes",
  },
  {
    id: 3,
    ativo: true,
    descricao: "Análise de conteúdo",
    tarefa: "Analise o conteúdo e gere melhorias",
  },
  //{
  //  id: 5,
  //  ativo: true,
  //  descricao: "Análise de conteúdo",
  //  tarefa: "Analise o conteúdo e gere melhorias",
  //},
];

export const TextFieldWithFile = ({ boxTextAreaRef, boxChatRef }) => {
  const [file, setFile] = useState([]);
  const [text, setText] = useState("");
  const fileInput = useRef(null);
  const textAreaRef = useRef(null);

  useAutosizeTextArea(textAreaRef.current, boxTextAreaRef.current, text);

  const handleRemoveFile = (index) => (event) => {
    event.preventDefault();
    if (file?.length) {
      setFile(file.filter((_, i) => i !== index));
    }
  };

  const handleInputFileChange = (e) => {
    console.log("e.target.files", [...e.target.files]);
    setFile([...e.target.files]);
  };

  const handleClickTask = (task) => {
    setText(task);
  };

  const handleSubmit = () => {
    console.log("file", file);
    console.log("file[0]", file[0]);
    const normalizeValues = {
      file: { fileName: file[0].name, type: file[0].type, name: file[0].name },
    };
    handleUploadPDF(normalizeValues);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {!text && (
        <Box sx={{ maxWidth: "44rem" }}>
          <Box display="flex">
            {tasks?.map(({ id, descricao, tarefa }) => (
              <Button
                key={id}
                style={{
                  backgroundColor: "#2f2f2f",
                  margin: "16px",
                  height: "40px",
                  borderRadius: "16px",
                  color: "var(--primary-color)",
                  borderColor: "var(--primary-color)",
                }}
                variant="outlined"
                onClick={() => handleClickTask(tarefa)}
              >
                {descricao}
              </Button>
            ))}
          </Box>
        </Box>
      )}
      {file?.length > 0 && (
        <Box
          width="44rem"
          sx={{
            backgroundColor: "#2f2f2f",
            borderBottom: "2px solid var(--border-color)",
            color: "#FFF",
            borderRadius: "16px 16px 0 0",
          }}
        >
          {file?.map((file, index) => (
            <Button
              key={index}
              style={{
                borderRadius: "16px",
                width: "calc(50% - 32px)",
                margin: "16px",
                height: "50px",
                color: "var(--primary-color)",
                borderColor: "var(--primary-color)",
              }}
              variant="outlined"
              onClick={handleRemoveFile(index)}
            >
              {file.name}
            </Button>
          ))}
        </Box>
      )}
      <Box
        width="48rem"
        sx={{
          backgroundColor: "#2f2f2f",
          color: "#FFF",
          borderRadius: "26px",
        }}
      >
        <Row alignItems="end" padding="8px">
          <Row sx={{ width: "3rem" }}>
            <input
              ref={fileInput}
              style={{ display: "none" }}
              multiple
              type="file"
              onChange={handleInputFileChange}
            />
            <IconButton onClick={() => fileInput.current.click()}>
              <AttachFileIcon sx={{ fill: "#FFF" }} />
            </IconButton>
          </Row>
          <textarea
            ref={textAreaRef}
            placeholder="Digite aqui o seu texto"
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            rows={1}
            style={{
              maxHeight: "180px",
              fontSize: "16px",
              lineHeight: "24px",
              padding: "8px 0px",
              width: "41rem",
              background: "none",
              border: "none",
              color: "#FFFFFF",
              resize: "none",
              textDecoration: "none",
              outline: "none",
            }}
          />
          <Row sx={{ width: "3rem" }}>
            <IconButton onClick={() => handleSubmit()}>
              <SendIcon sx={{ fill: "#FFF" }} />
            </IconButton>
          </Row>
        </Row>
      </Box>
    </Box>
  );
};

export default TextFieldWithFile;
