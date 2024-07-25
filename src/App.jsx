import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
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
import Hotel from "./hotels";
import About from "./About";
import TravelPackagesS from "./SingleTravelpack";
import TVPAbout from "./TVPAbout";
import Profile from "./Profile";
import Reviews from "./reviews";
import DashBoard from "./Dash/DashBoard";

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
            <Route path="/hotel/:id" element={<Hotel />} />
            <Route path="/hotel/:id" element={<About />} />
            <Route path="/travelPackages/:id" element={<TravelPackagesS />} />  
            <Route path="/travelPackages/:id" element={<TVPAbout />} />  
            <Route path="/Profile" element={<Profile />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/admin/*" element={<DashBoard />} />

          </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
