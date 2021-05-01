import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Subnav from './components/Subnav';
import Timeline from './components/Timeline';
import Loadmore from './components/Loadmore';

function App() {
  return (
    <div className="App">
      <Header />
      <Subnav />
      <Timeline />
      <Timeline />
      <Timeline />
      <Loadmore />
    </div>
  );
}

export default App;
