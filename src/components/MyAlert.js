import React from "react";
import { Alert, Button } from "react-bootstrap";

const MyAlert = ({ setShow, message, variant }) => {
    return (
        <Alert variant={variant}>
            <Alert.Heading>{message}</Alert.Heading>
            <Button onClick={() => setShow(false)}>Close</Button>
        </Alert>
    )
}

export default MyAlert