import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const GameScore = ({ score }: Props) => {
  const badgeColor =
    score > 90
      ? "teal"
      : score > 85
      ? "green"
      : score > 80
      ? "yellow"
      : score > 70
      ? "orange"
      : score > 60
      ? "red"
      : "";

  return (
    <Badge colorScheme={badgeColor} fontSize={14} paddingX={2} borderRadius={3}>
      {score}
    </Badge>
  );
};

export default GameScore;
