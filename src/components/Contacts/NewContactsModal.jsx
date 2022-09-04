import React, { useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {useContacts} from '../../context/ContactsContext'

const Contacts = ({ closeModal }) => {
  const idRef = useRef();
  const nameRef = useRef();
  const {createContacts} = useContacts()

  function handleSubmit(e) {
    e.preventDefault();
    createContacts(idRef.current.value, nameRef.current.value)
    closeModal()
  }
  return (
    <>
      <Modal.Header closeButton>Create Contacts</Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit" className="mt-3">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default Contacts;
