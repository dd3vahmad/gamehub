import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  content: string;
  limit: number;
}

const ExpandableText = ({ content, limit }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!content) return null;

  if (content.length <= limit) return <Text>{content}</Text>;

  const summary = content.substring(0, limit) + "...";

  return (
    <Text>
      {isExpanded ? content : summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={1}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
