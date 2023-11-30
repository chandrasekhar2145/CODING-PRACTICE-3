// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className, key} = bannerDetails
  console.log(key)
  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="btn">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
