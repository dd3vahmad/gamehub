import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText content={game.description_raw} limit={300} />
      <GameAttributes game={game} />
      <GameTrailer id={game.id} />
      <GameScreenShots id={game.id} />
    </>
  );
};

export default GameDetails;
