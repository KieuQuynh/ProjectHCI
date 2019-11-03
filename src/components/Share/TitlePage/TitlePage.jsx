import './TitlePage.scss'

const TitlePage = props => {
  return (
    <div
      className="title_page"
      style={{
        background: 'url(https://gioia.elated-themes.com/wp-content/uploads/2018/11/blog-standar-title-img.jpg)'
      }}
    >
      <div className="container">
        <h5>{props.title}</h5>
      </div>
    </div>
  )
}

export default TitlePage
