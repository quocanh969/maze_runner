import './App.css';
import Board from './Components/Board/Board';

function App() {
  return (
    <div>
      <div className='maze-runner-btn-group'>
        <button>Start point</button>
        <button>Path finding start</button>
        <button>End point</button>
      </div>
      <div className='maze-runner-grid'>
        <Board></Board>
      </div>
    </div>
  );
}

export default App;
