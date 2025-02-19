import { TableRow, TableCell, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  client: {
    id: number;
    name: string;
    contact_phone: string;
    cuil: string;
  };
  editingClient: number | null;
  onEdit: (id: number) => void;
  onSave: (id: number, updatedName: string) => void;
  onDelete: (id: number) => void;
}

const CustomerRow = ({
  client,
  editingClient,
  onEdit,
  onSave,
  onDelete,
}: Props) => {
  return (
    <TableRow>
      <TableCell sx={{ textAlign: "left", padding: "6px" }}>
        {editingClient === client.id ? (
          <input
            defaultValue={client.name}
            onBlur={(e) => onSave(client.id, e.target.value)}
            style={{
              width: "100%",
              padding: "4px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
        ) : (
          client.name
        )}
      </TableCell>
      <TableCell sx={{ textAlign: "center", padding: "6px" }}>
        {client.contact_phone}
      </TableCell>
      <TableCell sx={{ textAlign: "center", padding: "6px" }}>
        {client.cuil}
      </TableCell>
      <TableCell sx={{ textAlign: "right", padding: "6px" }}>
        <IconButton
          onClick={() =>
            editingClient === client.id
              ? onSave(client.id, client.name)
              : onEdit(client.id)
          }
        >
          {editingClient === client.id ? <SaveIcon /> : <EditIcon />}
        </IconButton>
        <IconButton onClick={() => onDelete(client.id)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CustomerRow;
