import { useState } from "react";
import { Link } from "react-router-dom";
import { signInUser } from "../utils/api";

function SignIn({ handleSignIn, setLoggedUser, setSigninMessage }) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');



  const handleUserSignInDetails = (e) => {
    if (e.target.name === 'email-address') {
      setUserEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setUserPassword(e.target.value);
    };
  };

  const logInUser = () => {
    signInUser(userEmail, userPassword).then((user) => {
      if (user.id) {
        setLoggedUser({
          id: user.id,
          name: user.name,
          email: user.email,
          entries: user.entries,
          joined: user.joined
        });
        handleSignIn(true);
        setSigninMessage('Welcome! Please sign in')
      }
    }).catch(err => {
      setSigninMessage('Incorrect Login Details!')
      console.log('Error!');
    });
  };

  return (
    <div className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                value={userEmail}
                onChange={handleUserSignInDetails} />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                value={userPassword}
                onChange={handleUserSignInDetails} />
            </div>
          </fieldset>
          <div className="">
            <Link to="/">
              <button
                type="submit"
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                onClick={logInUser}
              > Sign In
              </button>
            </Link>
          </div>
          <div className="lh-copy mt3">
            <Link to="/register" className="f6 link dim black db">Register</Link>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignIn;