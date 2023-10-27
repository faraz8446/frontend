import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Slider() {
  return (
    <MDBCarousel
      showIndicators
      showControls
      class="carousel slide carousel-fade "
      data-mdb-interval="1"
    >
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://www.buetk.edu.pk/wp-content/uploads/2020/02/BUETK-1.jpg"
        alt="..."
      >
        <h5>Balochistan University of Engineering and Technology Khuzdar</h5>
        <p>Balochistan University of Engineering and Technology Khuzdar Islamabad is a public sector university.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://www.buetk.edu.pk/wp-content/uploads/2020/02/BUETK-1.jpg"
        alt="..."
      >
        <h5>Balochistan University of Engineering and Technology Khuzdar Campus</h5>
        <p>
        is a well-known public sector university providing a technical base and research platform to youngsters and contributing its due share in socio-economic uplift of Pakistan in general, and Balochistan in particular.
        </p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://www.buetk.edu.pk/wp-content/uploads/2020/02/BUETK-1.jpg"
        alt="..."
      >
        <h5>Buetk Location</h5>
        <p>
          it is located on the east side of khuzdar city near kattan 
        </p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://www.buetk.edu.pk/wp-content/uploads/2020/02/BUETK-1.jpg"
        alt="..."
      >
        <h5>BUETK Location</h5>
        <p>
        Balochistan University of Engineering & Technology, Khuzdar
        Box 89100
        </p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
