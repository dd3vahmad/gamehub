import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Grid, GridItem, Heading, Spinner, Text } from "@chakra-ui/react";

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
        <Text>{game.description_raw}</Text>
      </GridItem>
    </Grid>
  );
};

export default GameDetails;
