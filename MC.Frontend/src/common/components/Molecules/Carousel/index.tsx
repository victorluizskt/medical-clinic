import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import ClinicOne from '../../../assets/gettyimages-647735398-2048x2048.jpg';
import ClinicTwo from '../../../assets/gettyimages-935307938-2048x2048.jpg';
import ClinicThree from '../../../assets/gettyimages-1244803401-2048x2048.jpg';
import ClinicFour from '../../../assets/gettyimages-1296011247-2048x2048.jpg';

function CarouselContainer() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ClinicOne}
          alt="First slide"
          width="100px"
        />
        <Carousel.Caption>
          <h3>São Paulo</h3>
          <p>Avenida Paulista, 411</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ClinicThree}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Salvador</h3>
          <p>Rua Rio Doce, 222</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ClinicFour}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Rio de Janeiro</h3>
          <p>Rua Realengo, 400</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;
