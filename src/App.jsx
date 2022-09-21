import { Routes, Route } from "@solidjs/router"
import Home from './pages/home/Home'
import About from './pages/about/About'
import Navbar from "./components/navbar/Navbar";
import { Container } from "./components/styled/Container";
import { styled } from "solid-styled-components";

export const AppStyle = styled("div")`
  background-color: #121111;
  color: rgba(255, 255, 255, 0.817);
  min-height: 100vh;

`;


// <For each={todos}>{todo => <Todo todo={todo} />}</For>;

function App() {
  return (
    <AppStyle>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Routes>
      </Container>
    </AppStyle>
  );
}

export default App;
