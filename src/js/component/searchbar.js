import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	inputRoot: {
		color: "rgb(250, 229, 39)",
		fontFamily: "Kufam",
		backgroundColor: "transparent",
		"& .MuiOutlinedInput-notchedOutline": {
			borderWidth: "2px",
			borderColor: "rgb(250, 229, 39)"
		},
		"&:hover .MuiOutlinedInput-notchedOutline": {
			borderWidth: "2px",
			borderColor: "rgb(250, 229, 39)"
		},
		"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderWidth: "2px",
			borderColor: "rgb(250, 229, 39)"
		}
	}
}));

const textStyles = makeStyles({
	inputLabel: {
		color: "rgb(250, 229, 39)",
		"&.focused": {
			color: "rgb(250, 229, 39)"
		}
	}
});

export const SearchBar = () => {
	const { store } = useContext(Context);
	const classes = useStyles();
	const textClasses = textStyles();
	let options = store.characters.concat(store.planets);
	console.log(options, "soy planets y characters");
	let autocomplete = (
		<Autocomplete
			classes={classes}
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
			renderInput={params => (
				<TextField
					{...params}
					InputLabelProps={{
						classes: {
							root: textClasses.inputLabel,
							focused: "focused"
						}
					}}
					InputProps={{
						...params.InputProps
					}}
					id="text-field"
					label="Search for the force!"
					variant="outlined"
				/>
			)}
		/>
	);
	return <Link to={"/"}>{autocomplete}</Link>;
};
