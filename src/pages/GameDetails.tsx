import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);
  console.log("Game Details: ", game);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText content={game.description_raw} limit={300} />
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetails;
