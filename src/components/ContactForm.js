import React from "react";
import {useForm} from "react-hook-form";
import {EMAIL_PATTERN, PHONE_PATTERN} from "../utils/helpers";

const ContactForm = () => {
	const {register, reset, errors, handleSubmit} = useForm();

	const registerHandler = (data) => {
		console.log(data);
		reset();
	};
	return (
		<>
			<form onSubmit={handleSubmit(registerHandler)}>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						ref={register({
							required: "Username is required.",
							maxLength: {
								value: 100,
								message: "Maximum 100 character allowed",
							},
						})}
						className="form-control"
					/>
					{errors.username && (
						<span className="error">{errors.username?.message}</span>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="age">Age</label>
					<input
						type="number"
						name="age"
						ref={register({
							required: "Age is required.",
							min: {
								value: 18,
								message: "Age must be above 18.",
							},
						})}
						className="form-control"
					/>
					{errors.age && <span className="error">{errors.age?.message}</span>}
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						ref={register({
							required: "Email is required.",
							pattern: {
								value: EMAIL_PATTERN,
								message: "Please Provide valid email address.",
							},
						})}
						className="form-control"
					/>
					{errors.email && (
						<span className="error">{errors.email?.message}</span>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="phone">Phone Number</label>
					<input
						type="text"
						name="phone"
						ref={register({
							required: "Phone Number is required.",
							pattern: {
								value: PHONE_PATTERN,
								message: "Please Provide valid Phone Number.",
							},
						})}
						className="form-control"
					/>
					{errors.phone && (
						<span className="error">{errors.phone?.message}</span>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						ref={register({
							required: "Password is required.",
							minLenght: {
								value: 6,
								message: "Minimum 6 character",
							},
						})}
						className="form-control"
					/>
					{errors.password && (
						<span className="error">{errors.password?.message}</span>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						type="password"
						name="confirmPassword"
						ref={register({
							required: "Please retype your password.",
							minLenght: {
								value: 6,
								message: "Minimum 6 character",
							},
						})}
						className="form-control"
					/>
					{errors.confirmPassword && (
						<span className="error">{errors.confirmPassword?.message}</span>
					)}
				</div>
				<button type="submit">submit</button>
			</form>
		</>
	);
};

export default ContactForm;
