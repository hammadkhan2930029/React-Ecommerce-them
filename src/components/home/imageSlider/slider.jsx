import Carousel from 'react-bootstrap/Carousel';
import { AppImages } from '../../../constants/AppImages';
import './slider.css'

export const Slider = ()=> {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={AppImages.sliderImg1}     className="slider-img"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={AppImages.sliderImg2}     className="slider-img"/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={AppImages.sliderImg3}     className="slider-img"/>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

