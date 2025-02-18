import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./Services.style";

const Services = () => {
  const theme = useTheme();
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" color={theme.palette.primary.main}>
        Servicios
      </Typography>
    </Box>
  );
};

export default Services;
