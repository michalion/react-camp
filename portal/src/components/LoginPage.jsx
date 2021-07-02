import React, { useState } from "react";
import Footer from "./Footer";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logInUser = () => {
    console.log(`Logged in "${username}" using "${password}"`);
  };

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <h2>Login screen</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <UsernameField username={username} setUsername={setUsername} />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <PasswordField password={password} setPassword={setPassword} />
        </Col>
        <Footer>
          <Button onClick={logInUser}>Log in</Button>
        </Footer>
      </Row>
    </Container>
  );
};

export default LoginPage;

function UsernameField({ username, setUsername }) {
  return (
    <InputGroup>
      <FormControl
        placeholder="Username"
        aria-label="Username"
        aria-describedby="username-append"
        value={username}
        onChange={({ target: { value } }) => setUsername(value)}
      />
      <InputGroup.Append>
        <InputGroup.Text id="username-append">@example.com</InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  );
}

function PasswordField({ password, setPassword }) {
  return (
    <InputGroup>
      <FormControl
        placeholder="Password"
        aria-label="Password"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
      />
    </InputGroup>
  );
}
