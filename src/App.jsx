import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


function App() {

//  const artists = [{artist: "clipping.",
//     bio: "clipping. makes conceptual, politically charged noise-rap inspired by 20th Century composition, musique concrète, power electronics, field recordings, genre cinema and vintage regional hip-hop styles. The Los Angeles trio have recorded four albums for Sub Pop Records, including 2016's Hugo-nominated sci-fi concept album <i>Splendor & Misery.</i>",
//     bc: "clppng"
// },
// {
//     artist: "Eluvium",
//     bio: "Eluvium, born Matthew Robert Cooper, is a multidisciplinary composer from the Pacific Northwest known for his cinematic, heart-gushing fusion of ambient soundscapes and contemporary classical music. Beyond multiple studio albums for Temporary Residence Ltd. and the score for the Sundance-award winning 2018 film <i>Night Comes On</i>, his music has been featured in TV shows like <i>Mr. Robot</i>.",
//     bc: "eluvium"
// },
// {
//     artist: "Mary Lattimore",
//     bio: "Mary Lattimore culls bittersweet indie-ambient from her 47-string concert grand harp, conjuring distant memories and forgotten emotion across more than a dozen albums for labels like Thrill Jockey, Ghostly International and Three Lobed Recordings. Based in Los Angeles, She can be heard on recordings by Jarvis Cocker, Thurston Moore, Soccer Mommy, Kurt Vile, Kesha and many more.",
//     bc: "marylattimoreharpist"
// },
// {
//     artist: "Kelly Moran",
//     bio: "Kelly Moran is a New York composer and pianist acclaimed for her combination of prepared piano, American minimalism, French impressionism and bleeding-edge electronic music. She has released three albums for avant-garde dance music standard-bearers Warp Records.",
//     bc: "kellymoran"
// },
// {
//     artist: "Owen Pallett",
//     bio: "Owen Pallett is a Canadian composer best known for their Polaris Prize-winning chamber-rock solo albums and stringwork alongside indie titans Arcade Fire, including the Oscar-nominated score for 2013's <i>Her</i>. One of the most in-demand string arrangers in contemporary music, Pallett's work can be heard on albums by Taylor Swift, Duran Duran, R.E.M., Grizzly Bear, Mountain Goats and many more.",
//     bc: "owenpallett"
// },
// {
//     artist: "Chris Watson",
//     bio: "Chris Watson is President of the Wildlife Sound Recording Society and the most acclaimed field recordist of his generation. His work on BBC documentaries like David Attenborough's <i>Life</i> series have won him a BAFTA award and world-wide acclaim. For Touch he edits his field recordings of wildlife and natural phenomena into a filmic narrative.",
//     bc: "chriswatsonreleases"
// }]

//   const artistDisplay = artists.map(artist => <div key={artist.artist} className="artist">{artist.artist}</div>)

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
    <div className="copy">fuzzzel is a bespoke ios white noise app and the world&#39;s first artist-centered white noise record label.</div>
    <div className="copy"> though these sounds are intended to be utilitarian, we offer no preference on how you should experience them.</div>
    <div className="copy fuzzBlue"><a href="https://apps.apple.com/ca/app/homestate-a-texas-kitchen/id925093380">get fuzzzel</a></div>
    <div className="copy fuzzBlue"><a href="https://docs.google.com/document/d/17j7ji4mhJHSFeZpM137fevPFvDdav8qoHiwjelQSn2Q/edit?usp=sharing" target="_blank">press release</a></div>
    <div className="copy fuzzBlue"><a href="mailto:fuzzzelnoise@gmail.com">contact</a></div>
    <div className="copy fuzzBlue">
      <a href="https://x.com/fuzzzelnoise"><FontAwesomeIcon icon={faTwitter}/></a>
      <a href="https://www.instagram.com/fuzzzelnoise/"><FontAwesomeIcon icon={faInstagram}/></a>
      </div>
    </div>
    </>
  )
}

export default App
