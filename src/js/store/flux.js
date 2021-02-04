const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			characterDetails: [],
			planets: [],
			globalUrl: "https://www.swapi.tech/api/people",
			globalUrlPlanets: "https://www.swapi.tech/api/planets",
			favouritesCharacters: [],
			deleteFavouritesCharacters: []
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
				console.log(getStore().favouritesCharacters);
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
