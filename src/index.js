import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Pics from './Pics';
import Time from './Time';
import Greet from './Greet';
ReactDOM.render(
    <Pics></Pics>,
     document.getElementById("name")
);

ReactDOM.render(
    <Time />,
    document.getElementById("root"),
);

ReactDOM.render(
    <Greet/>,
    document.getElementById("greet")
);













