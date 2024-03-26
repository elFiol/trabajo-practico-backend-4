import { Form, Button } from "react-bootstrap";
import "./Principal.css"
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import ListaColores from "./ListaColores"
import { CrearColorAPI, leerColoresAPI } from "../helper/queries";

const FormularioColor = () => {
    const [color, setColor] = useState("")
    const [nombre, setNombre] = useState("")
    const [colores, setColores] = useState([])
    const handlerSubmit = (e) => {
        e.preventDefault()
        const peticionCrear = async () => {
            try {
                const respuesta = await CrearColorAPI({
                    nombreColor: nombre,
                    codigoHexadecimal: color
                })
                console.log(respuesta)
                await hacerPeticion()
            } catch (error) {
                console.log(error)
            }
        }
        peticionCrear()
    }

    const hacerPeticion = async () => {
        try {
            const respuesta = await leerColoresAPI();
            console.log(respuesta)
            if (respuesta.length > 0) {
                setColores(respuesta)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        hacerPeticion()
    }, [])
    const borrarColor = (id) => {
        const coloresFiltrados = colores.filter((color) => color.id !== id)
        setColores(coloresFiltrados)
    }
    return (
        <article>
            <div className="formularioDiv">
                <h3 className="text-center mb-2">Administrador de Colores</h3>
                <div className="formularioSubDiv">
                    <div className="colorForm"></div>
                    <Form className="w-75" onSubmit={handlerSubmit}>
                        <Form.Group>
                            <Form.Label>Ingrese el color</Form.Label>
                            <Form.Control
                                type="color"
                                defaultValue="#0000ff"
                                title="Elije tu color"
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Ingrese el nombre del color</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ej: azul"
                                minLength={3}
                                maxLength={30}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button type="submit" className="mt-3">Guardar</Button>
                    </Form>
                </div>
            </div>
            <ListaColores colores={colores} borrarColor={borrarColor}></ListaColores>
        </article>
    );
};

export default FormularioColor;