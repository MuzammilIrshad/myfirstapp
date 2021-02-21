import React from 'react';


function Time() {

    let currDate = new Date().toLocaleDateString();
    let currTime = new Date().toLocaleTimeString();

    return <>
        <h1 className="bg">Hello World {10 + 20}</h1>
        <p style={{ backgroundColor: "green", marginLeft: "3em" }}>`Current Date is: {currDate}`</p>
        <p>`Current Time is: {currTime}`</p>
    </>
  }

export default Time;