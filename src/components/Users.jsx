import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Container, Row } from "react-bootstrap";
import User from "./User";

const Users = (props) => {
  let infoToDisplay;
  if (props.requesting) {
    infoToDisplay = <p>loading...</p>;
  } else if (props.requested && props.firestoreUsers.length === 0) {
    infoToDisplay = <p>No users found</p>;
  } else if (props.requested && props.firestoreUsers.length > 1) {
    infoToDisplay = props.firestoreUsers.map((user) => {
      return (
        <User
          userInfo={user}
          key={user.id}
          deleteUser={props.deleteUser}
          editUser={props.editUser}
        />
      );
    });
  }
  return (
    <Container>
      <Row>{infoToDisplay}</Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  usersData: state.usersState.users,
  firestoreUsers: state.firestore.ordered.users,
  requesting: state.firestore.status.requesting.users,
  requested: state.firestore.status.requested.users,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect(["users"])
)(Users);
