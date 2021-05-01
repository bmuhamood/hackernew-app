import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Subnav from './components/Subnav';
import Timeline from './components/Timeline';
import Loadmore from './components/Loadmore';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Subnav />
      <Timeline />
      <Timeline />
      <Timeline />
      <Loadmore />
      <Footer />
    </div>
  );
}

export default App;
