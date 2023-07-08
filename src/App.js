import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Subreddits from './components/Subreddits/Subreddits.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </>
  );
}

export default App;
