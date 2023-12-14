import React from "react";

import "./App.css";
import Container from "react-bootstrap/esm/Container";
import UserTable from "./components/ResultsComponent/UserTable";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container className="mt-3">
          <SearchForm />

          <UserTable />
        </Container>
      </header>
    </div>
  );
}

export default App;
