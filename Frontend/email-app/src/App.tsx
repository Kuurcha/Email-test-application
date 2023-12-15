import React, { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/esm/Container";
import UserTable from "./components/ResultsComponent/UserTable";
import SearchForm from "./components/SearchForm/SearchForm";
import { UserInfo } from "shared/index";

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo[] | undefined>(undefined);

  const handleApiResponse = (data: UserInfo[]) => {
    setUserInfo(data);
  };
  // const mockUserInfo: UserInfo[] = Array.from({ length: 30 }, (_, index) => ({
  //   email: `user${index + 1}@example.com`,
  //   number: `${Math.floor(Math.random() * 100000000)}`,
  // }));

  // mockUserInfo[4].email = "thisisahisisareallylongemailaddress1234567890@example.com";
  // mockUserInfo[10].email = "anotherlongemailaddress9876543210@example.com";

  return (
    <div className="App">
      <header className="App-header">
        <Container className="mt-3 d-flex flex-column align-items-center">
          <SearchForm onApiResponse={handleApiResponse} />

          <UserTable users={userInfo ?? []} />
        </Container>
      </header>
    </div>
  );
}

export default App;
