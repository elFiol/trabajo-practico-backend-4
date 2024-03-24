import { Row } from "react-bootstrap";
import Color from "./Color";

const ListaColores = ({colores, borrarColor}) => {
    return (
        <Row className=" justify-content-center">
            {
                colores.map((color, posicion)=> <Color key={posicion} nombre={color.nombre} id={color.id} borrarColor={borrarColor}></Color>)
            }
        </Row>
    );
};

export default ListaColores;