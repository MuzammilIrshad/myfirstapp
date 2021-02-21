import React from 'react';


function Pics() {
    const name = 'Muzammil Irshad'
    const city = 'Quetta'
    const country = 'Pakistan'
    const img = 'https://picsum.photos/400/200'
    const link = 'https://www.youtube.com/'
  return <div>
            <p>{`I live in ${city + " " + country}`}</p>
            <p className="App">My name is {name}</p>
            <img src='https://picsum.photos/400/200' />
            <a href={link}>
                <img src={img} />
            </a>
          </div>
}
export default Pics;