import * as React from "react";
import "./index.css";
import { Box, Button, Typography } from "@mui/material";
import BoxPlans from "./components/BoxPlans";

function Financial() {
  const [isYear, setIsYear] = React.useState();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography my="24px" fontWeight="bold" variant="h6" gutterBottom>
        Selecione o plano que mais se adequa aos seus objetivos
      </Typography>

      <Box mb="24px">
        <Button
          onClick={() => setIsYear(false)}
          sx={{ borderRadius: "0" }}
          variant={!isYear ? "contained" : "outlined"}
        >
          Mensal
        </Button>
        <Button
          onClick={() => setIsYear(true)}
          sx={{ borderRadius: "0" }}
          variant={isYear ? "contained" : "outlined"}
        >
          Anual
        </Button>
      </Box>

      <Box display="flex" alignItems="center">
        <BoxPlans
          title="Recarga"
          price="-"
          description="Plano que requer recarga conforme utilização, para usuários que tem uso variável"
          advantage={[
            "Mascaramento de dados sensiveis",
            "Comunicação com o chatgpt 4",
            "Proteção de dados",
          ]}
          signature={false}
          activePlan={true}
        />
        <BoxPlans
          title="Básico"
          price={isYear ? "25" : "30"}
          description="Plano básico, para usuários que utilizam a aplicação ocasionalmente."
          activePlan={false}
          advantage={[
            "Mascaramento de dados sensiveis",
            "Comunicação com o chatgpt 4",
            "Proteção de dados",
            "1.500 tokens",
          ]}
        />
        <BoxPlans
          title="Intermediário"
          price={isYear ? "100" : "120"}
          description="Plano intermediário, para usuários que utilizam a aplicação com frequencia."
          activePlan={false}
          advantage={[
            "Mascaramento de dados sensiveis",
            "Comunicação com o chatgpt 4",
            "Proteção de dados",
            "10.000 tokens",
          ]}
        />
        <BoxPlans
          title="Profissional"
          price={isYear ? "150" : "200"}
          description="Plano profissional, para usuários que trabalham frequentemente com a aplicação."
          activePlan={false}
          advantage={[
            "Mascaramento de dados sensiveis",
            "Comunicação com o chatgpt 4",
            "Proteção de dados",
            "20.000 tokens",
          ]}
        />
      </Box>
    </Box>
  );
}

export default Financial;
