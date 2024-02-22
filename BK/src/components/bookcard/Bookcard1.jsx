import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Bookcard.css";

function MultipleItems() {
  const CustomNextArrow = (props) => (
    <div className="custom-arrow next" onClick={props.onClick}>
      <i className="fa fa-chevron-right"></i>
    </div>
  );

  // Custom Previous Arrow component
  const CustomPrevArrow = (props) => (
    <div className="custom-arrow prev1" onClick={props.onClick}>
      <i className="fa fa-chevron-left"></i>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings} >
          {data.map((d) => (
            <div className="h-[500px]  text-black ">
              {/* <div className="h-56 rounded-t-xl flex justify-center item-center "> */}
              <img src={d.img} alt="" />
              <p className="text-xl font-semibold flex justify-center item-center">
                {d.name}
              </p>
              {/* </div> */}
              {/* <div className="flex flex-col justify-center items-center gap-4 p-4">
                        <p className="text-xl font-semibold">{d.name}</p>
                    </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: "The Great Gatsby",
    img: "Images/a.jpg",
  },
  {
    name: "The Kite Runner",
    img: "Images/b.jpg",
  },
  {
    name: "Harry Potter and the Philosopher's Stone",
    img: "Images/c.jpg",
  },
  {
    name: "To Kill a Mockingbird",
    img: "Images/d.jpg",
  },
  {
    name: "Wuthering Heights",
    img: "Images/e.jpg",
  },
  {
    name: "Jane Eyre",
    img: "Images/f.jpg",
  },
  {
    name: "Fharenheit 451",
    img: "Images/g.jpg",
  },
];

export default MultipleItems;
