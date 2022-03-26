import React from "react";
import styled from "@emotion/styled";

const Btn = styled.button`
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 20px;
  padding: 0.5em 1em;
  border-color: transparent;
  font-size: small;
  width: 15em;
  margin: auto;
  display: block;
`;

function FindAllBtn() {
  return <Btn>모든 투자상품 확인하기</Btn>;
}

export default FindAllBtn;
