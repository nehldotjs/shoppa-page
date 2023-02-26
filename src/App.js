import Components from "./Components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Components />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
