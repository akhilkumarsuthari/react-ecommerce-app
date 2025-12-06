// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {eachObject} = props
  const {imageUrl, title, brand, price, rating} = eachObject
  return (
    <li className="list-item">
      <img
        src={imageUrl}
        alt={`similar product ${title}`}
        className="similar-image"
      />
      <h1 className="similar-heading"> {title} </h1>
      <p className="similar-para"> by {brand} </p>
      <div className="similar-price-and-rating-conatiner">
        <p> Rs {price} /- </p>
        <button type="button" className="review-button">
          {rating}
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            className="star-img"
            alt="star"
          />
        </button>
      </div>
    </li>
  )
}

export default SimilarProductItem
