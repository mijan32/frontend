import React from "react";
import clientService from "../service/clientService";
import Login from "../components/Login";
import Background from "../components/Background";

export default function LoginPage() {
  return (
    <Background
      component={React.createElement(Login, {
        clientService: clientService,
      })}
    />
  );
}