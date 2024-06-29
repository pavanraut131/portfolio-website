import Navbar from "./components/NavbarSection/Navbar";
import Intro from "./components/Introsection/Intro";
import Skills from "./components/SkillsSection/Skills";
import Contact from "./components/contactsection/Contact";
import Education from "./components/educationsection/Education";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
