import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { username: "", password: "" };

    this.updateForm = this.updateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateForm(e){
    const stateType = e.currentTarget.className;
    const stateValue = e.currentTarget.value;
    this.setState({ [stateType]: stateValue });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user).then((currentUser) => {
      this.props.router.push("/");
    });
  }

  componentWillReceiveProps(){
    this.setState({ username: "", password: "" });
  }

  render(){
    var linkTo = "/signup";
    var linkName = "signup";
    if (this.props.formType === 'signup'){
      linkTo = "/login";
      linkName = "login";
    }

    return (
      <div>
        <div>{this.props.formType}</div>

        <form onSubmit={this.handleSubmit} >


          <label>UserName
            <input type="text"
                className = "username"
                value={this.state.username}
                onChange = {this.updateForm}>
            </input>
          </label>

          <label>Password
            <input type="text"
                className = "password"
                value={this.state.password}
                onChange = {this.updateForm}>
            </input>
          </label>

          <input type="submit" value="Submit" />
        </form>

        Or <Link to={linkTo}>{linkName}</Link> Instead

      </div>
    );
  }

}



export default SessionForm;
