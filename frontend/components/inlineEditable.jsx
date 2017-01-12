
import React from 'react';

class InlineEditable extends React.Component {
  constructor(props){
    super(props);
    this.state = { editing: false,
                   [this.props.profileKey]: this.props.profileValue
                 }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  updateForm(e){
    e.preventDefault();
    let updatedValue = e.currentTarget.value;
    this.setState({ [this.props.profileKey]: updatedValue });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ editing: false });
    this.props.updateValue(this.props.profileKey, this.state[this.props.profileKey]);
  }

  render(){
    let profileValue = this.props.profileValue;
    if(profileValue==="null"){ profileValue=" " };
    let condition = true;
    if(this.props.currentUser && this.props.profile && (this.props.currentUser.id !== this.props.profile.id)){
      condition = false;
    }
    if (this.state.editing){
      return (
        <div className="profile-edit group">
          <div className="profile-keys">{this.props.profileKey}</div>
          <form className="profileform-double-edit group" onSubmit={ this.handleSubmit }>
            <input className="profileform-input-edit" placeholder={profileValue} type="text" onChange= {this.updateForm}/>
            <button className="profileform-button-edit" type="submit">Save Changes</button>
          </form>
        </div>

      );
    } else {
      return (
        <div className="profile-unedit group">
          <div className="profile-keys">{this.props.profileKey}</div>
          <section className="profileform-double-unedit group">
            <p className="profileform-input-unedit">{profileValue}</p>
            {condition && <button className="profileform-button-unedit" onClick={ ()=>this.setState({ editing: true})}>Edit</button>}
          </section>
        </div>
      );
    }
  }
}

export default InlineEditable;
