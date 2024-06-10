import './App.css';
import Message from './Message';

function App() {
  // userオブジェクト
  var user = {
    name: 'Yohei Yoshikawa',
    age: 48,
    country: 'Japen',
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
