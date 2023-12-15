import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./SearchForm.css";
import { UserInfo } from "shared/index";
import { findMatchingRecords } from "src/services/RequestServices";
import { validateEmail } from "src/Helper/validateEmail";
import BottomPopup from "../BottomPopup/BottomPopup";
type ApiResponseCallback = (data: UserInfo[]) => void;
const SearchForm = ({ onApiResponse }: { onApiResponse: ApiResponseCallback }) => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [number, setNumber] = useState<string | undefined>(undefined);
  const abortControllerRef = useRef<AbortController | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const removeNonDigitCharacters = (input: string): string => {
    return input.replace(/\D/g, "");
  };

  const handleTogglePopup = (isVisible: boolean) => {
    setPopupVisible(isVisible);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onApiResponse([]);
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;
    if (isValidEmail) {
      try {
        const requestData: UserInfo = { email };
        if (number) requestData.number = removeNonDigitCharacters(number);
        onApiResponse(await findMatchingRecords(requestData, signal));
      } catch (error) {
        if (error instanceof Error) {
          console.error(`Error during API request: ${error.message}`);
          setErrorMessage(error.message);
          handleTogglePopup(true);
        }
      }
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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    const isValid = validateEmail(newEmail);
    setEmail(newEmail);
    setIsValidEmail(isValid);
  };

  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <div>
      <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center form-container border p-4 m-auto">
        <Form.Group controlId="formEmail" className="w-100">
          <Form.Label>Email (required)</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            isInvalid={!isValidEmail}
            required
          />
        </Form.Group>

        <Form.Group controlId="formNumber" className="w-100">
          <Form.Label>Number (optional)</Form.Label>
          <Form.Control type="text" placeholder="Enter number" value={number || ""} onChange={handleInputChange} />
        </Form.Group>

        <Button variant="secondary" className="mt-2" type="submit">
          Submit
        </Button>
      </Form>
      <BottomPopup isVisible={popupVisible} onToggleVisibility={handleTogglePopup} content={errorMessage} />
    </div>
  );
};

export default SearchForm;
