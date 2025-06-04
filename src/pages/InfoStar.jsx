import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const InfoStar = () => {
    const [info, setInfo] = useState([]);
    const {id} = useParams();

    function loaded () {
        fetch(`https://www.swapi.tech/api/starships/${id}`)
        .then((response) => {
            if (response.ok === false) {
                throw new Error("Error al traer datos")
            }
            return response.json();
        }) 
        .then((data) => {
            setInfo(data.result.properties);
        }) 
        .catch((error) => {
            alert(error);
        })
    }
    useEffect(() => {
        loaded();
    }, [])
    
    return (

        <div className="container-fluid" id="char-page">
            <div className="row">
                <div className="col">
                    <img src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest/scale-to-width-down/1200?cb=20190313021755" id="the-inside-image" />
                </div>
                <div className="col text-start">
                    <h2>{info.name}</h2>
                    <p id="the-inside-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum alias omnis id exercitationem atque incidunt quidem iste laudantium culpa nemo tenetur, numquam, dicta excepturi consectetur! Nihil placeat eum aliquid soluta!</p>
                </div>
            </div>
            <div className="d-flex gap-4">
                <div className="d-flex flex-column">
                    <span>Passengers</span>
                    <span>{info.passengers}</span>
                </div>
                <div className="d-flex flex-column">
                    <span>Length</span>
                    <span>{info.length}</span>
                </div>
                <div className="d-flex flex-column">
                    <span>Crew</span>
                    <span>{info.crew}</span>
                </div>
                <div className="d-flex flex-column">
                    <span>Consumable</span>
                    <span>{info.consumables}</span>
                </div>
                <div className="d-flex flex-column">
                    <span>Model</span>
                    <span>{info.model}</span>
                </div>
            </div>
            <div>
                <Link to="/">
                    <button type="button" className="btn btn-light">Go Back</button>
                </Link>
            </div>
        </div>
    )
}

export default InfoStar;