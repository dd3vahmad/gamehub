import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import useGameQueryStore from "../stores/gameStore";

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (searchRef.current) {
      setSearchText(searchRef.current.value);

      if (pathname !== "/") navigate("/");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searchRef}
          borderRadius={20}
          placeholder="Search games...."
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
