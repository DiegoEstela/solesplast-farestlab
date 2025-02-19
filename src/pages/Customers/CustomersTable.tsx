import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import CustomerRow from "./CustomerRow";

interface Props {
  clients: {
    id: number;
    name: string;
    contact_phone: string;
    cuil: string;
  }[];
  page: number;
  rowsPerPage: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  editingClient: number | null;
  onEdit: (id: number) => void;
  onSave: (id: number, updatedName: string) => void;
  onDelete: (id: number) => void;
}

const CustomersTable = ({
  clients,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  editingClient,
  onEdit,
  onSave,
  onDelete,
}: Props) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: 4,
        borderRadius: "12px",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", textAlign: "left" }}>
              Nombre
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              Teléfono
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
              CUIL
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "right" }}>
              Acciones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <CustomerRow
              key={client.id}
              client={client}
              editingClient={editingClient}
              onEdit={onEdit}
              onSave={onSave}
              onDelete={onDelete}
            />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={clients.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </TableContainer>
  );
};

export default CustomersTable;
