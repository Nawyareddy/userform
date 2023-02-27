import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "../Card/Card";
import "./UserForm.css";

const UserForm = ({ handleAddUserData }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [userName, setUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || enteredAge.trim().length === 0) {
      setShow(true);
      return;
    }
    if (enteredAge < 1) {
      setShow(true);
      return;
    }
    handleAddUserData(userName, enteredAge);
    setEnteredAge("");
    setUserName("");
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <>
      <Card>
        <form onSubmit={handleFormSubmit} className="input">
          <div>
            <label htmlFor="name">UserName</label>
            <input
              type="text"
              id="name"
              value={userName}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={enteredAge}
              onChange={handleAgeChange}
            />
          </div>
          <button type="submit" className="button">
            Add User
          </button>
        </form>
      </Card>
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header>
          <Modal.Title>Invalid Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please enter valid username and age</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserForm;
