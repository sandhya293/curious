import React from "react";
import './LoaderStyle.css'
import Loader1 from '../../Assets/Images/l7.gif'

const Loader = () => {
  return (
    <section className="bodyC">
      {/* <section>
        <section className="loader_section">
          <img src={Loader1} alt="" className="loaderStyle" />
        </section>
      </section> */}

      <div class="containerLoad">
        <div class="set1">
          <div class="ball"></div>
          <div class="ball"></div>
        </div>
        <div class="set2">
          <div class="ball"></div>
          <div class="ball"></div>
        </div>

      </div>
    </section>
  );
};

export default Loader;
