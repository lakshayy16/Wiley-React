import { useState } from "react";

const Greetings = () => {
    const [name,setName] = useState('Lakshay')

const nameChange = () =>{
    setName('Monty')
    console.log(name)
}
    return (<div>Hello , how are you doing {name} ??
    <h1><button onClick={nameChange}>Change Name</button></h1>
    </div>);

}

export default Greetings;