import React from "react";
import Appbar from "../components/Appbar";
import Form from "../components/Form";

function Home() {
  return (
    <>
      <Appbar />
      <center>
        <h1>Submit an Event</h1>
      </center>
      <Form />
      <center>
        <p style={{ color: "white" }}>
          ALL RIGHTS RESERVED | ALTA EVENTS LLC 2022
        </p>
      </center>
    </>
  );
}

export default Home;
