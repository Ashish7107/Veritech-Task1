import "./App.css";
import Leadership from "./components/Teams/Leadership";
import ProfileCard from "./components/ProfileCard";
import DevelopmentTeam from "./components/Teams/DevelopmentTeam";
import Ribbon from "./components/Ribbon/Ribbon";
import RibbonRight from "./components/Ribbon/RibbonRight";
import Description from "./components/Description";

function App() {
  return (
    <>
      <RibbonRight subHeading={"THRIFTY CONQUEROR"} />
      <Description />

      <Leadership />
      <DevelopmentTeam />

      <Leadership />
      <RibbonRight subHeading=" Sales and Marketing Team" />
    </>
  );
}

export default App;
