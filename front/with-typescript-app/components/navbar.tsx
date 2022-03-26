import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 72px;
  padding: 1rem;
  color: black;
  background: white;
  font-weight: bold;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerTwo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Search = styled.div`
  font-weight: lighter;
  border-bottom: 2px solid;
  color: ${(props) => props.theme.grey};
`;

const Item = styled.div`
  margin: 1em;
`;

const Login = styled.div`
  margin: 1em;
  font-weight: lighter;
  color: ${(props) => props.theme.grey};
`;
function Navbar() {
  return (
    <Container>
      <ContainerTwo>
        <svg
          width="92"
          height="22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.891 6.13a6.627 6.627 0 0 1-.107 1.937 6.586 6.586 0 0 1-.3 1.024 4.026 4.026 0 0 1-2.702 7.019H9.166l.826 2.685.827 2.685h2.688l-.827-2.685h2.102a6.724 6.724 0 0 0 6.525-5.115 6.707 6.707 0 0 0-3.416-7.55Z"
            fill="#4C5D5E"
          ></path>
          <path
            d="M17.918 6.712a6.778 6.778 0 0 1-.134 1.355 6.712 6.712 0 0 1-4.201 4.923l-.035.014a6.725 6.725 0 0 1-2.35.42H0V10.74h11.199a4.036 4.036 0 0 0 3.934-3.151A4.025 4.025 0 0 0 11.2 2.685H5.375V5.37H2.688V0h8.594a6.724 6.724 0 0 1 4.2 1.539 6.712 6.712 0 0 1 2.302 3.83v.009c.089.439.134.886.134 1.334Z"
            fill="url(#logo_svg__a)"
          ></path>
          <path
            d="M14.998 8.062v-.006A4.038 4.038 0 0 0 15 5.375H2.688v13.42h2.687V8.056h9.407c.073 0 .15 0 .216.007ZM28 19.316h3.822V14.76h2.751c4.452 0 7.056-2.478 7.056-6.3 0-3.78-2.604-6.258-7.056-6.258H28v17.115Zm3.822-7.938V5.582h2.583c2.121 0 3.402.987 3.402 2.877 0 1.911-1.28 2.92-3.402 2.92h-2.583ZM58.305 19.316l-3.97-6.153c2.017-.945 3.13-2.75 3.13-5.103 0-3.549-2.541-5.859-6.888-5.859h-6.888v17.115h3.822V13.92h3.045l3.318 5.397h4.43ZM47.51 5.582h2.898c2.016 0 3.234.861 3.234 2.478 0 1.617-1.218 2.478-3.234 2.478H47.51V5.582ZM71.956 19.316h4.263L69.583 2.201h-3.97l-6.635 17.115h3.948l1.197-3.318h6.636l1.197 3.318Zm-6.657-6.636 2.142-5.964 2.142 5.964h-4.284ZM77.937 19.316h3.822V14.76h2.751c4.452 0 7.056-2.478 7.056-6.3 0-3.78-2.604-6.258-7.056-6.258h-6.573v17.115Zm3.822-7.938V5.582h2.583c2.121 0 3.402.987 3.402 2.877 0 1.911-1.28 2.92-3.402 2.92H81.76Z"
            fill="#4C5D5E"
          ></path>
          <defs>
            <linearGradient
              id="logo_svg__a"
              x1="0"
              y1="6.712"
              x2="17.918"
              y2="6.712"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.21" stop-color="#6BDEE5"></stop>
              <stop offset="1" stop-color="#6BE5B6"></stop>
            </linearGradient>
          </defs>
        </svg>
        <Item>홈</Item>
        <Item>탐색하기</Item>
      </ContainerTwo>
      <ContainerTwo>
        <Search>
          브랜드나 상품명으로 찾아보세요
          <svg
            width="28"
            height="28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.725 17.438h-1.204l-.427-.412a9.867 9.867 0 0 0 2.394-6.449c0-5.474-4.437-9.91-9.91-9.91-5.474 0-9.911 4.436-9.911 9.91s4.437 9.91 9.91 9.91c2.455 0 4.711-.9 6.45-2.393l.411.427v1.204l7.624 7.608 2.271-2.271-7.608-7.624Zm-9.148 0a6.852 6.852 0 0 1-6.86-6.86 6.852 6.852 0 0 1 6.86-6.862 6.852 6.852 0 0 1 6.861 6.861 6.852 6.852 0 0 1-6.86 6.861Z"
              fill="#B3B4B7"
            ></path>
          </svg>
        </Search>
        <Login>로그인</Login>
      </ContainerTwo>
    </Container>
  );
}

export default Navbar;
