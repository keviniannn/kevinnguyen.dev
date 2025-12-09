import resumePdf from "../../assets/resume.pdf";

function Resume() {
  return (
    <>
      <main className="backdrop-blur-xl min-h-screen flex items-center justify-center px-4">
        <div className="p-10 max-w-2xl w-full text-center space-y-4">
          <h1 className="sgeo uppercase text-4xl font-bold text-stone-200">
            Resume
          </h1>
          <p className="italic text-lg font-normal text-stone-200">
            Updated December 2025
          </p>

          <div className="aspect-[8.5/11] w-full overflow-hidden rounded-lg border border-stone-200 shadow-lg shadow-black/50">
            <iframe
              src={resumePdf + "#view=FitH"}
              title="Resume PDF"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Resume;
