const AboutItem = props => {
  return (
    <div className="about_item">
      <div className="img">
        <img src={props.about.img}></img>
      </div>
      <div className="name">
        <h5>{props.about.name}</h5>
      </div>
      <div className="des">
        <span>{props.about.des}</span>
      </div>
      <div className="share">
        <span className="icon">
          <i className="fab fa-facebook-f"></i>
        </span>
        <span className="icon">
          <i className="fab fa-instagram"></i>
        </span>
        <span className="icon">
          <i className="fab fa-twitter"></i>
        </span>
      </div>
    </div>
  )
}

export default AboutItem
