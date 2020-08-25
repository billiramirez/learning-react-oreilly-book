import React, { useState } from "react";
import SearchForm from "./SearchForm";
import GitHubUser from "./githubUser";
import UserRepositories from "./userRepositories";
import RepositoryReadme from "./repositoryReadme";

export default function App() {
  const [login, setLogin] = useState("moonhighway");
  const [repo, setRepo] = useState("learning-react");

  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
      <UserRepositories login={login} repo={repo} onSelect={setRepo} />
      <RepositoryReadme login={login} repo={repo} />
    </>
  );
}
