
import React from "react";

function Welcome(props)
{
  let welcomeMessage="Welcome to Newton School.";
  return(
    <>
    <h1>Hey! {props.name} </h1>
    <h2>{welcomeMessage}</h2>
    </>
  );
  
}


export default Welcome;
