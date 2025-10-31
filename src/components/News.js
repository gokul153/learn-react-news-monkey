import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        {/* Bootstrap Row */}
        <div className="row"> 
          {/* Bootstrap Column (col-md-4 means it takes 4 columns on medium screens and up) */}
          <div className="col-md-4"> 
            <NewsItem title="checktitle1" description="describtion1" />
          </div>
          <div className="col-md-4">
            <NewsItem title="checktitle1" description="describtion1" />
          </div>
          <div className="col-md-4">
            <NewsItem title="checktitle1" description="describtion1" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;