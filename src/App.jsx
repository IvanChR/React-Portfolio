import { Navbar } from "./components/Navbar";
import { AboutHome, ContactIcons } from "./components/AboutHome";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import "./style.scss"

export function App() {
    return (
        <>
            <main className="main-container">

                <div className="ellipse-1 " />
                <Navbar />
                <AboutHome />
                <div className="ellipse-2 " />
                <Skills />
                <Projects />
                <div className="rectangle-1" />
                <Experience />
                <footer className="contact-footer">
                    <div className="container">
                        <p> <i className="fa-solid fa-envelope"></i> contacto.ivanchr@gmail.com</p>
                        <ul>
                            <ContactIcons />
                        </ul>
                    </div>
                </footer>
                <button className="goUp">
                    <i className="fa-solid fa-arrow-up" />
                </button>

            </main>
        </>
    );
}
