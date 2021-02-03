const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			globalUrl: "https://www.swapi.tech/api/people"
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () => {
				const response = await fetch(getStore().globalUrl); //notice the use of fetch api
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
				console.log(getStore().characters);
				console.log(oneCharacter);
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
