import { useEffect, useRef, useState } from "react";
import FadeSection from "./FadeSection";

export function AboutApp() {
    return (
        <div>
            <h1>About Me!</h1>
            <FadeSection>
                <div className="box darkslategrey" style={styles.box}>
                    <p>I'm Lance, or Lapis!
                        I'm an aspiring game dev who also dabbles in digital art, video editing/production, and music!
                        I have my Bachelor's degree in Computer Science, and this website was created to show off some of my skills!
                        From the very start, I had a fascination in how video games function and how they are made.
                        My father introduced me to coding as a child and I have stayed with it ever since!
                        I primarily code in Godot, though I have experience with Unity and Unreal as well!
                        I also have experience in languages like Python, Java, C++, and more!
                    </p>
                </div>
            </FadeSection>
            <FadeSection>
                <div className="vbox roundedborder" style={styles.skills}>
                    <h2>My Skills</h2>
                    <div className="hbox" style={styles.row}>
                        <h3>Coding Languages Learned:</h3>
                        <p style={{fontSize: 16}}>Python, C, C++, C#, Java, Rust, React, Swift/XCode, JavaScript, SQL, PHP, GDScript</p>
                    </div>
                    <div className="hbox" style={styles.row}>
                        <h3>Software and Operating Systems:</h3>
                        <p style={{fontSize: 16}}>Adobe Suite, Microsoft Office, Windows (7,8,10,11), Linux/Unix</p>
                    </div>
                </div>
            </FadeSection>
            <div className="vbox squaresection aquamarine list">
                <h2>My Experience</h2>
                <div style={styles.experienceTable}>
                    <FadeSection>
                        <div className="hbox list-item" style={styles.row}>
                            <img src="uicblack.svg" alt="UIC Undergrad" style={styles.logo}/>
                            <div className="vbox list" style={styles.right}>
                                <h3 className="list-item">Teaching Assistant - CS 377 (Ethical Issues in Computing)</h3>
                                <p className="list-item">Jan 2025 - May 2026</p>
                                <ul>
                                    <li>Team Coordination</li>
                                    <li>Time Management</li>
                                    <li>Constructive Feedback</li>
                                </ul>
                            </div>
                        </div>
                    </FadeSection>
                    <FadeSection>
                        <div className="hbox list-item" style={styles.row}>
                            <img src="walmartblack.svg" alt="Walmart" style={styles.logo}/>
                            <div className="vbox list" style={styles.right}>
                                <h3 className="list-item">Team Member - Walmart</h3>
                                <p className="list-item">Oct 2023 - Apr 2024</p>
                                <ul>
                                    <li>Direct Communication</li>
                                    <li>Customer Service</li>
                                    <li>Organization</li>
                                </ul>
                            </div>
                        </div>
                    </FadeSection>
                    <FadeSection>
                    <div className="hbox list-item" style={styles.row}>
                        <img src="blackculvers.svg" alt="Culvers" style={styles.logo}/>
                        <div className="vbox list" style={styles.right}>
                            <h3 className="list-item">Team Member - Culver's</h3>
                            <p className="list-item">Mar 2022 - May 2023</p>
                            <ul>
                                <li>Customer Service</li>
                                <li>POS Interaction</li>
                                <li>Food Delivery</li>
                            </ul>
                        </div>
                    </div>
                    </FadeSection>
                </div>
                <p style={styles.copyright}>
                    Culver's Logo property of Culver Franchising System, LLC. Walmart Logo property of Walmart Inc. UIC Logo property of University of Illinois Chicago. I do not claim ownership of the logos provided.
                </p>
            </div>

            <div className="hbox gold roundedsection">
                <h2>Where You Can Find Me:</h2>
                <div className="vbox list">
                    <div className="hbox list-item">
                        <a href="https://github.com/TheCodingZombie"><img src="github.svg" alt="Github"/></a>
                        <h3>Coding and Pushing on Github.</h3>
                    </div>
                    <div className="hbox list-item">
                        <a href="https://thesocialzombie.itch.io/"><img src="itchio.svg" alt="Itch.io"/></a>
                        <h3>Participating in Game Jams and Uploading Progress Reports on Itch.io.</h3>
                    </div>
                    <div className="hbox list-item">
                        <a href="https://www.linkedin.com/in/GuevarraLance/"><img src="linkedin.svg" alt="LinkedIn"/></a>
                        <h3>Providing insight in my professional life on LinkedIn.</h3>
                    </div>     
                    <div className="hbox list-item">
                        <a href="mailto:thesocialzombiebusiness@gmail.com"><img src="email.svg" alt="Email Me!"/></a>
                        <h3>You may also email my business email for inquiries and the like!</h3>
                    </div>        
                </div>
            </div>
        </div>
    )
}

const styles = {
    box: {
        marginBottom: 30
    },
    skills: {
        maxWidth: "80%",
        alignSelf: "center", 
        margin: "auto"
    },
    logo: {
        maxWidth: 512, 
        minWidth: 64
    },
    experienceTable: {
        paddingLeft: "15%",
    },
    row: {
        display: "grid",
        gridTemplateColumns: "35% 1fr",
        gap: "2rem",

        padding: "2rem 0",

    },
    right: {
        marginTop: "0.5rem",
        paddingLeft: "1.5rem",
        lineHeight: 1.6,
    },
    copyright: {
        margin: 10,
        fontSize: 8
    }
}