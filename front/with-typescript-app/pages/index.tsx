import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Interest from "../components/interest";
import FindAllBtn from "../components/findAllBtn";
import Adbertise from "../components/adbertise";
import HowAboutThis from "../components/howAboutThis";
import Popular from "../components/popular";
import Focus from "../components/focus";
import Explanation from "../components/explanation";
import Footer from "../components/footer";

import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import GlobalStyle from "../styles/global";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <>
      <Navbar />
      <Banner />
      <Interest />
      <FindAllBtn />
      <Adbertise />
      <HowAboutThis />
      <Popular />
      <Focus />
      <Explanation />
      <Footer />
    </>
  </ThemeProvider>
);

export default IndexPage;
