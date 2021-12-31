import './Login.scss';
import illustration from '../undraw_programming_re_kg9v.svg';
import logo from '../logo.png';

export default function Login() {
  return (
    <div className="Login">
      <div className="Container">
        <div className="IllustrationContainer">
          <img className="Logo" src={logo} alt="" srcSet="" />
          <img className="Illustration" src={illustration} alt="" srcSet="" />
          <p className="Caption">Start for free and get attractive offers.</p>
        </div>
        <form className="Form">
          <h2>Get started.</h2>
          <p>
            <span className='me-1'>Already have an account?</span>
            <a className="text-decoration-none" href="#">
              Log in
            </a>
          </p>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I agree to Platform's <a href="#">Terms of Service</a> and{' '}
              <a href="#">Privacy Policy</a>
            </label>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="Submit btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
