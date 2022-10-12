import React from "react";
import classnames from "classnames";

import Content from "./Content";
// import Section from "./layout/content/section";
import Section from "./section";

const OurService = () => {
  return (
    <div className={classnames("ourservesbg")}>
      <div style={{ marginBottom: 147 }}></div>
      <Content title="Our Serves" />

      <Section>
          <div className={classnames("columnFlex", "colDiv")}>
            <div>
              <h5 className="txtDiv">MAKE YOUR MIXES</h5>
              <h1 className="txtDivTitle">gin &amp; ginger</h1>
            </div>
            <div className={classnames("rowFlex", "horidiv")}>
              <img src="/img17.png" alt="Flower" width={80} height={74} />
              <div className="verticalLine"></div>
              <ul className="ml-8  lists">
                <li className="txtList">SODA 250ml</li>
                <li className="txtList">CHERRY BRANDY 250ml</li>
                <li className="txtList">LEMON JUICE 20ml</li>
                <li className="txtList">SLOE 20ml</li>
                <li className="txtList">ISG 45ml</li>
              </ul>
            </div>
            <ul className="singleTXT">
              <li>
                4 are bottled at natural cask strength and unfettered by chill
                filtration. Carefully selected from
              </li>
            </ul>
          </div>

      </Section>
    </div>
  );
}

export default OurService;
