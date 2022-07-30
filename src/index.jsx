/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";
import ScrollReveal from 'scrollreveal';
// import { gsap } from 'gsap'
import './index.css';
import App from './App';

/*
gsap.config({
  autoSleep: 60,
  nullTargetWarn: false,
});

*/

ScrollReveal({
    delay: 150,
    distance: '150px',
    reset: true,
    duration: 600,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    scale: 1,
    cleanup: true,
});

render(
    () => (
        <Router>
            <App />
        </Router>
    ),
    document.getElementById("root")
);