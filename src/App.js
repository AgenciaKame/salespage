import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "./App.css";
import Benefits from "./Components/Benefits/Benefits";
import Brand from "./Components/Brand/Brand";
import Comments from "./Components/Comments/Comments";
import Foda from "./Components/Foda/Foda";
import Home from "./Components/Home/Home";
import Modules from "./Components/Modules/Modules";
import Problems from "./Components/Problems/Problems";
import Services from "./Components/Services/Services";
import Offer from "./Components/Offer/Offer";
import Forms from "./Components/Forms/Forms";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Home />
      <Problems />
      <Services />
      <Benefits />
      <Comments />
      <Modules />
      <Brand />
      <Foda />
      <Offer />
      <Forms />
      <Footer />
    </>
  );
};

export default App;
