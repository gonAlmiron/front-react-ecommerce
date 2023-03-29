import Carousel from 'react-bootstrap/Carousel';
import fondo1 from '../images/fondo1.jpg'
import fondo2 from '../images/fondo2.jpg'
import fondo3 from '../images/fondo3.jpg'
import Footer from '../Layout/Footer';

const CarouselUno = () => {
  return (
    <>
    <Carousel className="imgHome">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fondo1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hardware PC</h3>
          <p>Arma tu PC a medida.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fondo2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Instalación</h3>
          <p>Pedi lo que necesites y nosotros nos encargamos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fondo3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Reparacion</h3>
          <p>
            Podes contar con nosotros para cualquier tipo de reparacion
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   <Footer/>
    </>
  );
}

export default CarouselUno;