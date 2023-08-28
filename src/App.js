import './App.css';
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "nothing"
        }
    }

    render() {
        return (
            <div>
                <div className="data_input">
                    <input className="input" type="text"/>
                    <button onClick={() => this.addTask()}>new task</button>
                </div>
                <h2 className="task">{this.state.task}</h2>
            </div>
        );
    }

    addTask() {
        this.setState({task: document.querySelector(".input").value})
    }
}

export default App;
