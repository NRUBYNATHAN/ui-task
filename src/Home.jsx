import RightCon from "./components/RightCon";
import LeftCon from "./components/LeftCon";
import CenterCon from "./components/CenterCon";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <LeftCon />
      <CenterCon />
      <RightCon />
    </div>
  );
}

export default Home;
