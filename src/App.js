import './index.css';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div className="main-container bg-[url('./assets/img/neon-light.jpg')] w-full h-[60rem] bg-cover relative">
      <div className="absolute left-[12.5%] w-3/4">
        <section className="my-4 text-white text-3xl">
          JN
        </section>
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
