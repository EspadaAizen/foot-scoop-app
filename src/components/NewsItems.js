
import React, { Component } from "react";
import {Link} from "react-router-dom";
//import subImage from '../images/subImage.eps';
import subImage2 from '../images/subImage2.jpg';
export class NewsItems extends Component {
  render() {
    let {title, description, imageUrl, newsURL, author, date} = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <img src={!imageUrl ? subImage2 : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <Link to={newsURL} target="-blank" className="btn btn-outline-primary">
              Read More   
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
