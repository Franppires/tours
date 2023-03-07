import { useState } from "react";

export default function Tour({tour}) {
  const { id, image, info, name, price } = tour

  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">$ {price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0,200)}...` }
        </p>
        <button onClick={() => {setReadMore(!readMore)}}>
          {readMore ? 'show less' : 'read more' }
        </button>
        <button className="delete-btn">
          Delete
        </button>
      </footer>
    </article>

  )
}
