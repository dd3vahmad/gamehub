import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);
  console.log("Game Details: ", game);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Grid>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText content={game.description_raw} limit={300} />
      </GridItem>
    </Grid>
  );
};

export default GameDetails;
