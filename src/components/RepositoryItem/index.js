// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = repoDetails
  return (
    <li className="repo-item">
      <img src={avatarUrl} className="repo-image" alt={name} />
      <h1 className="repo-name">{name}</h1>
      <div className="icon-holder">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icon-img"
        />
        <p className="repo-para">{starsCount} stars</p>
      </div>
      <div className="icon-holder">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="icon-img"
        />
        <p className="repo-para">{forksCount} forks</p>
      </div>
      <div className="icon-holder">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="icon-img"
        />
        <p className="repo-para">{issuesCount} open isssues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
