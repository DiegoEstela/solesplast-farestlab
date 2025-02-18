import { useForm } from "react-hook-form";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CustomerForm {
  name: string;
  email: string;
  cuil: string;
  registrationDate: string;
  contactName: string;
  contactPhone: string;
  address: string;
  city: string;
}

const CreateCustomer = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CustomerForm>({
    mode: "onChange",
    defaultValues: {
      registrationDate: new Date().toISOString().split("T")[0],
    },
  });

  const onSubmit = (data: CustomerForm) => {
    console.log("Nuevo Cliente:", data);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" align="center" marginTop={4}>
        Crear Nuevo Cliente
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
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
    </Container>
  );
};

export default CreateCustomer;
