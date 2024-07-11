import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Nav from "./Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import CounterUse from "./demo";
import HotelList from "./hotel";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/demo" element={<CounterUse />} />
            <Route path="/hotel" element={<HotelList />} />

          </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
