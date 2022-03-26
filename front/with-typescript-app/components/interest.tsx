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

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ListItem = styled.li`
  list-style: none;
  font-size: smaller;
`;
function Interest() {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    apiGetInvestItems()
      .then((res) => {
        setDatas(res.data.lists);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(datas);
  console.log(typeof datas);

  return (
    <Container>
      <span>관심 가는 투자상품을</span> <BorderText>모두 골라보세요</BorderText>
      <Ul>
        <ListItem>{datas[0]}</ListItem>
        <ListItem>{datas[1]}</ListItem>
        <ListItem>{datas[2]}</ListItem>
        <ListItem>{datas[3]}</ListItem>
        <ListItem>{datas[4]}</ListItem>
        <ListItem>{datas[5]}</ListItem>
      </Ul>
    </Container>
  );
}

export default Interest;
