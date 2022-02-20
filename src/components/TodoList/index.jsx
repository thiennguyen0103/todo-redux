import { useState } from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../../redux/actions";
import todosSlice from "./TodosSlice";
import { v4 as uuidv4 } from "uuid";
import { todosRemainingSelector } from "../../redux/selectors";

export default function TodoList() {
    const [todoName, setTodoName] = useState("");
    const [priority, setPriority] = useState("");

    const dispatch = useDispatch();
    const todoList = useSelector(todosRemainingSelector);
    // const searchText = useSelector(searchTextSelector);

    const handleAddButton = () => {
        dispatch(
            todosSlice.actions.addTodo({
                id: uuidv4(),
                name: todoName,
                priority: priority,
                completed: false,
            })
        );
    };

    const handleInputChange = (e) => {
        setTodoName(e.target.value);
        console.log(todoList);
    };

    const handlePriorityChange = (value) => {
        setPriority(value);
    }
    return (
        <Row style={{ height: "calc(100% - 40px)" }}>
        <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
            {
                todoList.map(item => (
                    <Todo
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        prioriry={item.priority}
                        completed={item.completed}
                    />
                ))
            }
        </Col>{" "}
        <Col span={24}>
            <Input.Group style={{ display: "flex" }} compact>
            <Input value={todoName} onChange={handleInputChange} />{" "}
            <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
                <Select.Option value="High" label="High">
                <Tag color="red"> High </Tag>{" "}
                </Select.Option>{" "}
                <Select.Option value="Medium" label="Medium">
                <Tag color="blue"> Medium </Tag>{" "}
                </Select.Option>{" "}
                <Select.Option value="Low" label="Low">
                <Tag color="gray"> Low </Tag>{" "}
                </Select.Option>{" "}
            </Select>{" "}
            <Button type="primary" onClick={handleAddButton}>
                Add{" "}
            </Button>{" "}
            </Input.Group>{" "}
        </Col>{" "}
        </Row>
    );
}
