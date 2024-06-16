import './App.css';
import TopBar from './Components/TopBar'
import Background from './Components/Background'
import StoreListings from './Components/StoreListing'


function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;