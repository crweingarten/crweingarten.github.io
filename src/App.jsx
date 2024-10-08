import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


function App() {

  return (
    <>
    <div className="container">
      <div className="video">
    <iframe
      // width="700"
      // height="394"
      src={`https://www.youtube.com/embed/NKnWvWmx22I?si=PdNHd3tATvhQ-CGd`}
      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Fuzzzel Promo"
    />
  </div>
  <div>
    </div>
    </div>
    <div className="bottom-container">
    <div className="copy">fuzzzel is a bespoke iOS white noise app and the world&#39;s first artist-centered white noise record label.</div>
    <div className="copy"> although these sounds are intended to be utilitarian, we offer no preference on how you should experience them.</div>
    <div className="copy fuzzBlue"><a href="https://apps.apple.com/app/fuzzzel/id6596783978">get fuzzzel</a></div>
    <div className="copy fuzzBlue"><a href="https://docs.google.com/document/d/17j7ji4mhJHSFeZpM137fevPFvDdav8qoHiwjelQSn2Q/edit?usp=sharing" target="_blank">press release</a></div>
    <div className="copy fuzzBlue"><a href="mailto:christopher@fuzzzel.com">contact</a></div>
    <div className="copy fuzzBlue">
      <a href="https://x.com/fuzzzelnoise" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
      <a href="https://www.instagram.com/fuzzzelnoise/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
      </div>
    </div>
    </>
  )
}

export default App
