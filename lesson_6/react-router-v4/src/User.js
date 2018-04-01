import React from "react";

const User = (props) => {
    return <p>the id for the user is <b>{props.match.params.id}</b></p>
}

export default User;