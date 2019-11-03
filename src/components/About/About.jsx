import './About.scss'
import AboutItem from './AboutItem/AboutItem'

const AboutMe = [
  {
    img: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/p10-team-img-1.jpg',
    name: 'SHARON BURKE',
    des:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque sed laudantium, totam rem aperiam, eaque ipsa ab'
  },
  {
    img: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/p10-team-img-2.jpg',
    name: 'ERIC NEWMAN',
    des:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque sed laudantium, totam rem aperiam, eaque ipsa ab'
  },
  {
    img: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/p10-team-img-3.jpg',
    name: 'ANGELA MARSHALL',
    des:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque sed laudantium, totam rem aperiam, eaque ipsa ab'
  },
  {
    img: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/p10-team-img-4.jpg',
    name: 'SHARON WEAVER',
    des:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque sed laudantium, totam rem aperiam, eaque ipsa ab'
  },
  {
    img: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/p10-team-img-5.jpg',
    name: 'MICHELLE ELLIOTT',
    des:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque sed laudantium, totam rem aperiam, eaque ipsa ab'
  },
  {
    img: 'https://gioia.elated-themes.com/wp-content/uploads/2018/11/p10-team-img-6.jpg',
    name: 'KEVIN HAYES',
    des:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque sed laudantium, totam rem aperiam, eaque ipsa ab'
  }
]

const About = () => {
  return (
    <div className="about container">
      <div className="row">
        {AboutMe.map(about => (
          <div className="col-4">
            <AboutItem about={about}></AboutItem>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
