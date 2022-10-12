import React, { useState } from 'react';

const LoginForm = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [conform, setConform] = useState('');

	var name = /[\d|,|.|e|E|\+]+/g;
	var emailId = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var pass = /^[A-Za-z]\w{7,14}$/;

	const submitHandler = e => {
		alert(`Hi ${firstName} ${lastName}`)
	}
	return (
		<form className='login px-4 py-4 rounded' onSubmit={e => e.preventDefault()}>
			<div>
				<label className={(firstName === '' || firstName.match(name)) ? "inActive" : "active"}>First Name</label>
				<input
					type="text"
					required="required"
					value={firstName}
					onChange={e => setFirstName(e.target.value.trim().toUpperCase())}
				/>
				<span className={(firstName === '' || firstName.match(name)) ? "inActiveInp" : "activeInp"}></span>
			</div>
			<div>
				<label className={(lastName === '' || lastName.match(name)) ? "inActive" : "active"}>Last Name</label>
				<input
					type="text"
					required="required"
					value={lastName}
					onChange={e => setLastName(e.target.value.trim().toUpperCase())}
				/>
				<span className={(lastName === '' || lastName.match(name)) ? "inActiveInp" : "activeInp"}></span>
			</div>
			<div>
				<label id="email" className={email.match(emailId) ? "active" : "inActive"}>Email</label>
				<input
					type="text"
					required="required"
					value={email}
					onChange={e => setEmail(e.target.value.trim())}
				/>
				<span id="emailInp" className={email.match(emailId) ? "activeInp" : "inActiveInp"}></span>
			</div>
			<div>
				<label className={(password === '' || password.match(pass)) ? "inActive" : "active"}>Password</label>
				<input
					type="text"
					required="required"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<span className={(password === '' || password.match(pass)) ? "inActiveInp" : "activeInp"}></span>
			</div>
			<div>
				<label className={password === conform ? "active" : "inActive"}>Conform Password</label>
				<input
					type="text"
					required
					value={conform}
					onChange={e => setConform(e.target.value)}
				/>
				<span className={password === conform ? "activeInp" : "inActiveInp"}></span>
			</div>
			<div className='button-container'>
				<button className="submit" type="submit" onClick={e => submitHandler()}><a href=''>Submit</a></button>
			</div>
		</form>
	)
}

export default LoginForm