import React, {Component} from 'react';
import './signin.css';
import MainBrand from './MainBrand';
import axios from 'axios';
/** the forget password section  */
class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UsernameOrEmail: '',
      code: '',
      error: {},
    };
  }
  /**
   * on submit send the email to back end to send the code
   * @function
   * @param {object} e
   * @returns {void}
   */
  handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/users`, this.state.email)
      .then((res) => {
        if (res.status === '200') {
          /**go the rest password page*/
        } else if (res.status === '404') {
          /**go to 404 page*/
        }
      })
      .catch((error) => {});
    console.log(this.state);
  };
  /**
   * Email validation
   * (check if the email is valid)
   * @function
   * @param {object} event -the entered email
   * @returns {boolean} - return true if the email is valid
   */
  EmailHandel = (event) => {
    this.setState({email: event.target.value});
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/
    );
    let formErrors = {...this.state.formErrors};
    formErrors.EmailErorr = emailRegex.test(event.target.value)
      ? ''
      : 'invalid email address';
    this.setState({formErrors});
  };
  /**
   * here i render the text box and the submit button
   * @function
   * @function {JSX}
   */
  render() {
    return (
      <div className="container main-center">
        <MainBrand />
        <section className="social-form">
          <h2 className="pass-reset">Password Reset</h2>
          <h6 className="title-text">
            Enter your email address that you used to register. We'll send you
            an email to reset your password.
          </h6>
          <section className="main-form container">
            <form onSubmit={this.handelSubmit}>
              <div className="form-group sm-8">
                <input
                  required
                  type="email"
                  className="form-control"
                  placeholder="enter your email or username"
                  onChange={this.EmailHandel}
                />
                <button
                  type="button"
                  className="btn btn-outline-linkF"
                  onClick=""
                >
                  Send code
                </button>
              </div>
              <section className="or-seperator-2"></section>
              <section className="container main-center">
                <h6 className="hint-text">
                  If you still need help, contact Oud team at
                  <button type="button" className="btn btn-outline-link">
                    <a href={'mailto:oudteam.sup@gmail.com'}>
                      oudteam.sup@gmail.com
                    </a>
                  </button>
                </h6>
              </section>
            </form>
          </section>
        </section>
      </div>
    );
  }
}

export default ForgotPassword;
