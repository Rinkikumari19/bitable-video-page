
import './App.css';
import Navbar from "./Navbar";
import Slider1 from "./Slider1";
import People from "./People";
import Videos from "./Videos";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="video-div">
        <Navbar />
      </div>

      <div className="video-div">
        <h1>Make videos that drive action</h1>
        <h3>
          Activate your team or customers with impactful, on-brand videos.
        </h3>
        <h3>
          Create them simply and collaboratively with the Biteable video maker.
        </h3>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zVlMY8GmPBM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div className="side-padd">
        <People />
      </div>
      <Slider1 />
      <div className="side-padd" style={{ marginTop: "-180px" }}>
        <Videos />
      </div>
      <Footer />
    </div>
  );
}

