import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const Container = styled.div`
  padding: 2px 16px;
  width: 100px;
  height: 200px;
  display: block;
`;

const Content = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  position: relative;
  @keyframes move {
    0% {
      top: 0px;
    }
    100% {
      top: -5px;
    }
  }

  :hover {
    animation-name: move;
    animation-duration: 0.5s;
    animation-timing-function: linear;
  }
`;

const ImgContainer = styled.div`
  width: 10rem;
  height: 10rem;
  position: relative;
`;
const Img = styled(Image)`
  position: absolute;
`;
interface Props {
  title: string;
  type: string;
  price: string;
  brand: string;
  openDay: string;
  imgUrl: string;
  markUrl: string;
}

function Card(Prop: Props) {
  const myLoader = () => {
    return `${Prop.imgUrl}`;
  };

  return (
    <Content>
      <ImgContainer>
        <Img
          loader={myLoader}
          src="imgPath"
          alt="perfume image"
          layout="fill"
        />
      </ImgContainer>

      <Container>
        <p>{Prop.title}</p>
        <p>{Prop.brand}</p>

        {Prop.openDay && <p>{Prop.openDay}</p>}

        {Prop.price && <p>{Prop.price}</p>}
      </Container>
    </Content>
  );
}

export default Card;
