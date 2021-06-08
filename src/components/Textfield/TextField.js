import React from "react";
import { ErrorMessage, useField } from "formik";

export const Input = ({ label, ...props }) => {

	//Validate and show errors for formik input
	const [field, meta] = useField(props);
	return (
		<div className="field">
			<label htmlFor={field.name}>{label}</label>
			<input
				className={`form-control shadow-none ${
					meta.touched && meta.error && "is-invalid"
				}`}
				{...field}
				{...props}
				autoComplete="off"
			/>
			<ErrorMessage component="div" name={field.name} className="error" />
		</div>
	);
};
