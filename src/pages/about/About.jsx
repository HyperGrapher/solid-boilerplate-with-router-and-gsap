import { createEffect} from "solid-js";

export default function About() {

    createEffect(() => document.title = "Solid - About")


    return (
        <div>
            <h1>About Page</h1>
        </div>
    );
}


