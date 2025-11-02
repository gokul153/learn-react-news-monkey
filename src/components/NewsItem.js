import React, { Component } from 'react';

export class NewsItem extends Component {
 
  render() {
    let { title, description ,imageurl,newsUrl} = this.props;
    return (
      <div>
        <div className="my-3" style={{ width: '18rem' }}> {/* Corrected style attribute syntax */}
          <img src={imageurl} className="card-img-top" alt="..." /> {/* Used 'className' instead of 'class' and made tag self-closing */}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href= {newsUrl} target = "_blank" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;