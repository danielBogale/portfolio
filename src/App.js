import AOS from "aos";
import ReactGA from "react-ga";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ContextProvider from "./Context/ContextProvider";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import HomePage from "./Pages/Home/HomePage";
import Portfilo from "./Pages/Portfilo/Portfilo";
import Resume from "./Pages/Resume/Resume";
import Check from "./Pages/Check/Check";

import NotFound from "./Share/NotFound";

const TRACKING_ID = "UA-263317620-2"; // my google analytics tracking id
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<HomePage />} />
              <Route path="homePage" element={<HomePage />} />
              <Route path="resume" element={<Resume />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="blogs" element={<Blog />} />
              <Route path="works" element={<Portfilo />} />
              <Route path="checks" element={<Check />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
