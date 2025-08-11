import "./Home.css";
import Slider from "../components/home/Slider";

function Home() {
  return (
    <div>
      <div>
         <Slider />
      </div>
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <h1 className="home">home</h1>
    </div>
  );
}

export default Home;
