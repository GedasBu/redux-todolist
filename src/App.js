import AddTodo from './components/AddTodo';
import TopNav from './components/Nav/TopNav';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-7 m-autos'>
          <TopNav/>
          <AddTodo/>
          <TodoList />

        </div>
      </div>
    </div>

  );
}

export default App;
