import React, { Component } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";

export class News extends Component {
  articles = [
       
  ];
  constructor() {
    super(); //RUN CONSTRUCTOR WITH SUPER CLASS
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1
    };
  }

async componentDidMount(){
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc06b18cf8844622aed6ed8fac75e13c&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading: true})
  let data = await fetch(url);
  let parseData = await data.json(url);
  this.setState({articles: parseData.articles,
     totalResults: parseData.totalResults,
     loading: false})
}

handlePrevClick = async  ()=>{
     if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

     }
     else
     {
          let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc06b18cf8844622aed6ed8fac75e13c&page=${this.state.page - 1 }&pageSize=${this.props.pageSize}`;
     let data = await fetch(url);
     let parseData = await data.json(url);
     this.setState({loading: true})
     this.setState({
          page: this.state.page - 1,
          articles: parseData.articles,
          loading: false
     })
}
}
handleNextClick = async  ()=>{
     if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)))
     {let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc06b18cf8844622aed6ed8fac75e13c&page=${this.state.page +1 }&pageSize=${this.props.pageSize}`;
     this.setState({loading:true});
     let data = await fetch(url);
     let parseData = await data.json(url);
     this.setState({
          page: this.state.page + 1,
          articles: parseData.articles,
          loading: false
     })
    }
}

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {this.state.loading==false && this.state.articles.map((element) => {
            
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
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)}>Next &rarr;</button>

        </div>
      </div>
    );
  }
}

export default News;
