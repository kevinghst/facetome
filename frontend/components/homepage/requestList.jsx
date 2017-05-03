import React from 'react';
import {Link, withRouter} from 'react-router';

const RequestList = ({ requestIds, requests, acceptRequest }) => {
  return(
    <ul className="requests">
      {
        requestIds.map((id, idx) =>
          <li className="request-line" key={idx}>
            <div className="friend-thumb">
              <Link className="friend-thumb-img" to={`/home/${requests[id].requester_username}`}>
                <img src={requests[id].requester.photo_url}/>
              </Link>
              <Link to={`/home/${requests[id].requester_username}`}>{requests[id].requester_username}</Link>
            </div>

            <button className= {`${requests[id].requester_user_id} friend-thumb-accept`} onClick={acceptRequest}>Accept Request</button>
          </li>
        )
      }
    </ul>
  );
}

export default RequestList;
