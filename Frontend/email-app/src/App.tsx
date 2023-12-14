import React, { useState } from "react";

import "./App.css";
import Container from "react-bootstrap/esm/Container";
import UserTable from "./components/ResultsComponent/UserTable";
import SearchForm from "./components/SearchForm/SearchForm";
import { UserInfo } from "shared";

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo[] | undefined>(undefined);

  const handleApiResponse = (data: UserInfo[]) => {
    setUserInfo(data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Container className="mt-3">
          <SearchForm onApiResponse={handleApiResponse} />

          <UserTable users={userInfo ?? []} />
        </Container>
      </header>
    </div>
  );
}

export default App;
