import CardHome from "../../../utils/card/Card";
import { SliderProps } from "./interface";
import { Wrapper } from "./Styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slider = ({ cardsData }: SliderProps) => {
  return (
    <Wrapper>
      <Carousel showThumbs={false} showIndicators={false} showStatus={false} autoPlay={false} >
        {cardsData.map((data, i) => (
          <CardHome key={i} {...data} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default Slider;
