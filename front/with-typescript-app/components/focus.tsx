import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { apiGetNFT } from "../pages/api/info";
import Card from "./card";
import StyledTitle from "./common";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
function Focus() {
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    apiGetNFT().then((res) => {
      console.log(res);
      setDatas(res.data.lists);
    });
  }, []);

  return (
    <div>
      <StyledTitle>주목받고 있는 NFT 작가와 컬렉션</StyledTitle>
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

export default Focus;
