import React from "react";
import ReactDom from "react-dom";

const img = "https://picsum.photos/200";

ReactDom.render(
  <div>
    <h1 className="heading">My Favorite Foods</h1>
    <div>
      <img alt="random" src={img + "?grayscale"} />

      <img
        className="food-img"
        alt="dragonfruit"
        src="https://cdn.dribbble.com/users/1010064/screenshots/11155069/media/f5311669f4003fd272cdae978d88754a.png?compress=1&resize=400x300"
      />
      <img
        className="food-img"
        alt="dumplings"
        src="https://steamykitchen.com/wp-content/uploads/2007/04/Screen-Shot-2014-02-17-at-1.16.50-PM-480x270.png"
      />
      <img
        className="food-img"
        alt="rasberries"
        src="https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/raspberries.jpg?itok=ZN4P8oS6"
      />
    </div>
  </div>,
  document.getElementById("root")
);
