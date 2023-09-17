import './App.scss';
import Intro  from "./Components/Intro";
import Portfolio from './Components/portfolio';
import Skills from './Components/skills';
import Blogs from './Components/blog';
import Contact from './Components/contact';
import Footer from "./Components/footer"
function App() {
  return (
    <div className="App">
      <Intro />
      <Skills />
      <Portfolio />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;