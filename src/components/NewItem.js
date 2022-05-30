import React, { Component } from "react";

export class NewItem extends Component {
  render() {
      let {title, description, imageUrl ,newsUrl} = this.props;
    return (
        <div className="my-3">
      <div className="card" style={{width: "18rem"}}>
        <img src={!imageUrl?"https://www.lifewire.com/thmb/C0Pj0cZTalD5rRrdmsKj33wSEwc=/650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ScreenShot2020-04-20at10.03.23AM-d55387c4422940be9a4f353182bd778c.jpg":imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
            {description}...
          </p>
          <a href={newsUrl} className="btn btn-sm btn-primary">
            Read More
          </a> 
        </div>
      </div>
      </div>
    );
  }
}

export default NewItem;
