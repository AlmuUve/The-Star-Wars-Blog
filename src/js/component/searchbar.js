import React, { useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { colors } from "@material-ui/core";

export const SearchBar = () => {
	const { store, actions } = useContext(Context);
	{
		console.log(store.characters[0]);
	}

	let options = store.characters;

	let autocomplete = (
		<Autocomplete
			id="combo-box-demo"
			style={{ width: 300 }}
			options={options}
			getOptionLabel={option => option.name}
			renderOption={option => (
				<React.Fragment>
					<span
						style={{ cursor: "pointer" }}
						onClick={() => {
							window.location.href = option.uid;
						}}>
						{option.name}
					</span>
				</React.Fragment>
			)}
			renderInput={params => <TextField {...params} label="May the force be with you" variant="outlined" />}
		/>
	);
	return <Link to={"/charactersdetails/"}>{autocomplete}</Link>;
};

// options={store.characters}
// getOptionSelected={option => option.name === store.characters}
// getOptionLabel={option => option.name}
