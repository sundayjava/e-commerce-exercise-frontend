import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { KeyboardArrowLeftOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";

function SampleNextArrow(props: any) {
  const { style, onClick, currentIndex, data } = props;
  return (
    <div>
      {currentIndex !== data.length - 5 && (
        <Button
          onClick={onClick}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            ...style,
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftOutlined
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
      )}
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { style, onClick, currentIndex } = props;
  return (
    <div>
      {currentIndex !== 0 && (
        <Button
          onClick={onClick}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            ...style,
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="prev"
        >
          <KeyboardArrowLeftOutlined
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
      )}
    </div>
  );
}

const CarouselHomeSection = (props: { data: any; sectionName: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index: any) => {
    setCurrentIndex(index);
  };

  var settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    infinite: false,
    initialSlide: 0,
    afterChange: handleSlideChange,
    nextArrow: (
      <SampleNextArrow currentIndex={currentIndex} data={props.data} />
    ),
    prevArrow: (
      <SamplePrevArrow
        currentIndex={currentIndex}
        hasItems={props.data.length > 0}
      />
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4.2,
          slidesToScroll: 4,
          infinite: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.9,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="border">
      <h2 className="text-2xl ml-2 font-extrabold text-gray-800 py-5">{props.sectionName}</h2>
      <div className="slider-container relative p-5">
        <Slider {...settings}>
          {props.data.slice(0, 10).map((item: any, index: number) => (
            <HomeSectionCard key={index} product={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselHomeSection;
