import { useEffect, useRef } from "react";
import MusicPlayerSlider from "./components/MusicPlayerSlider";

function App() {
  const audioElement = useRef();
  useEffect(() => {
    console.log(audioElement, "audioElement")
  },[])

  return (

    <>

      <MusicPlayerSlider audioElement={audioElement}/>


      <audio
        controls
        ref={audioElement}
        src={require("./music/" + `Clarx - Shakedown [NCS Release].mp3`)}
      />




    </>
  );
}

export default App;
