import { Routes, Route, Link } from "@solidjs/router"
import { styled } from "solid-styled-components";
import ScrollReveal from 'scrollreveal';
import { createEffect, onMount, createSignal, For } from "solid-js";
import { gsap } from 'gsap';
import useScrollPosition from "./hooks/useScrollPosition";
// <For each={todos}>{todo => <Todo todo={todo} />}</For>;


const Btn = styled("button")`
  border-radius: 12px;
  background-color: #430e91;
  color: white;
  padding: 0.75rem 2rem;
  text-decoration: none;
  cursor: pointer;
  border: none;
  min-width: 12rem;
  height: 50px;

`;
function Page() {
  return (
    <div style={{ height: '250vh' }}>
      <h1>Hi Another Page</h1>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/">
          <Btn>Home</Btn>
        </Link>
      </nav>
    </div>
  );
}

function Home() {

  const [open, setOpen] = createSignal(false)
  const scroll = useScrollPosition()

  createEffect(() => ScrollReveal().reveal('.headline'))

  createEffect(() => console.log(scroll()))

  // Example, to be implemented..
  const hoverAnimation = (el, _accessor) => {
    const animation = gsap.to(el, {
      // properties
    });

    el.addEventListener("mouseenter", () => {
      animation.play();
    });

    el.addEventListener("mouseleave", () => {
      animation.pause();
    });
  };

  // Called by use:animation custom directive
  // which is a syntactic sugar for useRef
  const animation = (element, _accessor) => {

    const timeline = gsap.timeline();

    createEffect(() => {
      if (open()) {
        // when refreshing the page el shows up for a sec 
        // even opacity is zero by inline style.
        // So initialy visibility is hidden on its style
        element.style.visibility = "visible"
        timeline.fromTo(
          element,
          { xPercent: -100, opacity: 0 },
          { xPercent: 0, opacity: 1, ease: "power2", stagger: 0.085 }
        );

      } else {
        timeline.fromTo(
          element,
          { opacity: 1, reversed: true, duration: 500 },
          { opacity: 0, ease: "expo" }
        );
      }
    })
  };

  return (
    <div style={{ height: '250vh' }}>
      <h1>Home Page</h1>
      <nav style={{
        display: 'flex',
        gap: '1rem',
        backgroundColor: '#ec5252',
        height: '100vh'
      }}>
        <Link href="/hi"><Btn>Hi Page</Btn></Link>
        <Btn onClick={() => setOpen(!open())}>{open() ? 'Hide' : 'Show'}</Btn>
        <div style={{ margin: '5rem 1rem ', visibility: 'hidden' }} use:animation >
          <h1>HELLO</h1>
        </div>
        <h1>HELLO</h1>
      </nav>

      <h1 class="headline">
        Widget Inc.
      </h1>
      <h1 class="headline">
        Widget Inc.
      </h1>
      <h1 class="headline">
        Widget Inc.
      </h1>
      <h1 class="headline">
        Widget Inc.
      </h1>
      <h1 class="headline">
        Widget Inc.
      </h1>


    </div>
  );
}

function App() {
  return (
    <div>
      <h1>NAVBAR</h1>
      <Routes>
        <Route path="/hi" component={Page} />
        <Route path="/" component={Home} />
      </Routes>
    </div>
  );
}

export default App;
