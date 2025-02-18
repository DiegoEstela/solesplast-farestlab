import { Typography, Badge } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WarningIcon from "@mui/icons-material/Warning";
import BuildIcon from "@mui/icons-material/Build";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InventoryIcon from "@mui/icons-material/Inventory";
import {
  HomeContainer,
  MetricsContainer,
  MetricWidget,
  QuickAccessContainer,
  QuickAccessButton,
  QuickAccessIcon,
} from "./Home.style";

const Home = () => {
  return (
    <HomeContainer>
      {/* Widgets de métricas estilo iOS */}
      <MetricsContainer>
        <MetricWidget>
          <TrendingUpIcon fontSize="large" color="primary" />
          <Typography variant="h6">Producto más vendido</Typography>
          <Typography variant="body1">Tubo de acero</Typography>
        </MetricWidget>
        <MetricWidget>
          <WarningIcon fontSize="large" color="error" />
          <Typography variant="h6">Material con bajo stock</Typography>
          <Typography variant="body1">Baja Virgen</Typography>
        </MetricWidget>
        <MetricWidget>
          <BuildIcon fontSize="large" color="secondary" />
          <Typography variant="h6">Servicio más solicitado</Typography>
          <Typography variant="body1">Corte de lámina</Typography>
        </MetricWidget>
      </MetricsContainer>

      {/* Accesos rápidos */}
      <QuickAccessContainer>
        <QuickAccessButton>
          <QuickAccessIcon>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon fontSize="medium" color="primary" />
            </Badge>
          </QuickAccessIcon>
          <Typography variant="body2">Pedidos pendientes</Typography>
        </QuickAccessButton>
        <QuickAccessButton>
          <QuickAccessIcon>
            <InventoryIcon fontSize="medium" color="primary" />
          </QuickAccessIcon>
          <Typography variant="body2">Stock de materiales</Typography>
        </QuickAccessButton>
      </QuickAccessContainer>
    </HomeContainer>
  );
};

export default Home;
