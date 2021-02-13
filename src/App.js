import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header'
import Search from './Search'
import TaskForm from './TaskForm'
import TaskTable from './TaskTable'
import './App.css'

function App() {
  return (
    <div className="App">

      <Header />
      
      <div id="main">

        <h1>To Do List</h1>
        <Search />

        <div className="tasks">
          <TaskForm />
          <TaskTable />
        </div>

      </div>
      
    </div>
  );
}

export default App;
