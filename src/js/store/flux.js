const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			globalUrl: "https://www.swapi.tech/api/planets"
		},
		actions: {
			getPlanets: async () => {
				const response = await fetch(getStore().globalUrl);
				const responseAsJson = await response.json();
				if (responseAsJson.next != null) {
					setStore({ globalUrl: responseAsJson.next });
				}
				responseAsJson.results.map(element => {
					getActions().setPlanets(element);
				});
				console.log(getStore().planets);
			},
			setPlanets: onePlanet => {
				getStore().planets.push(onePlanet);
			},
			setGlobalUrl: globalUrlList => {
				setStore({
					globalUrl: globalUrlList
				});
			}
		}
	};
};

export default getState;
