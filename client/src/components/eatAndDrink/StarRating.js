import React from 'react'
import zero from '../../images/yelpStars/zero.png'
import one from '../../images/yelpStars/one.png'
import oneHalf from '../../images/yelpStars/oneHalf.png'
import two from '../../images/yelpStars/two.png'
import twoHalf from '../../images/yelpStars/twoHalf.png'
import three from '../../images/yelpStars/three.png'
import threeHalf from '../../images/yelpStars/threeHalf.png'
import four from '../../images/yelpStars/four.png'
import fourHalf from '../../images/yelpStars/fourHalf.png'
import five from '../../images/yelpStars/five.png'

const StarRatingComponent = props => {
  let starRating;
  switch (props.rating) {
    case 0:
      starRating = <img alt="rating" src={zero} />
      break;
    case 1:
      starRating = <img alt="rating" src={one} />
      break;
    case 1.5:
      starRating = <img alt="rating" src={oneHalf} />
      break;
    case 2:
      starRating = <img alt="rating" src={two} />
      break;
    case 2.5:
      starRating = <img alt="rating" src={twoHalf} />
      break;
    case 3:
      starRating = <img alt="rating" src={three} />
      break;
    case 3.5:
      starRating = <img alt="rating" src={threeHalf} />
      break;
    case 4:
      starRating = <img alt="rating" src={four} />
      break;
    case 4.5:
      starRating = <img alt="rating" src={fourHalf} />
      break;
    case 5:
      starRating = <img alt="rating" src={five} />
      break;
    default:
      break;
  }
  
  return (
    <div className="mb-3">
      <p>{starRating}</p>
    </div>
  )
}

export default StarRatingComponent