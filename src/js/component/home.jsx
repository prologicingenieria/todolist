//import react into the bundle
import React, { useState } from "react";

//create your first component
const Home = () => {
  return (
    <div className="container box text-center col-lg-12">
      <div className="row">
        <div className="col p-5">
          <h1 className="p-5"> TO DO LIST</h1>
          <input type="text" />
          <button className="btn btn-success">agregar</button>
        </div>
	</div>
     <div className="col p-5"></div>
      

	<div className="receptor">
  </div>

    </div>
  );
};

export default Home;
