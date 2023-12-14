import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./SearchForm.css";
const SearchForm = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState<string | undefined>(undefined);
  const removeNonDigitCharacters = (input: string): string => {
    return input.replace(/\D/g, "");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (number) {
      const unformattedValue = removeNonDigitCharacters(number);
      console.log("Submitted value:", unformattedValue);
    }
  };

  const formatNumber = (input: string): string => {
    const cleanedInput = removeNonDigitCharacters(input);
    const formattedInput = cleanedInput.match(/.{1,2}/g)?.join("-") || "";
    return formattedInput;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target) {
      const inputValue = e.target.value;
      const formattedValue: string = formatNumber(inputValue);
      setNumber(formattedValue);
    }
  };
  return (
    <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center form-container border p-4 m-auto">
      <Form.Group controlId="formEmail" className="w-100">
        <Form.Label>Email (required)</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formNumber" className="w-100">
        <Form.Label>Number (optional)</Form.Label>
        <Form.Control type="text" placeholder="Enter number" value={number || ""} onChange={handleInputChange} />
      </Form.Group>

      <Button variant="secondary" className="mt-2" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SearchForm;
