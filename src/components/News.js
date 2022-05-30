import React, { Component } from "react";
import NewItem from "./NewItem";

export class News extends Component {
  articles = [
       
  ];
  constructor() {
    super(); //RUN CONSTRUCTOR WITH SUPER CLASS
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    };
  }

async componentDidMount(){
  let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc06b18cf8844622aed6ed8fac75e13c&page=1&pageSize=21";
  let data = await fetch(url);
  let parseData = await data.json(url);
  this.setState({articles: parseData.articles, totalResults: parseData.totalResults})
}

handlePrevClick = async  ()=>{
     if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

     }
     else
     {
          let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc06b18cf8844622aed6ed8fac75e13c&page=${this.state.page - 1 }&pageSize=21`;
     let data = await fetch(url);
     let parseData = await data.json(url);
     this.setState({
          page: this.state.page - 1,
          articles: parseData.articles
     })
}
}
handleNextClick = async  ()=>{
     

     let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc06b18cf8844622aed6ed8fac75e13c&page=${this.state.page +1 }&pageSize=21`;
     let data = await fetch(url);
     let parseData = await data.json(url);
     this.setState({
          page: this.state.page + 1,
          articles: parseData.articles
     })
}

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            
            return <div className="col-md-4" key={element.url}>
              <NewItem
                title={element.title?element.title.slice(0,45):""}
                description={element.description?element.description.slice(0,88):""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>;
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    );
  }
}

export default News;
