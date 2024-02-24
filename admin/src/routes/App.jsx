import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
function App() {
  return (
    <>
      <Header />
      <div className="main">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
