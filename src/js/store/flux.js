const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
      characters: [],
			globalUrl: "https://www.swapi.tech/api/people"
      planets: [],
			globalUrlPlanets: "https://www.swapi.tech/api/planets"
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
			},
      setGlobalUrl: globalUrlList => {
				setStore({
					globalUrl: globalUrlList
				});
      
      getPlanets: async () => {
				const response = await fetch(getStore().globalUrl);
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

      setGlobalUrlPlanets: globalUrlList => {
				setStore({
					globalUrlPlanets: globalUrlList
         });
			}
		}
	};
};

export default getState;
