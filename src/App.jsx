import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import CounterUse from "./demo";
import HotelList from "./hotel";
import DestinationPage from "./destination";
import ThingsToDo from "./thingsToDo";
import ImageSlider from "./imageSlider";
import HomePage from "./home";
import TravelPackages from "./travelPackages";
import UsHotels from "./UsingSliceInHotels";
import UsDestination from "./UsingSliceInDest";
import UsTravelPackages from "./UsingSliceInTravelPack";
import UsThingsToDo from "./UsingSliceInThingsTodo";
import Footer from "./Footer";

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
            <Route path="/destination" element={<DestinationPage />} />
            <Route path="/thingsToDo" element={<ThingsToDo />} />
            <Route path="/imageSlider" element={<ImageSlider />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/travelPackages" element={<TravelPackages />} />
            <Route path="/UsingSliceInHotels" element={<UsHotels />} />
            <Route path="/UsingSliceInDest" element={<UsDestination />} />
            <Route path="/UsingSliceInTravelPack" element={<UsTravelPackages />} />
            <Route path="/UsingSliceInThingsToDo" element={<UsThingsToDo />} />
            <Route path="/Footer" element={<Footer />} />

            
          </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
