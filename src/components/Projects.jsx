const Project = () => {
    return (
    <div className="flex flex-col justify-evenly px-4 py-8">
      <h1 className="text-white text-center text-3xl font-extrabold mb-8">PROJECT</h1>
      <div className="flex flex-col self-center justify-between md:flex-row flex-wrap gap-6">
        {/* CARD: CHILDHOOD */}
        <div className="group w-80 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mx-4 p-4 rounded-2xl my-2 transition-transform duration-300 hover:scale-[1.03]">
          <img
            className="w-full rounded-xl"
            src="https://raw.githubusercontent.com/mairohanhoon/Portfolio/refs/heads/main/src/assets/community-fridge-image.png"
            alt="Community-Fridge"
          />
          <h1 className="text-center text-white font-extrabold mt-3">COMMUNITY FRIDGE</h1>
          <p className="text-sm text-center text-white font-semibold mt-2">
            A sustainable food-sharing platform where donors can offer excess food and NGOs can collect it to help those in need.
          </p>
        </div>

        {/* CARD: SCHOOLING */}
        <div className="w-80 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mx-4 p-4 rounded-2xl my-2 transition-transform duration-300 hover:scale-[1.03]">
          <img
            className="w-full rounded-xl"
            src="https://raw.githubusercontent.com/mairohanhoon/Portfolio/refs/heads/main/src/assets/bookstore-image.png"
          />
          <h1 className="text-center text-white font-extrabold mt-3">Bookify</h1>
          <p className="text-sm text-center text-white font-semibold mt-2">
            A platform to easily buy or sell your unused or unwanted books.
          </p>
        </div>

        {/* CARD: COLLEGE */}
        <div className="w-80 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mx-4 p-4 rounded-2xl my-2 transition-transform duration-300 hover:scale-[1.03]">
          <img
            className="w-full rounded-xl"
            src="https://raw.githubusercontent.com/mairohanhoon/Portfolio/refs/heads/main/src/assets/git-lens-image.png"
            alt="College"
          />
          <h1 className="text-center text-white font-extrabold mt-3">Git-Lens</h1>
          <p className="text-sm text-center text-white font-semibold mt-2">
            An app to fetch and display GitHub user details using the GitHub API.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
