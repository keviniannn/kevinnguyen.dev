function Experience() {
  const experiences = [
    {
      role: "Capstone Team Lead",
      company: "California State University, Fullerton | Raytheon Technologies",
      dates: "Aug 2025 - May 2025",
    },
    {
      role: "Machine Learning Research Intern",
      company: "CIC | PCUBED Summer Research Program (Volunteer)",
      dates: "May 2024 - July 2024",
    },
  ];

  return (
    <>
      <main className="backdrop-blur-xl min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl w-full space-y-6">
          <h1 className="sgeo uppercase text-4xl font-bold text-stone-200 tracking-wide">
            Experience
          </h1>
          <div className="space-y-4">
            {experiences.map(({ role, company, dates }) => (
              <div
                key={`${role}-${company}`}
                className="flex items-center justify-between rounded-lg border border-stone-200 px-4 py-3 shadow-sm shadow-black/50 text-stone-200"
              >
                <div className="text-left">
                  <div className="sgeo text-lg font-semibold">{role}</div>
                  <div className="text-md font-normal text-stone-300">
                    {company}
                  </div>
                </div>
                <span className="italic text-md font-normal whitespace-nowrap">
                  {dates}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Experience;
