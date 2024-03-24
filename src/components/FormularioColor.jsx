import { Form, Button } from "react-bootstrap";
import "./Principal.css"
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import ListaColores from "./ListaColores"

const FormularioColor = () => {
    const [color, setColor] = useState("")
    const [colores, setColores] = useState(JSON.parse(localStorage.getItem("colorKey")) || [])
    const handlerSubmit = (e) => {
        e.preventDefault()
        setColores([...colores, {id: uuidv4(), nombre: color}])
        setColor("")
    }
    useEffect(()=>{
        localStorage.setItem("colorKey", JSON.stringify(colores))
    },[colores])
    const borrarColor = (id) =>{
        const coloresFiltrados = colores.filter((color)=> color.id !== id)
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
                            <Form.Control type="text" maxLength={20} minLength={2} placeholder="ingrese un color. EJ: blue" onChange={(e) => { setColor(e.target.value) }} value={color} required></Form.Control>
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