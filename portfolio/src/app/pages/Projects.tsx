function Projects() {
  const projects = [
    {
      title: "Credis",
      href: "https://github.com/keviniannn/credis",
      dates: "Nov 2025 - Present",
    },
    {
      title: "Scraped Tomatoes",
      href: "https://github.com/keviniannn/scraped-tomatoes",
      dates: "Nov 2025 - Present",
    },
    {
      title: "Pizza Blog",
      href: "https://kevspizza.netlify.app/",
      dates: "Oct 2025 - Present",
    },
    {
      title: "Bring Your Own",
      href: "https://bringyourown.netlify.app/",
      dates: "Feb 2025 - Present",
    },
    {
      title: "National Basketball Predictions",
      href: "https://github.com/keviniannn/national-basketball-predictions",
      dates: "Jan 2025 - May 2025",
    },
    {
      title: "Spotivents",
      href: "https://github.com/keviniannn/spotivents",
      dates: "Apr 2024 - Feb 2025",
    },
  ];

  return (
    <>
      <main className="backdrop-blur-xl min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl w-full space-y-6">
          <h1 className="sgeo uppercase text-4xl font-bold text-stone-200 tracking-wide">
            Projects
          </h1>
          <div className="space-y-4">
            {projects.map(({ title, href, dates }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-lg border border-stone-200 px-4 py-3 shadow-sm shadow-black/50 text-stone-200 hover:text-blue-900 hover:border-blue-900 transition-colors"
              >
                <span className="sgeo text-left text-lg font-semibold">
                  {title}
                </span>
                <span className="italic text-md font-normal whitespace-nowrap">
                  {dates}
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Projects;
