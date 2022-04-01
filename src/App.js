import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import ContactCard from "./components/ContactCard";
import Joke from "./components/Joke";
import jokesData from "./data/jokesData";
import ClickEvents from "./components/ClickEvents";
import Things from "./components/Things";
import NonUI from "./components/NonUI";
import Counter from "./components/Counter";
import GoingOut from "./components/GoingOut";
import PersonCard from "./components/PersonCard";

function App() {
  const jokeElements = jokesData.map((joke) => {
    return (
      <Joke
        setup={joke.setup}
        punchline={joke.punchline}
      />
    );
  });

  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <ContactCard
        img="/images/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <ContactCard
        img="/images/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <ContactCard
        img="../images/felix.png"
        name="Felix"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <ContactCard
        img="../images/pumpkin.png"
        name="Pumpkin"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      {jokeElements}
      <hr/>
      <ClickEvents/>
      <hr/>
      <Things/>
      <NonUI/>
      <hr/>
      <Counter/>
      <GoingOut/>
      <hr/>
      <PersonCard/>
    </div>
  );
}

export default App;
