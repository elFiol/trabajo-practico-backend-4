import { Button, Col, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import "./Principal.css"
import { useState } from "react";

const Color = ({ color, nombre, id, borrarColor, editarColor }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [colorNuevo, setColorNuevo] = useState(color)
    const [nombreNuevo, setNombreNuevo] = useState("")

    const estiloColor = {
        backgroundColor: color,
        margin: "auto",
    };

    const handlerSubmit = async (e) => {
        e.preventDefault()
        await editarColor(id, {
            nombreColor: nombreNuevo,
            codigoHexadecimal: colorNuevo
        })
        handleClose()
    }
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
                    <Modal.Title>Editar el color {nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="w-75" onSubmit={handlerSubmit}>
                        <Form.Group>
                            <Form.Label>Ingrese el color</Form.Label>
                            <Form.Control
                                type="color"
                                defaultValue={color}
                                title="Elije tu color"
                                onChange={(e) => setColorNuevo(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Ingrese el nombre del color</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ej: azul"
                                minLength={3}
                                maxLength={30}
                                onChange={(e) => setNombreNuevo(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button type="submit" className="mt-3">Guardar</Button>
                        <Button variant="secondary" className="mt-3 ms-1" onClick={handleClose}>Cancelar</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Color;