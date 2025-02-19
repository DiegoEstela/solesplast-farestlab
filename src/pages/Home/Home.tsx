import StatusCard from "../../components/StatusCard/StatusCard";
import { GridContainer, HomeContainer } from "./Home.style";

const steps = [
  { label: "Sin Orden de Producción", count: 10 },
  { label: "Con Orden de Producción", count: 5 },
  { label: "Producción Iniciada", count: 2 },
  { label: "Pedidos Terminados", count: 20 },
  { label: "Remito Realizado", count: 18 },
  { label: "Sin Remito", count: 2 },
];

const Home = () => {
  return (
    <HomeContainer>
      <GridContainer>
        {steps.map((step, index) => (
          <StatusCard key={index} count={step.count} label={step.label} />
        ))}
      </GridContainer>
    </HomeContainer>
  );
};

export default Home;
