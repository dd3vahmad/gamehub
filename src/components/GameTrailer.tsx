import { Spinner } from "@chakra-ui/react";
import useGameTrailers from "../hooks/useGameTrailer";

interface Props {
  id: number;
}

const GameTrailer = ({ id }: Props) => {
  const { data: trailers, isLoading, error } = useGameTrailers(id);

  if (error) throw error;

  if (isLoading) return <Spinner />;

  const first = trailers.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
