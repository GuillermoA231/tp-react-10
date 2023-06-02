import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ListaPeliculas from "./ListCards";

function Formulario() {
  const [nombrePelicula, setNombrePelicula] = useState("");
  const [descripcionPelicula, setDescripcionPelicula] = useState("");
  const [generoPelicula, setGeneroPelicula] = useState("");
  const [validated, setValidated] = useState(false);
  const [peliculas, setPeliculas] = useState(
    JSON.parse(localStorage.getItem("peliculas")) || []
  );

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      const pelicula = { nombre: nombrePelicula, descripcion: descripcionPelicula, genero: generoPelicula };
      console.log(pelicula);
      setPeliculas([...peliculas, pelicula]);
      setNombrePelicula("");
      setDescripcionPelicula("");
      setGeneroPelicula("");
      setValidated(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} xs="12" controlId="inputNombre" className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
              minLength={3}
              maxLength={20}
              value={nombrePelicula}
              onChange={(e) => setNombrePelicula(e.target.value)}
            />
            <Form.Control.Feedback>¡Excelente!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Por favor ingresa un nombre válido
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="12" className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder="Descripción"
              minLength={5}
              maxLength={50}
              value={descripcionPelicula}
              onChange={(e) => setDescripcionPelicula(e.target.value)}
            />
            <Form.Control.Feedback>¡Excelente!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Por favor ingresa una descripción válida
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="12" className="mb-3">
            <Form.Label>Género</Form.Label>
            <Form.Select
              required
              aria-label="genero-select"
              value={generoPelicula}
              onChange={(e) => setGeneroPelicula(e.target.value)}
            >
              <option value="">Seleccionar género</option>
              <option value="Accion">Acción</option>
              <option value="Terror">Terror</option>
              <option value="Romance">Romance</option>
              <option value="Intenso">Intenso (aterrador, centrado en el desarrollo de personajes, sin sustos baratos, agotador emocionalmente, "slow-burn")</option>

            </Form.Select>
            <Form.Control.Feedback>¡Excelente!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Por favor selecciona un género.
            </Form.Control.Feedback>
          </Form.Group>
          <div className="text-center my-3">
            <Button type="submit">Enviar</Button>
          </div>
        </Row>
      </Form>
      <ListaPeliculas peliculas={peliculas} />
    </>
  );
}

export default Formulario;
