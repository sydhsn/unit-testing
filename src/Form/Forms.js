import { useState } from "react";


const Forms = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        if(!isNaN(e.target.value) && e.target.value.length){
            setMessage('Not A Number');
        }
        else{
            setMessage('');
        }
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("User Added Succesfuly!");
        setName('');
    }

    return (
        <div>
            <h6>User</h6>
            <p data-testid="success">{message}</p>
            <form>
                <label htmlFor="add-user">Add User: &nbsp; </label>
                <input id="add-user"
                    onChange={handleChange}
                    value={name}
                    placeholder="Enter Name"
                />&nbsp;
                <button onClick={handleSubmit} disabled={message.length ? true:false}>Add</button>
            </form>
        </div>
    )
}
export default Forms;