import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCustomer } from "../../api/customer";
import {
  Container,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { Customers } from "../../types";

const CreateCustomer = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Customers>({
    mode: "onChange",
    defaultValues: {
      registrationDate: new Date().toISOString().split("T")[0],
    },
  });

  // Mutación para agregar un cliente
  const addCustomerMutation = useMutation({
    mutationFn: addCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      reset(); // Resetea el formulario después de registrar el cliente
      setOpenSnackbar(true); // Muestra el Snackbar de éxito
    },
  });

  // Cierra el Snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const onSubmit = (data: Customers) => {
    console.log("Datos enviados:", data); // Agrega esto para ver los datos en la consola
    addCustomerMutation.mutate(data);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          marginTop={10}
          sx={{ color: "#1C1C1E" }} // Texto más oscuro
        >
          <TextField
            label="Nombre"
            {...register("name", { required: true })}
            error={!!errors.name}
            helperText={errors.name && "Este campo es obligatorio"}
          />
          <TextField
            label="Email"
            type="email"
            {...register("email", { required: true })}
            error={!!errors.email}
            helperText={errors.email && "Este campo es obligatorio"}
          />
          <TextField
            label="CUIL"
            {...register("cuil", { required: true })}
            error={!!errors.cuil}
            helperText={errors.cuil && "Este campo es obligatorio"}
          />
          <TextField
            label="Fecha de Alta"
            type="date"
            {...register("registrationDate", { required: true })}
            error={!!errors.registrationDate}
            helperText={errors.registrationDate && "Este campo es obligatorio"}
          />
          <TextField
            label="Nombre de Contacto"
            {...register("contactName", { required: true })}
            error={!!errors.contactName}
            helperText={errors.contactName && "Este campo es obligatorio"}
          />
          <TextField
            label="Número Celular"
            {...register("contactPhone", { required: true })}
            error={!!errors.contactPhone}
            helperText={errors.contactPhone && "Este campo es obligatorio"}
          />
          <TextField
            label="Dirección"
            {...register("address", { required: true })}
            error={!!errors.address}
            helperText={errors.address && "Este campo es obligatorio"}
          />
          <TextField
            label="Ciudad"
            {...register("city", { required: true })}
            error={!!errors.city}
            helperText={errors.city && "Este campo es obligatorio"}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" marginTop={4}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#888", color: "white" }}
            onClick={() => navigate("/customers")}
          >
            Volver a la lista
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#555", color: "white" }}
            disabled={!isValid}
          >
            Guardar Cliente
          </Button>
        </Box>
      </form>

      {/* Snackbar para mostrar mensaje de éxito */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }} // Aparece en la parte superior derecha
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
        >
          Cliente registrado con éxito
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CreateCustomer;
