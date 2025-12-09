function About() {
  return (
    <>
      <main className="backdrop-blur-xl min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center space-y-4">
          <h1 className="sgeo uppercase text-4xl font-bold text-stone-200 tracking-wide">
            About
          </h1>
          <p className="text-md font-normal text-stone-200">
            Hi, my name's Kevin Nguyen. I graduated with a Bachelor of Science
            in Computer Science from California State University, Fullerton in
            May of 2025. I am currently pursuing a Master of Science in Computer
            Science from the Georgia Institue of Technology with an expected
            graduation date of December 2027.
          </p>
          <p className="text-md font-normal text-stone-200">
            I like to code projects of all sorts. My current focus is C++, but I
            usually use Python to make things. Most of my inspiration for my
            projects are solutions to problems that I have in my own life.
          </p>
          <p className="text-md font-normal text-stone-200">
            Outside of programming, I like to make pizza! I am currently
            developing my own dough recipe and I strive to achieve the perfect
            crust. I also play the guitar from time to time, learning the parts
            from music that I enjoy. I try to climb the ranks in Rocket League
            when I have the chance too.
          </p>
        </div>
      </main>
    </>
  );
}

export default About;
