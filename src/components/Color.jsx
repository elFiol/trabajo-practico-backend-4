import { Button, Col } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import "./Principal.css"
import { useState } from "react";

const Color = ({ color, nombre, id, borrarColor, editarColor }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const estiloColor = {
        backgroundColor: color,
        margin: "auto",
    };
    return (
        <>
            <Col lg={3} md={5} className="color my-3 py-4 mx-lg-4 mx-md-1 text-center">
                <h4>{nombre}</h4>
                <div className="w-75 py-5" style={estiloColor}></div>
                <Button variant="danger" className="my-3" type="button" onClick={() => borrarColor(id)}>Borrar</Button>
                <Button variant="warning" className="my-3 ms-1" type="button" onClick={handleShow}>Editar</Button>
            </Col>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Do not even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Color;