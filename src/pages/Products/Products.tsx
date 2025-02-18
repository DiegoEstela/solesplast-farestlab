import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Products = () => {
  const theme = useTheme();
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" color={theme.palette.primary.main}>
        Productos
      </Typography>
    </Box>
  );
};

export default Products;
