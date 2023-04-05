import { useState, useEffect } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import List from "./components/List/List";

function App() {
    const [ show, setShow ] = useState(false);
    const [ newTask, setNewTask ] = useState('')
    const [searchValue, setSearchValue] = useState('');
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Coding',
            complete: false
        },
        {
            id: 2,
            title: 'Eat',
            complete: false
        },
        {
            id: 3,
            title: 'Sleep',
            complete: false
        }
    ]);

    const handleShow = () => setShow(!show)

    const handleAddTask = () => {
        const newId = tasks.length + 1;
        const newTaskObj = {
            id: newId,
            title: newTask,
            complete: false
        };
        setTasks([...tasks, newTaskObj]);
        setNewTask('');
    };

    const handleAddInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleSearchInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchValue.toLowerCase())
    );
        return(
        <div className="App">
            {show && (
                <Modal
                    handleShow={handleShow}
                    addText={handleAddInputChange}
                    addTask={handleAddTask}
                />
            )}
            <input
                name="search"
                placeholder="Search tasks"
                onChange={handleSearchInputChange}
            />
            <Button handleClick={handleShow}>Открыть модалку</Button>
            <List list={filteredTasks} />
        </div>
        );
}
export default App;