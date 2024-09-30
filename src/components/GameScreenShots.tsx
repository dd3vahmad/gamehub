import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  id: number;
}

const GameScreenShots = ({ id }: Props) => {
  const { data: screenshots, isLoading, error } = useGameScreenshots(id);

  if (error) throw error;

  if (isLoading) return <Spinner />;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screenshots.results.map(({ id, image }) => (
        <Image
          key={id}
          cursor="pointer"
          src={image}
          alt={`Game Screenshot ${id}`}
          objectFit="cover"
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
