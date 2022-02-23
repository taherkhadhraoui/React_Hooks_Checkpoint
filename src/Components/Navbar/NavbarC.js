import { Rating } from "@mui/material";
import React from "react";
import { Container, Form, FormControl, Nav } from "react-bootstrap";
import Addmovies from "../MoviesList/Addmovies";

const NavbarC = ({
  moviesdata,
  setMoviesdata,
  searchtitle,
  setSearchtitle,
  searchrate,
  setSearchrate,
}) => {
  return (
    <div>
      <Container fluid>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Contact</Nav.Link>
        </Nav>
        <Rating
          name="size-small"
          defaultValue={2}
          size="small"
          onChange={(event) => setSearchrate(event.target.value)}
          value={searchrate}
        />
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(event) => setSearchtitle(event.target.value)}
            value={searchtitle}
          />
        </Form>
        <Addmovies moviesdata={moviesdata} setMoviesdata={setMoviesdata} />
      </Container>
    </div>
  );
};

export default NavbarC;
