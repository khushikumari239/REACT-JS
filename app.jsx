
// npx create-react-app my-app

import { useState} from "react";

export default function App () {

const [count, setCount] = useState(0);


return (
    <div>
        <button id="btn" onClick={onClickHandler} >Counter {count}</button>
    </div>


);








}