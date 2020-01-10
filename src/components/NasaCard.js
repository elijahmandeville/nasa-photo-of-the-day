import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.scss';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

function NasaCard() {
    const [data, setData] = useState({});
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);


    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=rEVKeUEhCctJR0qsrVetPonFIPzJrda7Q2XtJ0Nw')
            .then(res => setData(res.data))
            .catch(err => `Error:  ${err}`)
    }, [])

    return (
        <div className="container">
            <Card className="card">
                <CardBody className="sec-1">
                    <CardTitle className="card-title">{data.title}</CardTitle>
                    <CardSubtitle className="card-date">{data.date}</CardSubtitle>
                </CardBody>
                    <CardImg alt={data.title} src={data.hdurl} className="card-img"/>
                <CardBody className="sec-2">
                    <CardSubtitle className="card-copyright">{data.copyright}</CardSubtitle>
                    <CardText className="card-text">{data.explanation}</CardText>
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            More Photos
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Choose a Date</DropdownItem>
                            <DropdownItem>Placeholder</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </CardBody>
            </Card>
        </div>
    )
}

export default NasaCard;