import React from "react";

const Header4 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1>
                <span className="color-font">Be yourself,</span> everyone else is
                 <span className="color-font">already taken.</span>.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="gradient-circle"></div>
      <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Header4;
