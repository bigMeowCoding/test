import React from 'react';
import {useMount} from "react-whooks";

const App = ()=> {
    useMount(()=> {
        console.log('mount')
    })
    return <h1> React App</h1>;

}
export default App;