import { useForm } from "react-hook-form";
import { Container, TextField, Button, Box } from "@mui/material";
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
            InputLabelProps={{ style: { color: "#1C1C1E" } }} // Etiquetas oscuras
            sx={{ input: { color: "#1C1C1E" } }} // Texto dentro del input
          />
          <TextField
            label="Email"
            type="email"
            {...register("email", { required: true })}
            error={!!errors.email}
            helperText={errors.email && "Este campo es obligatorio"}
            InputLabelProps={{ style: { color: "#1C1C1E" } }}
            sx={{ input: { color: "#1C1C1E" } }}
          />
          <TextField
            label="CUIL"
            {...register("cuil", { required: true })}
            error={!!errors.cuil}
            helperText={errors.cuil && "Este campo es obligatorio"}
            InputLabelProps={{ style: { color: "#1C1C1E" } }}
            sx={{ input: { color: "#1C1C1E" } }}
          />
          <TextField
            label="Fecha de Alta"
            type="date"
            {...register("registrationDate", { required: true })}
            error={!!errors.registrationDate}
            helperText={errors.registrationDate && "Este campo es obligatorio"}
            InputLabelProps={{ style: { color: "#1C1C1E" } }}
            sx={{ input: { color: "#1C1C1E" } }}
          />
          <TextField
            label="Nombre de Contacto"
            {...register("contactName", { required: true })}
            error={!!errors.contactName}
            helperText={errors.contactName && "Este campo es obligatorio"}
            InputLabelProps={{ style: { color: "#1C1C1E" } }}
            sx={{ input: { color: "#1C1C1E" } }}
          />
          <TextField
            label="Número Celular"
            {...register("contactPhone", { required: true })}
            error={!!errors.contactPhone}
            helperText={errors.contactPhone && "Este campo es obligatorio"}
            InputLabelProps={{ style: { color: "#1C1C1E" } }}
            sx={{ input: { color: "#1C1C1E" } }}
          />
          <TextField
            label="Dirección"
            {...register("address", { required: true })}
            error={!!errors.address}
            helperText={errors.address && "Este campo es obligatorio"}
            InputLabelProps={{ style: { color: "#1C1C1E" } }}
            sx={{ input: { color: "#1C1C1E" } }}
          />
          <TextField
            label="Ciudad"
            {...register("city", { required: true })}
            error={!!errors.city}
            helperText={errors.city && "Este campo es obligatorio"}
            InputLabelProps={{ style: { color: "#1C1C1E" } }}
            sx={{ input: { color: "#1C1C1E" } }}
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
