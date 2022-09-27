import React, { Fragment, useState, createContext, useContext } from "react";

import TestChild from "./TestChild.js";

export const TestContext = createContext();

export const Test = () => {
  const [user, setUser] = useState("test");

  return (
    <Fragment>
      <TestContext.Provider value={{ user, setUser }}>
        <TestChild user={user} />
        <Component5 />
      </TestContext.Provider>
    </Fragment>
  );
};

function Component5() {
  const user = useContext(TestContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${JSON.stringify(user)} again!`}</h2>
    </>
  );
}
