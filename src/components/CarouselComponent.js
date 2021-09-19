import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    altText: 'Apple Reseller',
    caption: 'A better way to Apple.',
  },
  {
    id: 2,
    altText: 'All Conditions',
    caption: 'New | Open Box | Used | Refurbished',
  },
  {
    id: 3,
    altText: 'Shop Now',
    caption: 'Find the perfect Apple product!',
  }
];  


const TopCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption className="topCarousel" captionHeader={item.altText} captionText={item.caption}/>
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              width: 100%;
              height: 200px;
              background-image: url("./images/header-slider-1.jpg");
              background-size: 100%;
              background-repeat: no-repeat;
              background-attachment: fixed;
              background-position: top;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}

      </Carousel>
    </div>
  );
}

export default TopCarousel;