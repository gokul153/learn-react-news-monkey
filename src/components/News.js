import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
  
    async componentDidMount(){
        console.log("cdm")
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1fbd796fddc743a0bbd0c9c7498a6d98&pageSize=10&page=0&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
   
    }
   constructor(){
    super();
    console.log("new trigered")
    this.state = {
      articles : [],
      loading : false,
      page : 1
    }
  }
  handlePrevClick = async ()=>{
    console.log("previous")
         let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1fbd796fddc743a0bbd0c9c7498a6d98&pageSize=10&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles,
        page : this.state.page + 1

        })
  }
   handleNextClick = async()=>{
    console.log("next");
    if(Math.ceil(this.state.totalResults/20) > this.state.page+1    ){

    }else{
    
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1fbd796fddc743a0bbd0c9c7498a6d98&pageSize=10&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles,
        page : this.state.page + 1

        })
    }
        
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        {/* Bootstrap Row */}
        <div className="row"> 
          {/* Bootstrap Column (col-md-4 means it takes 4 columns on medium screens and up) */}
          {this.state.articles.map((element)=>{
            console.log(element)
            return  <div className="col-md-4"> 
            <NewsItem  key = {element.url} title={(element.title || "").slice(0, 45)} description={(element.description || "").slice(0, 88)} imageurl = {element.urlToImage}  newsUrl = {element.url}/>
          </div>
          })}
         
         
        </div>
        <div className="d-flex justify-content-between my-4">
          <button disabled = {this.state.page <= 1} className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled = {this.state.page >= 5} className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;