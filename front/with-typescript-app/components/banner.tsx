import React from "react";
import styled from "@emotion/styled";

const Back = styled.div`
  width: 100%;
  height: 445px;
  overflow: hidden;
  /* position: relative; */
  margin: 0px auto;
`;
function Banner() {
  return (
    <Back>
      <video muted autoPlay loop>
        <source type="video/mp4" src="banner.mp4"></source>
      </video>
    </Back>
  );
}

export default Banner;
