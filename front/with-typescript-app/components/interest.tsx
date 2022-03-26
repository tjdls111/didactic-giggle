import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { apiGetInvestItems } from "../pages/api/info";

const Container = styled.div`
  padding: 5em;
  text-align: center;
`;
const BorderText = styled.span`
  font-weight: bold;
`;

function Interest() {
  const [data, setData] = useState(null);

  useEffect(() => {
    apiGetInvestItems()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <span>관심 가는 투자상품을</span> <BorderText>모두 골라보세요</BorderText>
    </Container>
  );
}

export default Interest;
