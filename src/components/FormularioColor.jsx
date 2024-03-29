import { Form, Button } from "react-bootstrap";
import "./Principal.css"
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import ListaColores from "./ListaColores"
import { CrearColorAPI, borrarColorAPI, editarColorAPI, leerColoresAPI } from "../helper/queries";

const FormularioColor = () => {
    const [color, setColor] = useState("#ffffff")
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
                if (respuesta.status === 201) {
                    Swal.fire({
                        title: "el color fue creado correctamente",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "el color no fue creado correctamente",
                        icon: "error"
                    });
                }
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

    const borrarColor = async (id) => {
        try {
            const respuesta = await borrarColorAPI(id)
            if (respuesta.status === 200) {
                Swal.fire({
                    title: "el color fue borrado correctamente",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "no se pudo borrar el color",
                    icon: "error"
                });
            }
            hacerPeticion()
        } catch (error) {
            console.log(error)
        }
    }

    const editarColor = async (id, colorModificado) => {
        try {
            const respuesta = await editarColorAPI(colorModificado, id);
            console.log(respuesta)
            if (respuesta.status === 200) {
                Swal.fire({
                    title: "el color fue editado correctamente",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "no se pudo editar el color",
                    icon: "error"
                });
            }
            hacerPeticion()
        } catch (error) {
            console.log(error)
        }
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
                                defaultValue={color}
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
            <ListaColores colores={colores} editarColor={editarColor} borrarColor={borrarColor}></ListaColores>
        </article>
    );
};

export default FormularioColor;