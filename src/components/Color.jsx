import { Button, Col } from "react-bootstrap";
import "./Principal.css"

const Color = ({ color ,nombre, id, borrarColor}) => {
    const estiloColor = {
        backgroundColor: color,
        margin: "auto",
    };
    return (
        <Col lg={3} md={5} className="color my-3 py-4 mx-lg-4 mx-md-1 text-center">
            <h4>{nombre}</h4>
            <div className="w-75 py-5" style={estiloColor}></div>
            <Button variant="danger" className="my-3" type="button" onClick={()=>borrarColor(id)}>Borrar</Button>
        </Col>
    );
};

export default Color;