import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="left-content">
        <h2>Learn to code by watching others</h2>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="right-content">
        <p className="information">
          Try it free 7 days then $20/mo. thereafter
        </p>
        <form className="trial-form">
          <input placeholder="First Name"></input>
          <input placeholder="Last Name"></input>
          <input placeholder="Email Address"></input>
          <input placeholder="Password"></input>
          <button type="submit" className="btn-claim">
            Claim your free trial
          </button>
          <p className="terms-and-services">
            By clicking the button, you are agreeing to our{" "}
            <strong>Terms and Services</strong>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
