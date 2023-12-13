import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./SearchForm.css";
const SearchForm = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState<number | undefined>(undefined);

  const handleSubmit = async () => {};
  return (
    <Form className="d-flex flex-column align-items-center form-container border p-4 m-auto">
      <Form.Group controlId="formEmail" className="w-100">
        <Form.Label>Email (required)</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formNumber" className="w-100">
        <Form.Label>Number (optional)</Form.Label>
        <Form.Control type="number" placeholder="Enter number" value={number || ""} onChange={(e) => setNumber(Number(e.target.value))} />
      </Form.Group>

      <Button variant="secondary" className="mt-2" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default SearchForm;
