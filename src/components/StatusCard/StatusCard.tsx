import { Typography } from "@mui/material";
import { StatusCardContainer } from "./StatusCard.style";

interface StatusCardProps {
  count: number;
  label: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ count, label }) => {
  return (
    <StatusCardContainer>
      <Typography variant="h5" fontWeight="bold">
        {count}
      </Typography>
      <Typography variant="caption" textAlign="center">
        {label}
      </Typography>
    </StatusCardContainer>
  );
};

export default StatusCard;
