import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav" "main"`,
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <GridItem area={"main"} paddingX={5}>
          <Outlet />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Layout;
