import { useEffect, useRef } from "react";
import MusicPlayerSlider from "./components/MusicPlayerSlider";

function App() {
  const audioElement = useRef();

  const Yoxla = () => {
    console.log(audioElement.current.volume)
  }


  return (
    <>
      <MusicPlayerSlider
        audioElement={audioElement}
      />

      <audio
        preload={"metadata"}
        ref={audioElement}
        src={require("./music/" + `Clarx - Shakedown [NCS Release].mp3`)}
      />
    </>
  );
}

export default App;
