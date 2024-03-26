import { Row } from "react-bootstrap";
import Color from "./Color";

const ListaColores = ({colores, borrarColor}) => {
    return (
        <Row className=" justify-content-center">
            {
                colores.map((color, posicion)=> <Color key={posicion} color={color.codigoHexadecimal} nombre={color.nombreColor} id={color._id} borrarColor={borrarColor}></Color>)
            }
        </Row>
    );
};

export default ListaColores;