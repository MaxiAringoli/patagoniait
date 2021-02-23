import React from "react";
import Hoteles from "./Hoteles";

function Home({ hotelDto }) {
  return <div>{hotelDto && <Hoteles hoteles={hotelDto.clusters} />}</div>;
}

export default Home;
