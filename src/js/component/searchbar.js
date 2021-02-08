import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export const SearchBar = () => {
	const { store, actions } = useContext(Context);
	let options = store.characters;
	let autocomplete = (
		<Autocomplete
			className="searchbar"
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
