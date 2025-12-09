function About() {
  return (
    <>
      <main className="backdrop-blur-xl min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center space-y-4">
          <h1 className="sgeo uppercase text-4xl font-bold text-stone-300">
            About
          </h1>
          <h3 className="italic text-lg font-normal text-stone-300">
            Hello there!
          </h3>
          <p className="text-md font-normal text-stone-300">
            My name's Kevin Nguyen. I graduated with a Bachelors of Science in
            Computer Science from California State University, Fullerton. I am
            currently pursuing a Master's in Computer Science from the Georgia
            Institue of Technology.
          </p>
          <p className="text-md font-normal text-stone-300"></p>
        </div>
      </main>
    </>
  );
}

export default About;
