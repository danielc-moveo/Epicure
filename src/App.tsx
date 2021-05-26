import "./App.css";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePageManager from "./components/pages/home-page/HomePageManager";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";

const Wrapper = styled.div`
  height: 100%;
`;

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePageManager} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </Router>
    </Wrapper>
  );
};

export default App;
