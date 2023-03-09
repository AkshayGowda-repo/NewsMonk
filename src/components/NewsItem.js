import React from "react";

export default function NewsItem(props) {
  let {title, description, imageUrl, newsUrl, author, date, source} = props;          //destructuring

    return (
      <div className="my-3">
        <div className="card" >
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right:'0'}}>
        <span className="badge rounded-pill bg-secondary">
    {source}
  </span>
  </div>
          <img src={!imageUrl?"https://images.livemint.com/img/2022/12/14/600x338/ANI-20220406134-0_1655014392621_1670983597566_1670983597566.jpg": imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}
  
