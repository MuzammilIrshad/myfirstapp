import React from 'react';


function Greet() {
    let d = new Date(2020, 2, 21, 22);
    let hours = d.getHours();
    let greetings = '';
    let css = {};
    if (hours > 0 && hours < 12) {
        greetings = 'GOOD MORNING';
        css.color = 'green';
    }
    else if (hours >= 12 && hours < 19) {
        greetings = 'GOOD EVENING';
        css.color = 'orange'
    }
    else {
        greetings = 'GOOD NIGHT';
        css.color = 'black';
    }
    return <h2>HELLO SIR, <span style={css}> {greetings} </span></h2>
}
export default Greet;
