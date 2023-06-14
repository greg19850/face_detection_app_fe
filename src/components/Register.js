import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../utils/api";

function Register({ handleSignIn, setLoggedUser, setSigninMessage  }) {
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [newUserName, setNewUserName] = useState('');

  const handleUserRegDetails = (e) => {
    if (e.target.name === 'email-address') {
      setNewUserEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setNewUserPassword(e.target.value);
    } else if (e.target.name === 'name') {
      setNewUserName(e.target.value);
    };
  };

  const registerNewUser = () => {
    registerUser(newUserName, newUserEmail, newUserPassword).then((user) => {
      if (user.id) {
        setLoggedUser({
          id: user.id,
          name: user.name,
          email: user.email,
          entries: 0,
          joined: user.joined
        });
        handleSignIn(true);
      }
    }).catch(err => {
      setSigninMessage('Incorrect Registration Details!')
      console.log('Error!');
    });
  };

  return (
    <div className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
                value={newUserName}
                onChange={handleUserRegDetails}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                value={newUserEmail}
                onChange={handleUserRegDetails}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                value={newUserPassword}
                onChange={handleUserRegDetails}
              />
            </div>
          </fieldset>
          <div className="">
            <Link to="/">
              <button
                type="submit"
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                onClick={registerNewUser}
              >Register
              </button>
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Register;