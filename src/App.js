import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Github from "./pages/Github";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        ></Route>
        <Route
          path="/my-github"
          element={
            <Layout>
              <Github />
            </Layout>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
