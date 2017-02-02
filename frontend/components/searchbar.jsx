import React from 'react';
import {Link, withRouter} from 'react-router';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.list = this.list.bind(this);
  }

  list(){
    let that=this;
    let filteredUsers;
    if (this.props.letters === ""){
      filteredUsers = [];
    } else {
      let namesArray = this.props.letters.split(" ");
      let firstname;
      let lastname;
      if(namesArray.length === 1){
        firstname = namesArray[0];
        lastname = "";
      } else {
        firstname = namesArray[0];
        lastname = namesArray[1];
      }
      filteredUsers = that.props.users.filter((user =>
        firstname === user.firstname.toLowerCase().substring(0, firstname.length) &&
        lastname === user.lastname.toLowerCase().substring(0, lastname.length)
      ));
    }
    return filteredUsers;
  }

  render(){
    let filteredUsers = this.list();

    let listNames;

    if(filteredUsers.length > 0){
      listNames = filteredUsers.map((user, idx) =>
        <li key={idx}>
          <Link className="searchProfile" to={`/home/${user.username}`}>
            <div className="searchProfile-pic">
              <img src={user.photo_url}/>
            </div>
            <div className="searchProfile-firstname">{user.firstname}</div>
            <div>{user.lastname}</div>
          </Link>
        </li>
      );
    }
    else if(filteredUsers.length === 0 && this.props.letters.length > 0){
      listNames = (
        <div className="notFound">No users found</div>
      );
    }


    return(
      <div className="searchBar">
        <input type="text"
               className="searchInput"
               value={this.props.letters}
               onChange={this.props.add}
               placeholder = "Search Facetome"
        ></input>

        <ul className="searchResults">
            {listNames}
        </ul>
      </div>
    );
  }


}

export default SearchBar;
