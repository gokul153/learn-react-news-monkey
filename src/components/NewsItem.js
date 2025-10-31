import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}> {/* Corrected style attribute syntax */}
          <img src="https://www.investors.com/wp-content/uploads/2019/03/stock-Paypal-08-shutter.jpg" className="card-img-top" alt="..." /> {/* Used 'className' instead of 'class' and made tag self-closing */}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsDetail" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;