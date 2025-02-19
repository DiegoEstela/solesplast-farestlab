import { useState, useEffect } from "react";
import { Container, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import {
  getCustomers,
  deleteCustomer,
  updateCustomer,
} from "../../api/customer";
import CustomersToolbar from "./CustomersToolbar";
import CustomersTable from "./CustomersTable";

const Customers = () => {
  const [editingClient, setEditingClient] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(""); // Estado para debounce
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Delay de 2 segundos antes de actualizar la búsqueda real
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 2000);

    return () => clearTimeout(handler);
  }, [search]);

  // Llamar a la API con la búsqueda filtrada
  const { data: clients = [], isLoading } = useQuery({
    queryKey: ["customers", debouncedSearch], // Se actualiza cuando cambia la búsqueda
    queryFn: () => getCustomers(debouncedSearch), // Se pasa el término de búsqueda a la API
  });

  // Handlers para paginación
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container>
      <CustomersToolbar
        search={search}
        onSearchChange={(e) => setSearch(e.target.value)}
      />
      {isLoading ? (
        <CircularProgress sx={{ marginTop: 4 }} />
      ) : (
        <CustomersTable
          clients={clients}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          editingClient={editingClient}
          onEdit={setEditingClient}
          onSave={(id, updatedName) =>
            updateCustomer({ id: id.toString(), name: updatedName })
          }
          onDelete={(id) => deleteCustomer(id)}
        />
      )}
    </Container>
  );
};

export default Customers;
