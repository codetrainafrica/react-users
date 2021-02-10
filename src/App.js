import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Users from "./components/Users";
import AddUserForm from "./components/AddUserForm";
import { connect } from "react-redux";
import { logout } from "./actions/authActions";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <h4>Add Users</h4>
              <br />
              <AddUserForm />
            </Col>
            <Col>
              <h4>All Codetrain Users</h4>
              <button onClick={() => this.props.logout()}>Logout</button>
              <br />
              <br />
              <Users deleteUser={this.deleteUser} editUser={this.editUser} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  logout: logout,
};

export default connect(null, mapDispatchToProps)(App);
