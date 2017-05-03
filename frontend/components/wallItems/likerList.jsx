import React from 'react';
import {Link} from 'react-router';

const LikerList = ({ likers }) => {
  return(
    <ul className="likers-details">
      {
        likers.map((liker, idx) =>
          <li className="liker" key={idx}>
            <Link className="liker-name"
                  to={`/home/${liker.username}`}
            ><div className="liker-firstname">{liker.firstname}</div><div>{liker.lastname}</div>
            </Link>
          </li>
        )
      }
    </ul>
  )
}

export default LikerList;
