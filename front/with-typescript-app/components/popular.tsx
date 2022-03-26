import React, { useEffect, useState } from "react";
import StyledTitle from "./common";
import styled from "@emotion/styled";
import Card from "./card";
import { apiGetPopular } from "../pages/api/info";

interface Data {
  img: string;
  isbuyNow: string;
  loan: {};
  logo: string;
  name: string;
  open: string;
  price: string;
  subTitle: string;
  subject: string;
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
function Popular() {
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    apiGetPopular().then((res) => {
      console.log(res);
      setDatas(res.data.lists);
    });
  }, []);

  return (
    <div>
      <StyledTitle>인기가 많은 모든 투자상품</StyledTitle>
      {/* <ul>
        {datas &&
          datas.map((data) => {
            <Card
              title={data.name}
              type={data.subject}
              price={data.price}
              brand={data.subTitle}
              openDay={data.open}
              imgUrl={data.img}
              markUrl={data.logo}
            />;
          })}
      </ul> */}
      <Container>
        {datas && (
          <Card
            title={datas[0].name}
            type={datas[0].subject}
            price={datas[0].price}
            brand={datas[0].subTitle}
            openDay={datas[0].open}
            imgUrl={datas[0].img}
            markUrl={datas[0].logo}
          />
        )}
        {datas && (
          <Card
            title={datas[1].name}
            type={datas[1].subject}
            price={datas[1].price}
            brand={datas[1].subTitle}
            openDay={datas[1].open}
            imgUrl={datas[1].img}
            markUrl={datas[1].logo}
          />
        )}
        {datas && (
          <Card
            title={datas[2].name}
            type={datas[2].subject}
            price={datas[2].price}
            brand={datas[2].subTitle}
            openDay={datas[2].open}
            imgUrl={datas[2].img}
            markUrl={datas[2].logo}
          />
        )}
        ;
      </Container>
    </div>
  );
}

export default Popular;
