import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SideBar from "./components/SideBar";
// import ButtonHover from "./components/ButtonHover";
// import ImageShadow from "./components/ImageShadow";
// import TextBorder from "./components/TextBorder";

function App() {
  return (
    <>
      {/* <TextBorder />
      <ImageShadow />
      <ButtonHover /> */}
      <div id="wrapper">
        <Header />
        <Menu />
        <Content />
        <SideBar />
        <Footer />
      </div>
    </>
  );
}

export default App;
