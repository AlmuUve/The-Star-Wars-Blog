const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			characterDetails: [],
			planets: [],
			planetDetails: [],
			globalUrl: "https://www.swapi.tech/api/people",
			globalUrlPlanets: "https://www.swapi.tech/api/planets",
			favouritesCharacters: [],
			deleteFavouritesCharacters: []
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

			setMyFavouritesCharacters: myFavouritesCharactersName => {
				if (
					!getStore().favouritesCharacters.find(favouritesCharacter => {
						return favouritesCharacter == myFavouritesCharactersName;
					})
				) {
					setStore({
						favouritesCharacters: [...getStore().favouritesCharacters, myFavouritesCharactersName]
					});
				}
			},

			setDeleteMyFavouritesCharacters: deletedCharacters => {
				setStore({
					favouritesCharacters: getStore().favouritesCharacters.filter(item => item != deletedCharacters)
				});
			}
		}
	};
};

export default getState;
