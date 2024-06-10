import { useEffect } from "react";
import "./App.css";
import Quotes from "./Components/Quotes";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <Quotes />
    </>
  );
}

export default App;
