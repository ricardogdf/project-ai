import "./Tasks.styles.js";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton, TextField, Tooltip } from "@mui/material";
import { useFormik } from "formik";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Toast from "../../components/Toast/index.js";
import Row from "../../components/Row/Row.jsx";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

const rows = [
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
  {
    id: 4,
    ativo: false,
    descricao: "Teste 123",
    tarefa: "Teste 123",
  },
  {
    id: 5,
    ativo: true,
    descricao: "Análise de conteúdo",
    tarefa: "Analise o conteúdo e gere melhorias",
  },
];

function Tasks() {
  const handleSubmit = () => {};

  const formik = useFormik({
    initialValues: { rows: rows || [] },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleActivate = async (e, row) => {
    e.stopPropagation();

    const rowToUpdate = {
      ...row,
      ativo: row.ativo ? false : true,
    };

    try {
      formik.setValues({ ...formik.values, rowToUpdate });

      Toast.success({
        message: "Cliente atualizado com sucesso!",
      });
    } catch (error) {
      Toast.error({
        message: `Erro ao atualizar cliente. Contate o suporte.`,
      });
    }
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation();

    try {
      formik.setValues({
        rows: [...formik.values.rows.filter((row) => row.id !== id)],
      });

      Toast.success({
        message: "Nova linha adicionada com sucesso!",
      });
    } catch (error) {
      Toast.error({
        message: `Erro ao adicionar nova linha. Tente novamente mais tarde.`,
      });
    }
  };

  const handleAdd = async (e) => {
    e.stopPropagation();

    const rowToAdd = {
      id: formik.values.rows.at(-1)?.id ? formik.values.rows.at(-1)?.id + 1 : 1,
      ativo: true,
      descricao: "",
      tarefa: "",
    };

    try {
      formik.setValues({ rows: [...formik.values.rows, rowToAdd] });

      Toast.success({
        message: "Nova linha adicionada com sucesso!",
      });
    } catch (error) {
      Toast.error({
        message: `Erro ao adicionar nova linha. Tente novamente mais tarde.`,
      });
    }
  };

  return (
    <Row
      sx={{
        maxHeight: "calc(100vh - 80px)",
      }}
      flexDirection="column"
      alignItems="center"
    >
      <Row
        sx={{
          width: "850px",
          marginTop: "50px",
        }}
        justifyContent="space-between"
        alignItems="end"
      >
        <Tooltip
          placement="right-start"
          title="Tarefas ativas aparecerão como opções de automatização de tarefas na tela principal. Máximo ativas: 4."
        >
          <InfoIcon sx={{ fill: "var(--primary-color)" }} />
        </Tooltip>
        <Button
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            color: "var(--primary-color)",
            backgroundColor: "red",
            ":hover": {
              backgroundColor: "darkred",
            },
          }}
        >
          Salvar
        </Button>
      </Row>
      <TableContainer
        sx={{
          margin: "20px 0 50px 0",
          width: "850px",
          backgroundColor: "var(--secondary-background)",
          borderRadius: "16px",
        }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: "var(--primary-color)",
                  fontWeight: "bold",
                }}
              >
                Descrição
              </TableCell>
              <TableCell
                sx={{
                  color: "var(--primary-color)",
                  fontWeight: "bold",
                }}
              >
                Tarefa
              </TableCell>
              <TableCell
                sx={{
                  paddingLeft: "25px",
                  color: "var(--primary-color)",
                  fontWeight: "bold",
                }}
              >
                Ações
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formik.values.rows.map((row, index) => {
              return (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ verticalAlign: "baseline" }}>
                    <TextField
                      sx={{
                        "&:last-child textarea, &:last-child input": {
                          color: "var(--primary-color)",
                        },
                        "&:last-child fieldset": {
                          borderColor: "var(--primary-color)",
                          borderRadius: "16px",
                        },
                      }}
                      multiline
                      fullWidth
                      name={`rows[${index}].descricao`}
                      type="text"
                      value={row.descricao}
                      onChange={formik.handleChange}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      sx={{
                        "&:last-child textarea, &:last-child input": {
                          color: "var(--primary-color)",
                        },
                        "&:last-child fieldset": {
                          borderColor: "var(--primary-color)",
                          borderRadius: "16px",
                        },
                      }}
                      multiline
                      fullWidth
                      name={`rows[${index}].tarefa`}
                      type="text"
                      value={row.tarefa}
                      onChange={formik.handleChange}
                    />
                  </TableCell>
                  <TableCell sx={{ width: "80px" }}>
                    {row.ativo ? (
                      <>
                        <Tooltip title="Desativar">
                          <IconButton
                            aria-label="ativo"
                            onClick={(event) => handleActivate(event, row)}
                          >
                            <CheckCircleIcon
                              sx={{ fill: "var(--primary-color)" }}
                            />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Deletar">
                          <IconButton
                            aria-label="deletar"
                            onClick={(event) => handleDelete(event, row.id)}
                          >
                            <DeleteIcon sx={{ fill: "var(--primary-color)" }} />
                          </IconButton>
                        </Tooltip>
                      </>
                    ) : (
                      <>
                        <Tooltip title="Ativar">
                          <IconButton
                            aria-label="inativo"
                            onClick={(event) => handleActivate(event, row)}
                          >
                            <CancelIcon sx={{ fill: "var(--primary-color)" }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Deletar">
                          <IconButton
                            aria-label="deletar"
                            onClick={(event) => handleAdd(event)}
                          >
                            <DeleteIcon sx={{ fill: "var(--primary-color)" }} />
                          </IconButton>
                        </Tooltip>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell />
              <TableCell />
              <TableCell sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Tooltip title="Novo">
                  <IconButton
                    aria-label="novo"
                    onClick={(event) => handleAdd(event)}
                  >
                    <AddIcon sx={{ fill: "var(--primary-color)" }} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Row>
  );
}

export default Tasks;
