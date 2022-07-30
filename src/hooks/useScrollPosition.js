import { createEffect, onMount, createSignal, For } from "solid-js";

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = createSignal(0);
  
    createEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
      }
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    });
  
    return scrollPosition;
  };
  
  export default useScrollPosition;