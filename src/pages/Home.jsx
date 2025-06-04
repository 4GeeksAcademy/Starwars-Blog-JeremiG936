import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import TheCard1 from "../components/TheCard1.jsx";
import TheCard2 from "../components/TheCard2.jsx";
import TheCard3 from "../components/TheCard3.jsx";
import { useState, useEffect } from "react";

const Home = () => {
	const { store, dispatch } = useGlobalReducer();
	const [characters, setCharacters] = useState([]);
	const [starships, setStarships] = useState([]);
	const [planets, setPlanets] = useState([]);

	function loaded1() {
		fetch("https://www.swapi.tech/api/people/")
			.then((response) => {
				if (response.ok === false) {
					throw new Error("Error al traer datos")
				}
				return response.json();
			})
			.then((data) => {
				setCharacters(data.results);
			})
			.catch((error) => {
				alert(error);
			})
	}
	function loaded2() {
		fetch("https://www.swapi.tech/api/starships/")
			.then((response) => {
				if (response.ok === false) {
					throw new Error("Error al traer datos")
				}
				return response.json();
			})
			.then((data) => {
				setStarships(data.results);
			})
			.catch((error) => {
				alert(error);
			})
	}
	function loaded3() {
		fetch("https://www.swapi.tech/api/planets/")
			.then((response) => {
				if (response.ok === false) {
					throw new Error("Error al traer datos")
				}
				return response.json();
			})
			.then((data) => {
				setPlanets(data.results);
			})
			.catch((error) => {
				alert(error);
			})
	}
	useEffect(() => {
		loaded1();
		loaded2();
		loaded3();
	}, [])

	return (
		<div>
			<div id="the-top" className="d-flex">
				<div className="me-auto">
					<button type="button" className="btn me-auto">
						<img src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png" id="the-logo" alt="the-starwars-logo" />
					</button>
				</div>
				<div className="dropdown p-4">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						{store.favorites.map((element, index) => {
							return <li
							className="d-flex gap-3" 
							key={index}>
							{element}
							<button type="button" className="btn" onClick={() => 
								dispatch({type: "delete_favorite", payload: element})
							}>X</button>
							</li>
						})}
					</ul>
				</div>
			</div>
			<h3 className="pt-4 ps-4">Characters</h3>
			<div className="pt-4 ps-4 row gap-4 m-auto">
				{characters.map((element, index) => {
					return <TheCard1 key={index} character={element} />
				})}
			</div>
			<h3 className="pt-4 ps-4">Starships</h3>
			<div className="pt-4 ps-4 row gap-4 m-auto">
				{starships.map((element, index) => {
					return <TheCard2 key={index} starship={element} />
				})}
			</div>
			<h3 className="pt-4 ps-4">Planets</h3>
			<div className="pt-4 ps-4 row gap-4 m-auto">
				{planets.map((element, index) => {
					return <TheCard3 key={index} planet={element} />
				})}
			</div>
		</div>
	);
};

export default Home;