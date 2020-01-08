import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.scss';

function Card() {
    const [data, setData] = useState({});


    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=rEVKeUEhCctJR0qsrVetPonFIPzJrda7Q2XtJ0Nw')
        .then(res => setData(res.data))
        .catch(err => `Error:  ${err}`)
    }, [])

    console.log(data);

    return (
        <div className="container">
            <h1>{data.title}</h1>
            <h3>{data.date}</h3>
            <img alt={data.title} src={data.hdurl}/>
            <h4>{data.copyright}</h4>
            <p>{data.explanation}</p>
        </div>
    )
}

export default Card;