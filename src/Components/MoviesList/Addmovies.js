import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Addmovies = ({ moviesdata, setMoviesdata }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    setMoviesdata([
      ...moviesdata,
      { name, image, date, type, rating, description, id: Math.random() },
    ]);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>name</label>
            <input
              type="text"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <label>image</label>
            <input
              type="text"
              onChange={(event) => setImage(event.target.value)}
              value={image}
            />
            <label>date</label>
            <input
              type="text"
              onChange={(event) => setDate(event.target.value)}
              value={date}
            />
            <label>type</label>
            <input
              type="text"
              onChange={(event) => setType(event.target.value)}
              value={type}
            />
            <label>rate</label>
            <input
              type="number"
              onChange={(event) => setRating(event.target.value)}
              value={rating}
            />
            <label>description</label>
            <input
              type="text"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Addmovies;
