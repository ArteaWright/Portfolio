"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";
import JotformChatbot from "./components/chatbot/chatbot";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button className={menuOpen ? "hamburger hamburger-close" : "hamburger"}>
        {menuOpen ? (
          <Image
            src="/menu-close.svg"
            alt="Close Menu"
            width={30}
            height={30}
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <Image
            src="/menu-open.svg"
            alt="Open Menu"
            width={30}
            height={30}
            onClick={() => setMenuOpen(true)}
          />
        )}
      </button>

      <div className="portfolio">
        {/* Sidebar */}
        <nav
          className={
            menuOpen ? "portfolio-sidebar sidebar-open" : "portfolio-sidebar"
          }
        >
          <Link href="/">
            <Image src="/sign_green.png" alt="Logo" width={50} height={50} />
          </Link>
          <Link className="vertical-text" href="/#services">
            What I do
          </Link>
          <Link className="vertical-text" href="/#projects">
            My Work
          </Link>
          <Link className="vertical-text" href="/#thoughts">
            My Thoughts
          </Link>
        </nav>

        {/* Main Content */}
        <main>
          <div className="portfolio-hero">
            <div className="portfolio-hero-image">
              <h1>
                I&apos;m
                <br />
                Artea Wright
              </h1>

              <div className="words-container">
                <div className="words">
                  <h2>Optimizing Systems</h2>
                  <h2>Enhancing Efficiency</h2>
                  <h2>Engineering the Future</h2>
                </div>
              </div>

              <Image
                className="image"
                src="/profile.svg"
                alt="Profile picture of Artea Wright"
                width={600}
                height={100}
              />
            </div>
            <div className="portfolio-hero-video">
              <h2>Watch My Story</h2>
              <iframe
                width="590"
                height="345"
                src="https://www.youtube.com/embed/RpYoH71dTeE?si=qab_jIlJBFLKioIR"
                title="YouTube video player; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Client Banner */}
          <div className="portfolio-client-companies">
            <div className="clients-container">
              <div className="client">Wells Fargo</div>
              <div className="client">Truist</div>
              <div className="client">TechTrap</div>
            </div>

            <div className="clients-container" aria-hidden="true">
              <div className="client">Wells Fargo</div>
              <div className="client">Truist</div>
              <div className="client">TechTrap</div>
            </div>
          </div>

          {/* I help with - open to opportunities */}
          <section id="services" className="portfolio-services">
            <h2>I help with...</h2>
            <div className="services">
              <div className="service">
                <h3>Systems & Workflow Optimization</h3>
                <p className="description">
                Having smooth workflows often helps in improving productivity, but often this involves using data to find opportunities to reduce waste and streamline processes to cut out the fluff for better results, more release, and an agile workflow. .
                </p>
              </div>
              <div className="service">
                <h3> Software Engineering & Automation</h3>
                <p className="description">
                  User experience is top priority when developing software solutions and products, so delivering scalable and maintainable applications that improve performance helps achieve this.
                </p>
              </div>
              <div className="service">
                <h3>AI Integration</h3>
                <p className="description">
                Adopting cutting-edge technology can enhance scalability and competitiveness. Whether implementing AI, blockchain, and automation solutions tailored to business needs.
                </p>
              </div>
            </div>
          </section>

          {/* Portfolio Projects */}
          <section id="projects" className="portfolio-projects">
            <h2 className="portfolio-projects-web"> &#x2190; Scroll to see my work ...</h2>
            <h2 className="portfolio-projects-mobile"> &#x2190; Swipe to see my work ...</h2>
            <div className="projects">
              <Link href='/'>
              <div className="project">
                <h3>Project 1</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus vero earum quibusdam quod fugit nobis perspiciatis
                  unde, rem repellat cum, voluptate illum minus mollitia, quidem
                  quae voluptates consectetur aliquam cupiditate.
                </p>
              </div>
              </Link>
              <Link href='/'>
              <div className="project">
                <h3>Project 2</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus vero earum quibusdam quod fugit nobis perspiciatis
                  unde, rem repellat cum, voluptate illum minus mollitia, quidem
                  quae voluptates consectetur aliquam cupiditate.
                </p>
              </div>
              </Link>
              <Link href='/'>
              <div className="project">
                <h3>Project 3</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus vero earum quibusdam quod fugit nobis perspiciatis
                  unde, rem repellat cum, voluptate illum minus mollitia, quidem
                  quae voluptates consectetur aliquam cupiditate.
                </p>
              </div>
              </Link>
              <Link href='/'>
              <div className="project">
                <h3>Project 4</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus vero earum quibusdam quod fugit nobis perspiciatis
                  unde, rem repellat cum, voluptate illum minus mollitia, quidem
                  quae voluptates consectetur aliquam cupiditate.
                </p>
              </div>
              </Link>
              <Link href='/'>
              <div className="project">
                <h3>Project 5</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus vero earum quibusdam quod fugit nobis perspiciatis
                  unde, rem repellat cum, voluptate illum minus mollitia, quidem
                  quae voluptates consectetur aliquam cupiditate.
                </p>
              </div>
              </Link>
              <Link href='/'>
              <div className="project">
                <h3>Project 6</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus vero earum quibusdam quod fugit nobis perspiciatis
                  unde, rem repellat cum, voluptate illum minus mollitia, quidem
                  quae voluptates consectetur aliquam cupiditate.
                </p>
              </div>
              </Link>
            </div>
          </section>

          {/* Portfolio call to actions */}
          <section className="portfolio-call-to-action">
           <div className="calls">
              <h2>Ready to get to work?</h2>
           </div>

           <div className="actions">
           <p>&#x2713; Looking to automate your business workflows? <a className="action" href="https://calendly.com/arteawright/30min">Let&apos;s Connect</a></p>
           <br></br>
           <p>&#x2713; Looking to automate your business workflows? <a className="action" href="https://calendly.com/arteawright/30min">Schedule a consultation</a></p>
           <br></br>
           <p>&#x2713; Looking to automate your business workflows? <a className="action" href="">Download my resume</a></p>
           </div>
          </section>

          {/* Thoughts and appearances */}
          <div id="thoughts" className="portfolio-thoughts">
            <div className="thoughts-container">
              <h2>Appearances, podacsts, & blogs...</h2>
              <p>
                Add a description and some information about yourself of your
                appearance and community participations here.{" "}
              </p>
              <button>Email Me</button>
            </div>

            <Link
            className="thoughts-link"
            href="https://open.spotify.com/episode/5CYSOwoFLACaz3ooDtlDfL?si=906d74e7b9d444e1"
            >
              <Image
                className="thoughts-image"
                src={"/podcast-ep.svg"}
                alt="Thoughts"
                width={300}
                height={400}
            />
            </Link>
            <Link className="thoughts-link" href="">
              <Image
                className="thoughts-image"
                src={"/coming_soon.svg"}
                alt="Thoughts"
                width={300}
                height={400}
              />
            </Link>
          </div>

          <footer id="contact" className="portfolio-footer">
            <div className="footer-content">
              <p>Copyright &#169; 2025 Artea Wright. All Right Reserved.</p>
                <JotformChatbot />
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
