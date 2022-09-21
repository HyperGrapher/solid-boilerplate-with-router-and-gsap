import { Routes, Route, Link } from "@solidjs/router"
import { createEffect, onMount, createSignal, For } from "solid-js";
import { Button } from '../../components/styled/Button';

export default function About() {

    createEffect(() => document.title = "Solid - About")


    return (
        <div style={{ height: '250vh' }}>
        <h1>About Page</h1>
        </div>
    );
}


