import './App.css';
import Message from './Message';

function App() {
  // userオブジェクト
  var user = {
    name: 'Yoshikawa',
    age: 48,
    country: 'Japan',
  }
  return (
    <div className="App">
      <header className="App-header">
        Hello, React
        <Message user={user} />
      </header>
    </div>
  );
}

export default App;
