import { Routes, Route } from "@solidjs/router"
import Home from './pages/home/Home'
import About from './pages/about/About'
import Navbar from "./components/navbar/Navbar";
import { Container } from "./components/styled/Container";
// <For each={todos}>{todo => <Todo todo={todo} />}</For>;



function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
