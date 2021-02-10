import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export const SearchBar = () => {
	const { store } = useContext(Context);
	let options = store.characters.concat(store.planets);
	console.log(options, "soy planets y characters");
	let autocomplete = (
		<Autocomplete
			classes="searchbar"
			id="combo-box-demo"
			style={{ width: 300 }}
			options={options}
			getOptionLabel={option => option.name}
			renderOption={option => (
				<React.Fragment>
					<span
						style={{ cursor: "pointer" }}
						onClick={() => {
							if (option.url.includes("people")) {
								window.location.href = "charactersdetails/" + option.uid;
							} else if (option.url.includes("planets")) {
								window.location.href = "planetsdetails/" + option.uid;
							}
						}}>
						{option.name}
					</span>
				</React.Fragment>
			)}
			renderInput={params => <TextField {...params} label="May the force be with you" variant="outlined" />}
		/>
	);
	return <Link to={"/"}>{autocomplete}</Link>;
};
