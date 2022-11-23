import { useEffect, useRef } from "react";
import MusicPlayerSlider from "./components/MusicPlayerSlider";

function App() {
  const audioElement = useRef();

  const Yoxla = () => {
    // console.log(audioElement.current.currentTime)
  }


  return (
    <>
      <MusicPlayerSlider
        audioElement={audioElement}
      />
      <audio
        controls
        ref={audioElement}
        src={require("./music/" + `Clarx - Shakedown [NCS Release].mp3`)}
      />

      <button
        onClick={Yoxla}
        style={{ position: "relative" }}
      >Yoxla</button>
    </>
  );
}

export default App;
