import './App.css';
import CountPage from './CountPage';
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
        <CountPage />
      </header>
    </div>
  );
}

export default App;
