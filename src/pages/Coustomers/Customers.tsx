import { useState } from "react";
import {
  Container,
  IconButton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TextField,
  TablePagination,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ListIcon from "@mui/icons-material/List";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

interface Client {
  id: number;
  name: string;
  email: string;
  cuil: string;
}

const Customers = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState<Client[]>([]);
  const [editingClient, setEditingClient] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleEdit = (id: number) => {
    setEditingClient(id);
  };

  const handleSave = (id: number) => {
    console.log(
      "Cliente editado:",
      clients.find((c) => c.id === id)
    );
    setEditingClient(null);
  };

  const handleDelete = (id: number) => {
    console.log(
      "Cliente eliminado:",
      clients.find((c) => c.id === id)
    );
    setClients(clients.filter((c) => c.id !== id));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    console.log(event);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
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
            <Typography>Lista de Clientes</Typography>
          </Box>
          <Box textAlign="center">
            <IconButton
              color="secondary"
              onClick={() => navigate("/create-customer")}
            >
              <AddCircleIcon fontSize="large" />
            </IconButton>
            <Typography>Nuevo Cliente</Typography>
          </Box>
        </Box>
        <TextField
          label="Buscar Cliente"
          variant="outlined"
          size="small"
          value={search}
          onChange={handleSearchChange}
        />
      </Box>
      {clients.length === 0 ? (
        <Typography textAlign="center" marginTop={4}>
          No hay clientes. Por favor, cree uno nuevo.
        </Typography>
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            marginTop: 6,
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Nombre</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>CUIL</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredClients
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((client) => (
                  <TableRow key={client.id}>
                    <TableCell>
                      {editingClient === client.id ? (
                        <input
                          defaultValue={client.name}
                          style={{
                            width: "100%",
                            padding: "4px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                          }}
                        />
                      ) : (
                        client.name
                      )}
                    </TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.cuil}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() =>
                          editingClient === client.id
                            ? handleSave(client.id)
                            : handleEdit(client.id)
                        }
                      >
                        {editingClient === client.id ? (
                          <SaveIcon />
                        ) : (
                          <EditIcon />
                        )}
                      </IconButton>
                      <IconButton onClick={() => handleDelete(client.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredClients.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
    </Container>
  );
};

export default Customers;
