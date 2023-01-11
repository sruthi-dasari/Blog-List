import './index.css'

const BlogList = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="blog-item-container">
      <div className="blog-title-date-container">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
      <hr className="seperator" />
    </li>
  )
}

export default BlogList
