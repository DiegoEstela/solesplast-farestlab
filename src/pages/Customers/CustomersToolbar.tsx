import { Box, IconButton, Typography, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ListIcon from "@mui/icons-material/List";
import { useNavigate } from "react-router-dom";

interface Props {
  search: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomersToolbar = ({ search, onSearchChange }: Props) => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginTop={8}
    >
      <Box display="flex" gap={4}>
        <Box textAlign="center">
          <IconButton color="primary">
            <ListIcon fontSize="large" />
          </IconButton>
          <Typography fontSize="16px">Lista de Clientes</Typography>
        </Box>
        <Box textAlign="center">
          <IconButton
            color="secondary"
            onClick={() => navigate("/create-customer")}
          >
            <AddCircleIcon fontSize="large" />
          </IconButton>
          <Typography fontSize="16px">Nuevo Cliente</Typography>
        </Box>
      </Box>
      <TextField
        label="Buscar Cliente"
        variant="outlined"
        size="small"
        value={search}
        onChange={onSearchChange}
        sx={{ width: "50%", fontSize: "14px" }}
      />
    </Box>
  );
};

export default CustomersToolbar;
