import { useEffect, useRef, useState } from "react";
import FadeSection from "./FadeSection";

export function IndexApp() {
  // TODO: Actually implement a navigation bar
  return (
    <div>
        <FadeSection>
            <div className="hbox white">
                <div className="headshot"></div>
                <div className="vbox" style={styles.list}>
                    <h1 className="greeting">Hello!</h1>
                    <h2>My name is <strong>Lance/Lapis</strong>!</h2>
                    <ul>
                        <li>Software Engineer</li>
                        <li>Multimedia Editor</li>
                        <li>Creative Designer</li>
                    </ul>
                    <p>Scroll to learn more about me!</p>
                </div>
            </div>
        </FadeSection>
        <FadeSection>
            <div className="vbox forestgreen roundedsection">
                <h2>"Creating experiences everyone can enjoy."</h2>
                <p>Check out some of my best projects!</p>
                <div className="hbox" style={styles.project}>
                    <div className="vbox">
                        <h3>Rogue's War</h3>
                        <p>A card game inspired by Kingdom Hearts and the classic card game, War.</p>
                    </div>
                    <iframe frameBorder="0" src="https://itch.io/embed/3788808" width="50%" height="167"><a href="https://thesocialzombie.itch.io/rogueswar">Rogue's War</a></iframe>
                </div>
                <div className="hbox" style={styles.project}>
                    <iframe frameBorder="0" src="https://itch.io/embed/3776666" width="50%" height="167"><a href="https://thesocialzombie.itch.io/14-days-to-loop">14 Days to Loop</a></iframe>
                    <div className="vbox">
                        <h3>14 Days to Loop</h3>
                        <p>A farming sim with a time-looping twist.</p>
                    </div>
                </div>
                <div><a href="projects" className="linkbutton limegreen">More Projects</a></div>
            </div>
        </FadeSection>
        <FadeSection>
            <div className="hbox gold squaresection">
                <div className="vbox">
                    <h2>Like what you see?</h2>
                    <p>Contact me for further information!</p>
                    <div><a href="aboutme" className="linkbutton darkslategrey">Contact Me</a></div>
                </div>
            </div>
        </FadeSection>
    </div>
  )
}

const styles = {
    list: {
        maxWidth:"50%",
        minWidth:"25%"
    },
    project: {
        margin: 0
    }
}