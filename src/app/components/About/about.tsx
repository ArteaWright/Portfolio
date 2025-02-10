import Image from "next/image";
import Button from "../Button/button";
import "./about.css";

export default function About() {
  return (
    <div className="about col-span-2 row-span-6">
      <Image
        className="profile-pic"
        src="/profile.png"
        alt="About"
        width={270}
        height={100}
      />

      <div className="about-text">
        <p className="about-greeting">I&#39;m</p>
        <p className="about-name">
          Artea
          <br />
          Wright
        </p>

        <div className="about-info">
          <div className="about-info-item">
            <Image
              className="icon"
              src="/email.svg"
              alt="email"
              width={20}
              height={20}
            />
            <a>artealwright@gmail.com</a>
          </div>
          <Image
            className="signature"
            src="/sign_white.png"
            alt="signature"
            width={90}
            height={50}
          />
        </div>
      </div>

      <div className="about-buttons">
        <Button>In</Button>
      </div>

    </div>
  );
}
