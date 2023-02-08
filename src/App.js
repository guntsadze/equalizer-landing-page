import "./App.css";

const i = {
  img1: "assets/bg-pattern-1.svg",
  img2: "assets/bg-pattern-2.svg",
  img3: "assets/illustration-app.png",
  svgApple: "assets/icon-apple.svg",
  svgAndroid: "assets/icon-android.svg",
  fb: "assets/icon-facebook.svg",
  insta: "assets/icon-instagram.svg",
  twitt: "assets/icon-twitter.svg",
};

function App() {
  return (
    <div className="home">
      <img className="header-img" src={i.img1} />
      <div className="header">
        <h2 className="equalizer">equalizer</h2>
        <h1>We make your music sound extraordinary.</h1>
        <p>
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </div>

      <section>
        <div className="assets-div">
          <div className="phone">
            <img className="img2" src={i.img2} />
            <img className="img3" src={i.img3} />
          </div>
          <div className="card-div">
            <h2>Premium EQ</h2>
            <p className="par">
              Get expert-level control with a robust equalizer, volume mixer,
              and spatial audio. Take your listening experience to a whole new
              level and access all our incredible features!
            </p>
            <div>
              <div>
                <span className="p1">$4 </span>
                <span className="p2"> / month</span>
              </div>
            </div>
            <div className="btns">
              <div className="ios">
                <img src={i.svgApple} />
                <h3>IOS Download</h3>
              </div>
              <div className="android">
                <img src={i.svgAndroid} />
                <h3>Android Download</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer">
        <h2 className="equalizer">equalizer</h2>
        <p>
          All rights reserved © Equalizer 2021 Have any problems? Contact us via
          social media or email us at equalizer@example.com
        </p>
        <div className="social-div">
          <img src={i.fb} />
          <img src={i.insta} />
          <img src={i.twitt} />
        </div>
      </div>
    </div>
  );
}

export default App;
