import About from "./components/About/about";
import Container from "./components/Container/container";

export default function Home() {
  return (
    <>
      <About/>
      <Container className="col-span-6">
        <h1>(Software Engineer)</h1>
        <h2>Software solutions for real world problems</h2>
      </Container>
      <Container className="col-span-3 row-span-3">
        <h2>More About Me</h2>
      </Container>
      <Container className="col-span-3 row-span-4">
        <h2>See My Work</h2>
      </Container>
      <Container className="col-span-3 row-span-2">
        <h2>Future projects & interests</h2>
      </Container>
      <Container className="col-span-3">
        <h2>Work With Me</h2>
      </Container>
    </>
  );
}
