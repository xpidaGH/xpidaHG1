import React from "react";
import "./styles/output.css";
import { Box, Flex } from "rebass";
import { Routes, Route } from "react-router-dom";
import Navbar from "./homepages/Navbar";
import NavbarLeft from "./homepages/NavbarLeft";
import NavbarBottom from "./homepages/NavbarBottom";
import NavbarRight from "./homepages/NavbarRight";
import HomeScreen from "./screens/HomeScreen";
import Projects from "./portfolio/Projects";
import Skills from "./portfolio/Skills";
import Testimonials from "./portfolio/Testimonials";
import Contact from "./general/Contact";
import Tutorial from "./tutorials/Tutorial";
import Tutorial1 from "./tutorials/Tutorial1";
import Tutorial2 from "./tutorials/Tutorial2";
import Tutorial3 from "./tutorials/Tutorial3";
import Tutor2a from "./tutorials/Tutor2a";
import Tutor2b from "./tutorials/Tutor2b";
import Tutor2c from "./tutorials/Tutor2c";
import Tutor2d from "./tutorials/Tutor2d";
import UsefulLinks from "./general/UsefulLinks";

var date = new Date().getDate(); //To get the Current Date.
var month = new Date().getMonth() + 1; //To get the Current Month.
var year = new Date().getFullYear(); //To get the Current Year.
var hours = new Date().getHours();
var min = new Date().getMinutes();
var sec = new Date().getSeconds();
var milsec = new Date().getMilliseconds();

const App = (props) => (
  <Flex
    sx={{
      flexDirection: "column",
      minHeight: "100vh",
    }}
  >
    <Box>
      <Navbar />
    </Box>
    <Flex
      sx={{
        flex: 1,
        flexDirection: ["column", "row"],
      }}
    >
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
        }}
      >
        <div className="text-center font-light italic">
          <p>
            {date}/{month}/{year} {hours}:{min}:{sec}:{milsec}{" "}
          </p>
        </div>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="/HomeScreen" element={<HomeScreen />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Tutorial" element={<Tutorial />} />
          <Route path="/Tutorial1" element={<Tutorial1 />} />
          <Route path="/Tutorial2" element={<Tutorial2 />} />
          <Route path="/Tutorial3" element={<Tutorial3 />} />
          <Route path="/tutor2a" element={<Tutor2a />} />
          <Route path="/tutor2b" element={<Tutor2b />} />
          <Route path="/tutor2c" element={<Tutor2c />} />
          <Route path="/tutor2d" element={<Tutor2d />} />
          <Route path="/Tutorial" element={<Tutorial />} />
          <Route path="/UsefulLinks" element={<UsefulLinks />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
          <Route
            path="*"
            element={
              <main>
                <p className="p-10 text-8xl text-red-900">
                  There's nothing here: 404!
                </p>
              </main>
            }
          />
        </Routes>
      </Box>
      <Box
        sx={{
          flexBasis: ["auto", 128],
          order: -1,
        }}
      >
        <NavbarLeft />
      </Box>
      <Box
        sx={{
          flexBasis: ["auto", 128],
        }}
      >
        <NavbarRight />
      </Box>
    </Flex>
    <Box>
      <NavbarBottom />
    </Box>
  </Flex>
);

export default App;

/* const NoMatch = () => {
  return <p className="text-8xl text-red-900">There's nothing here: 404!</p>;
}; */
