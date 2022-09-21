/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";
// import { gsap } from 'gsap'
import './index.css';
import App from './App';

/*
gsap.config({
  autoSleep: 60,
  nullTargetWarn: false,
});

*/

render(
    () => (
        <Router>
            <App />
        </Router>
    ),
    document.getElementById("root")
);