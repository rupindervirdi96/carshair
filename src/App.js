import { SideBar } from "./Components/sideBar.jsx";
import { DisplayArea } from "./Components/displayArea.jsx";
import { useDispatch } from "react-redux";
import { AppStyles } from "./Components/styles";
import { useEffect } from "react";
import { getAllMakes, getFilter } from "./actions/appActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getFilter({ make: "ASTON MARTIN", type: "Passenger Car", year: "2021" })
    );
    dispatch(getAllMakes());
  }, [dispatch]);
  return (
    <AppStyles className="App">
      {/* <div className="sidebar-container"> */}
      <SideBar />
      {/* </div> */}
      <DisplayArea />
    </AppStyles>
  );
}

export default App;
