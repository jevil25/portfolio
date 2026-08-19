import "../css/Description.css";
import React, { useState, useEffect } from "react";

const FOCUS = ["backend services", "data pipelines", "entity resolution", "distributed systems"];

function Description() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const current = FOCUS[index];
        const timer = setTimeout(() => {
            if (text === current) {
                setTimeout(() => {
                    setText("");
                    setIndex((prev) => (prev + 1) % FOCUS.length);
                }, 1600);
            } else {
                setText(current.slice(0, text.length + 1));
            }
        }, 90);
        return () => clearTimeout(timer);
    }, [text, index]);

    return (
        <section id="top" className="hero">
            <div className="hero-record">
                <span className="hero-eyebrow">001 · software engineer 2 · backend &amp; data · bengaluru, india</span>
                <h1 className="hero-name">Aaron Nazareth</h1>
                <p className="hero-focus">
                    focused on <span className="hero-focus-value">{text}<span className="cursor">▌</span></span>
                </p>
                <p className="hero-bio">
                    I&apos;m a backend &amp; data-pipeline engineer with 2.5+ years building
                    high-scale data pipelines and high-throughput backend services. Right
                    now I&apos;m shipping Java, Spring Boot and Node.js services at Outcomes.
                    Before that I built distributed PySpark and Databricks pipelines at a
                    Goldman Sachs spinoff.
                </p>
                <dl className="hero-metrics">
                    <div><dt>1M+</dt><dd>requests / day</dd></div>
                    <div><dt>3M+</dt><dd>records / month</dd></div>
                    <div><dt>4M+</dt><dd>profiles enriched</dd></div>
                </dl>
                <div className="hero-actions">
                    <a className="hero-link primary" href="#Contact">get in touch</a>
                    <a className="hero-link" href="https://github.com/jevil25" target="_blank" rel="noopener noreferrer">github ↗</a>
                    <a className="hero-link" href="https://www.linkedin.com/in/aaron-nazareth-6580311b6/" target="_blank" rel="noopener noreferrer">linkedin ↗</a>
                </div>
            </div>
        </section>
    );
}

export default Description;
