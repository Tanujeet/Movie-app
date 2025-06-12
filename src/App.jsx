import Search from "./components/Search";

const App = () => {
  const [searchTerm, setsearchTerm] = useState("");

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="hero-banner" />
          <h1>
            Find <span className="text-gradient">movies</span> You'll enjoy
            without the Hassle
          </h1>
        </header>
        <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
      </div>
    </main>
  );
};

export default App;
