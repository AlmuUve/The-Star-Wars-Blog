const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			characterDetails: [],
			globalUrl: "https://www.swapi.tech/api/people",
			planets: [],
			globalUrlPlanets: "https://www.swapi.tech/api/planets"
		},

		actions: {
			getCharacters: async () => {
				const response = await fetch(getStore().globalUrl);
				const responseAsJson = await response.json();
				if (responseAsJson.next != null) {
					setStore({ globalUrl: responseAsJson.next });
				}

				responseAsJson.results.map(element => {
					getActions().setCharacters(element);
				});
			},
			setCharacters: oneCharacter => {
				getStore().characters.push(oneCharacter);
			},
			setGlobalUrl: globalUrlList => {
				setStore({
					globalUrl: globalUrlList
				});
			},

			getPlanets: async () => {
				const response = await fetch(getStore().globalUrlPlanets);
				const responseAsJson = await response.json();
				if (responseAsJson.next != null) {
					setStore({ globalUrlPlanets: responseAsJson.next });
				}
				responseAsJson.results.map(element => {
					getActions().setPlanets(element);
				});
			},
			setPlanets: onePlanet => {
				getStore().planets.push(onePlanet);
			},

			setGlobalUrlPlanets: planetsUrlList => {
				setStore({
					globalUrlPlanets: planetsUrlList
				});
			},

			getCharacterDetails: async uid => {
				let url = "https://www.swapi.tech/api/people/".concat(uid);
				const response = await fetch(url);
				const responseAsJson = await response.json();
				setStore({ characterDetails: [responseAsJson.result.properties] });
			}
		}
	};
};

export default getState;
