import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedGenre = useGenre(gameQuery.genreId);
  const selectedPlatform = usePlatform(gameQuery.platformId);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
