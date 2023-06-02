import { Container, Row } from "react-bootstrap";
import ItemCard from "./ItemCard";

const ListCards = ({ peliculas }) => {
  return (
    <Container>
      {peliculas.length === 0 ? (
        <h2 className="text-center">Aún no hay películas agregadas</h2>
      ) : (
        <Row xs={1} md={2} lg={3} xl={4}>
          {peliculas.map((pelicula, indice) => (
            <ItemCard
              key={indice}
              nombrePelicula={pelicula.nombre}
              descripcionPelicula={pelicula.descripcion}
              generoPelicula={pelicula.genero}
            ></ItemCard>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ListCards;
