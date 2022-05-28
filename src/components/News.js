import React, { Component } from "react";
import NewItem from "./NewItem";

export class News extends Component {
  articles = [
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Andrea Cavallier",
      "title": "Elon Musk hopes Johnny Depp and Amber Heard can move on after highly publicized defamation trial",
      "description": "Elon Musk, who dated Amber Heard briefly in 2016, tweeted about the high-profile defamation trial involving Heard and Johnny Depp after six weeks of testimony that has captivated the world.",
      "url": "https://www.dailymail.co.uk/news/article-10863671/Elon-Musk-hopes-Johnny-Depp-Amber-Heard-highly-publicized-defamation-trial.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2022/05/28/18/58402717-0-image-a-11_1653758730620.jpg",
      "publishedAt": "2022-05-28T17:43:51Z",
      "content": "Elon Musk is finally weighing in on the high-profile defamation trial of his ex-girlfriend Amber Heard and Johnny Depp after six weeks of testimony that has captivated the world. \r\nThe Tesla CEO took… [+10320 chars]"
    },
    {
      "source": { "id": null, "name": "Ambcrypto.com" },
      "author": "Aaryamann Shrivastava",
      "title": "Dogecoin set to become ‘currency of space?’ Musk has answer but not…",
      "description": "Dogecoin and Elon Musk have had a long relationship. It seems Dogecoin’s price is directly proportional to Musk’s bullish tweet about the meme coin. Not to forget that the billionaire’s tweets of late have been failing to produce a strong impact on Dogecoin. …",
      "url": "https://ambcrypto.com/dogecoin-set-to-become-currency-of-space-musk-has-answer-but-not/",
      "urlToImage": "https://files.ambcrypto.com/wp-content/uploads/2022/05/28111052/dogecoin-g89743af95_1280-1000x600.jpg",
      "publishedAt": "2022-05-28T17:30:35Z",
      "content": "Dogecoin and Elon Musk have had a long relationship. It seems Dogecoin’s price is directly proportional to Musk’s bullish tweet about the meme coin. Not to forget that the billionaire’s tweets of lat… [+2205 chars]"
    },
    {
      "source": { "id": "fortune", "name": "Fortune" },
      "author": "Erin Prater",
      "title": "SpaceX will join Tesla in accepting dogecoin ‘soon,’ Musk says",
      "description": "Dogecoin, a popular crypto meme token, will soon be accepted by SpaceX, Elon Musk tweeted on Friday, causing the currency's price to spike as other cryptocurrencies fell.",
      "url": "https://fortune.com/2022/05/28/spacex-join-tesla-accepting-dogecoin-soon-musk-says/",
      "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/GettyImages-1240422158.jpg?resize=1200,600",
      "publishedAt": "2022-05-28T17:29:21Z",
      "content": "Skip to Content"
    },
    {
      "source": { "id": null, "name": "El Financiero" },
      "author": "Redacción",
      "title": "Esto dijo Elon Musk sobre el juicio entre su ex Amber Heard y Johnny Depp",
      "description": "Aunque al principio se habló de que el magnate testificaría, finalmente no ocurrió.",
      "url": "https://www.elfinanciero.com.mx/espectaculos/2022/05/28/esto-dijo-elon-musk-sobre-el-juicio-entre-su-ex-amber-heard-y-johnny-depp/",
      "urlToImage": "https://www.elfinanciero.com.mx/resizer/VD-PJMvisbkBFQzk6MNMYhfUGWc=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/JSZQYJBEMZB53HGC65IIEP23XE.jpg",
      "publishedAt": "2022-05-28T17:28:46Z",
      "content": "El empresario Elon Musk se había mantenido al margen del juicio que emprende su expareja, la actriz Amber Heard con Johnny Depp. Aunque se había asegurado que junto con James Franco testificaría, fin… [+2217 chars]"
    }
  ];
  constructor() {
    super(); //RUN CONSTRUCTOR WITH SUPER CLASS
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            
            return <div className="col-md-4" key={element.url}>
              <NewItem
                title={element.title.slice(0,45)}
                description={element.description.slice(0,88)}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default News;
