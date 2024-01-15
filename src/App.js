import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./component/mainpage/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
