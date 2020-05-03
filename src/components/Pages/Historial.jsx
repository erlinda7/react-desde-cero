import React from "react";

const Historial = ({ match, location, history }) => (
  <>
    <h1>match</h1>
    <div>{JSON.stringify(match)}</div>
    <h1>location</h1>
    <div>{JSON.stringify(location)}</div>
    <h1>history</h1>
    <div>{JSON.stringify(history)}</div>
  </>
);

export default Historial;
