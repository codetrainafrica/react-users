import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Container, Row } from "react-bootstrap";
import User from "./User";

const Users = (props) => {
  let displayInfo;
  if (props.requesting.users) {
    displayInfo = <p>Loading...</p>
  } else if (props.requested.users && props.users.length === 0) {
    displayInfo = <p>No users found</p>
  } else if (props.requested.users && props.users.length > 0) {
    displayInfo = props.users.map((user) => {
      return (
        <User userInfo={user} key={user.id} editUser={props.editUser} />
      );
    })
  }
  return (
    <Container>
      <Row>
        {displayInfo}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  usersData: state.usersState.users,
  users: state.firestore.ordered.users,
  requesting: state.firestore.status.requesting,
  requested: state.firestore.status.requested
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect(["users"])
)(Users);
