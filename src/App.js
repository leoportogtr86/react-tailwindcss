import logo from './logo.svg';
import './App.css';
import Title from './components/Title/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="flex">

          <img src={logo} className="App-logo" alt="logo" />
          <img src="https://symbols.getvecta.com/stencil_97/3_tailwind-css-icon.43c02f69bf.jpg" className="App-logo" alt="logo" />

        </div>




        <Title />

      </header>
    </div>
  );
}

export default App;
