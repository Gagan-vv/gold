import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Item from "../components/Item";
import Offer from "../components/Offer";

function App() {
  // useEffect(() => {
  //   const handleWheelEvent = (event) => {
  //     if (event.ctrlKey || event.metaKey) {
  //       event.preventDefault(); // Prevent zooming with Ctrl or Command key
  //     }
  //   };

  //   document.addEventListener("wheel", handleWheelEvent, { passive: false });

  //   return () => {
  //     document.removeEventListener("wheel", handleWheelEvent);
  //   };
  // }, []);
  
  return (
    <>
      <Header />
      <Offer />
      <Item />
      <Footer />
    </>
  );
}

export default App;
