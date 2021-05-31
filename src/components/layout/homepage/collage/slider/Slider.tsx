import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CardHome from "../../../../utils/card/CardHome";
import { SliderProps } from "./interface";
import { Wrapper } from "./Styles";

const Slider = ({ cardsData }: SliderProps) => {
  return (
    <Wrapper>
      <Carousel showThumbs={false}>
        {cardsData.map((data, i) => (
          <CardHome key={i} {...data} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default Slider;
