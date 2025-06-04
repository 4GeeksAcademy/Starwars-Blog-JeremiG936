import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const InfoPlan = () => {
    const [info, setInfo] = useState([]);
    const {id} = useParams();

    function loaded () {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
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
                    <span>Climate</span>
                    <span>{info.climate}</span>
                </div>
                <div className="d-flex flex-column">
                    <span>Diameter</span>
                    <span>{info.diameter}</span>
                </div>
                <div className="d-flex flex-column">
                    <span>Population</span>
                    <span>{info.population}</span>
                </div>
                <div className="d-flex flex-column">
                    <span>Gravity</span>
                    <span>{info.gravity}</span>
                </div>
                <div className="d-flex flex-column">
                    <span>Surface Water</span>
                    <span>{info.surface_water}</span>
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

export default InfoPlan;