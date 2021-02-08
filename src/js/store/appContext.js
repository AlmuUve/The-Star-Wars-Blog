import React, { useState, useEffect } from "react";
import getState from "./flux.js";
import "../../styles/index.scss";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(async () => {
			let getLocalStorage = JSON.parse(localStorage.getItem("characters"));
			let getGlobalUrl = JSON.parse(localStorage.getItem("globalUrl"));
			if (getLocalStorage == undefined) {
				await state.actions.getCharacters(state.store.globalUrl);
				localStorage.setItem("characters", JSON.stringify(state.store.characters));
				localStorage.setItem("globalUrl", JSON.stringify(state.store.globalUrl));
			} else {
				state.store.characters = getLocalStorage;
				state.store.globalUrl = getGlobalUrl;
			}
		}, []);

		useEffect(async () => {
			let getLocalStorage = JSON.parse(localStorage.getItem("planets"));
			let getGlobalUrlPlanets = JSON.parse(localStorage.getItem("globalUrlPlanets"));
			if (getLocalStorage == undefined) {
				await state.actions.getPlanets(state.store.globalUrlPlanets);
				localStorage.setItem("planets", JSON.stringify(state.store.planets));
				localStorage.setItem("globalUrlPlanets", JSON.stringify(state.store.globalUrlPlanets));
			} else {
				state.store.planets = getLocalStorage;
				state.store.globalUrlPlanets = getGlobalUrlPlanets;
			}
		}, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
