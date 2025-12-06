// Write your code here
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsDashSquare, BsPlusSquare} from 'react-icons/bs'
import {Component} from 'react'
import Header from '../Header'
import SimilarProductItem from '../SimilarProductItem'

import './index.css'

class ProductItemDetails extends Component {
  state = {
    specificProductDetails: {},
    similarProductsList: [],
    isLoading: false,
    isFailure: false,
    cartCount: 1,
  }

  componentDidMount() {
    this.getSpecificProductDetails()
  }

  getSpecificProductDetails = async () => {
    this.setState({
      isLoading: true,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = ` https://apis.ccbp.in/products/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const updatedObject = {
        availability: data.availability,
        description: data.description,
        brand: data.brand,
        id: data.id,
        imageUrl: data.image_url,
        price: data.price,
        rating: data.rating,
        style: data.style,
        title: data.title,
        totalReviews: data.total_reviews,
      }
      const updatedSimilarList = data.similar_products.map(eachObject => ({
        availability: eachObject.availability,
        brand: eachObject.brand,
        description: eachObject.description,
        id: eachObject.id,
        imageUrl: eachObject.image_url,
        price: eachObject.price,
        rating: eachObject.rating,
        style: eachObject.style,
        title: eachObject.title,
        totalReviews: eachObject.total_reviews,
      }))
      this.setState({
        specificProductDetails: updatedObject,
        isLoading: false,
        similarProductsList: updatedSimilarList,
      })
    } else {
      this.setState({
        isFailure: true,
        isLoading: false,
      })
    }
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </div>
  )

  increaseTheCount = () => {
    this.setState(prevState => ({
      cartCount: prevState.cartCount + 1,
    }))
  }

  decreaseTheCount = () => {
    const {cartCount} = this.state
    if (cartCount !== 1) {
      this.setState(prevState => ({
        cartCount: prevState.cartCount - 1,
      }))
    }
  }

  renderMyProduct = () => {
    const {specificProductDetails, cartCount, similarProductsList} = this.state
    const {
      availability,
      description,
      brand,
      imageUrl,
      price,
      rating,
      title,
      totalReviews,
    } = specificProductDetails
    return (
      <div className="background-container">
        <div className="specific-item-container">
          <img src={imageUrl} alt="product" className="specific-image" />
          <div className="text-container">
            <h1 className="specific-item-heading">{title}</h1>
            <p> Rs {price} </p>
            <div className="review-and-rating-container">
              <p className="review-button">
                {rating}
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  className="star-img"
                  alt="star"
                />
              </p>
              <p> {totalReviews} Reviews </p>
            </div>
            <p className="description"> {description} </p>
            <p> Available: {availability} </p>
            <p> Brand: {brand} </p>
            <hr />
            <div className="cart-buttons-container">
              <button
                type="button"
                onClick={this.decreaseTheCount}
                data-testid="minus"
              >
                <BsDashSquare />
              </button>
              <p> {cartCount} </p>
              <button
                type="button"
                onClick={this.increaseTheCount}
                data-testid="plus"
              >
                <BsPlusSquare />
              </button>
            </div>
            <button type="button">Add to Cart</button>
          </div>
        </div>
        <div className="similar-products-container">
          <h1 className="similar-products-heading">Similar Products</h1>
          <ul className="similar-product-list-container">
            {similarProductsList.map(eachObject => (
              <SimilarProductItem eachObject={eachObject} key={eachObject.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  routeToProductsSection = () => {
    const {history} = this.props
    history.replace('/products')
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure view"
      />
      <h1 className="failure-heading"> Product Not Found </h1>
      <button type="button" onClick={this.routeToProductsSection}>
        Continue Shopping
      </button>
    </div>
  )

  render() {
    const {isLoading, isFailure} = this.state
    return (
      <div className="product-item-details-container">
        <Header />
        {isFailure && this.renderFailureView()}
        {isLoading ? this.renderLoading() : this.renderMyProduct()}
      </div>
    )
  }
}

export default ProductItemDetails
