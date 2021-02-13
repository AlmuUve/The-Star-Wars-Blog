const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			characterDetails: [],
			planets: [],
			planetDetails: [],
			globalUrl: "https://www.swapi.tech/api/people",
			globalUrlPlanets: "https://www.swapi.tech/api/planets",
			favourites: [],
			deleteFavourites: []
		},

		actions: {
			getCharacters: async () => {
				const store = getStore();
				const response = await fetch(getStore().globalUrl);
				const responseAsJson = await response.json();
				if (responseAsJson.next != null) {
					setStore({ globalUrl: responseAsJson.next });
				}
				responseAsJson.results.map(element => {
					setStore({ characters: [...store.characters, element] });
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

			getCharacterDetails: async uid => {
				let charactersUrl = "https://www.swapi.tech/api/people/".concat(uid);
				const response = await fetch(charactersUrl);
				const responseAsJson = await response.json();
				setStore({ characterDetails: [responseAsJson.result.properties] });
			},

			getPlanets: async () => {
				const store = getStore();
				const response = await fetch(getStore().globalUrlPlanets);
				const responseAsJson = await response.json();
				if (responseAsJson.next != null) {
					setStore({ globalUrlPlanets: responseAsJson.next });
				}
				responseAsJson.results.map(element => {
					setStore({ planets: [...store.planets, element] });
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

			getPlanetsDetails: async uid => {
				let planetsUrl = "https://www.swapi.tech/api/planets/".concat(uid);
				const response = await fetch(planetsUrl);
				const responseAsJson = await response.json();
				setStore({ planetDetails: [responseAsJson.result.properties] });
			},

			setMyFavourites: myFavouritesName => {
				if (
					!getStore().favourites.find(favourite => {
						return favourite == myFavouritesName;
					})
				) {
					setStore({
						favourites: [...getStore().favourites, myFavouritesName]
					});
				}
			},

			setDeleteMyFavourites: deleted => {
				setStore({
					favourites: getStore().favourites.filter(item => item != deleted)
				});
			}
		}
	};
};

export default getState;
