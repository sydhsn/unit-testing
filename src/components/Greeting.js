import { useState } from "react";
import Output from './Output';

function Greeting() {

    const [changeText, setChangeText] = useState(false);

    const handleChange = ()=>{
        setChangeText(true);
    }
    return (<div>
        <h1>Hello World!</h1>
        {!changeText && <Output>it's good to see you!</Output>}
        {changeText && <Output>Changed!</Output>}
        <button onClick={handleChange}>Change Text!</button>
    </div>);
}
export default Greeting;