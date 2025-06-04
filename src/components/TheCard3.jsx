import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const TheCard3 = ({planet}) => {
    const {store, dispatch} = useGlobalReducer();

    return (
        <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeEAMY7V0diPg24T7t-JjfpzLpnvQ59iIFGw&s" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{planet.name}</h5>
                    <div className="d-flex pt-2">
                        <Link to={`/planets/${planet.uid}`}>
                            <button type="button" className="btn btn-dark me-auto">Learn More</button>
                        </Link>
                        <button type="button" className="btn" onClick={() => {
                            dispatch({type: "add_favorite", payload: planet.name})
                        }}>
                            <i className="fa-regular fa-heart"></i>
                        </button> 
                    </div>
                </div>
        </div>
    )
}

export default TheCard3;