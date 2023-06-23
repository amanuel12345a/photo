import React from "react";
import Images from "../components/Images";
import Nav from "../components/Nav";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
} from "../assets/image";
function Portfolio() {
  return (
    <div>
      <Nav />
      <Images title="wedding" a={img1} b={img2} c={img3} d={img12} e={img10} />
      <Images title="model" a={img6} b={img7} c={img8} d={img9} e={img5} />
      <Images
        title="single"
        a={img16}
        b={img4}
        c={img13}
        d={img14}
        e={img15}
      />
    </div>
  );
}

export default Portfolio;
