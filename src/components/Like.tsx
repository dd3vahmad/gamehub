import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  likeSize: number;
}

const Like = ({ likeSize }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const toggle = () => setIsLiked(!isLiked);

  if (isLiked)
    return <AiFillHeart onClick={toggle} color="red" size={likeSize} />;
  return <AiOutlineHeart onClick={toggle} size={likeSize} />;
};

export default Like;
