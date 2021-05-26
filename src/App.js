
import './App.css';

function App() {
  const divStyle = {
    margin: '80px',
    height: '200px',
    width: '80%',
    background: 'grey',
  };
  return (

    <div >
      <header >
        <h1>
          Chistes
        </h1>
        <div style={divStyle}>
          
        </div>
        <button 
          type="button" style={{width:'30 px'}}>Siguiente
        </button>
      </header>
    </div>
  );
}

export default App;
