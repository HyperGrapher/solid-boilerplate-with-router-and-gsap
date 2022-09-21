import { Link } from "@solidjs/router"
import ScrollReveal from 'scrollreveal';
import { createEffect, onMount, createSignal, For, Show  } from "solid-js";
import { gsap } from 'gsap';
import useScrollPosition from "../../hooks/useScrollPosition";
import { Button } from '../../components/styled/Button';

export default function Home() {

    const [open, setOpen] = createSignal(false)
    const scroll = useScrollPosition()
  
    createEffect(() => document.title = "Solid - Home")
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
          <Button onClick={() => setOpen(!open())}>{open() ? 'Hide' : 'Show'}</Button>

          <Show when={open()} fallback={<div>Hidden</div>}>
            <div style={{ margin: '5rem 1rem ', visibility: 'hidden' }} use:animation >
              <h1>HELLO</h1>
            </div>
          </Show>

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