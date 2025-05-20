import "./App.css";
import "./Heart.css";
import HeartAnimation from "./Heart";
import { useEffect, useRef, useState } from "react";

function App() {
  const musicRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const music = musicRef.current;
    if (isPlaying) {
      music.pause();
    } else {
      const playPromise = music.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="container mb-4 py-4">
        <div className="row justify-content-center">
          <HeartAnimation />

          <div className="heart-side left"></div>
          <div className="heart-side right"></div>
          <div className="card p-4 text-center">
            <h1 className="mb-2">Happy Marriage Anniversary</h1>
            <h2 className="mb-4">મમ્મી અને પપ્પાને, પ્રેમથી 💖</h2>
            <p class="lead mb-4">
              મમ્મી અને પપ્પા,
              <br />
              તમારા લગ્નજીવનની વર્ષગાંઠની ખૂબ ખૂબ શુભકામનાઓ.
              <br />
              તમે બંનેએ અમને બંને ભાઈઓને જીવનમાં જે પ્રેમ અને સમર્થન આપ્યું છે,
              તેના માટે અમે તમારો ખૂબ ખૂબ આભાર માનીએ છીએ.
              <br />
              તમારો પ્રેમ અને સાથ હંમેશા અમને પ્રેરિત કરે છે.
              <br />
              અમે ઇચ્છીએ છીએ કે તમે હંમેશા એકબીજાને પ્રેમ કરતા રહો, અને તમારા
              સંબંધો હંમેશા મજબૂત રહે.
              <br />
              તમે હંમેશા એકબીજા માટે એક સારા સાથી રહો.
              <br />
              તમારા બંનેની ખુશીઓ અને સુખ અમારા જીવનમાં ખુશીઓ લાવે.
              <br />
              મમ્મી અને પપ્પા તમને બંનેને અમે બંને ભાઈઓ દિલથી ખૂબ શુભેચ્છા
              પાઠવીએ છીએ.
              <br />
              અમે આશા રાખીએ છીએ કે તમે બંને હંમેશા ખુશ અને સ્વસ્થ રહો અને સદાય
              તમારા આર્શીવાદ અમારી સાથે રહે.
            </p>
            {/* Music */}
            <audio id="bg-music" loop ref={musicRef}>
              <source src="/Aap Dono Salamat Rahe.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <button
              id="musicToggle"
              className="btn btn-outline-danger mb-2 mt--3"
              onClick={toggleMusic}
            >
              {isPlaying ? "Pause Music" : "Play Music"}
            </button>

            {/* Carousel */}
            <div
              id="anniversaryCarousel"
              className="carousel slide mb-4"
              data-bs-ride="carousel"
              data-bs-interval="2500"
            >
              <div className="carousel-inner rounded-3">
                {[
                  "md7.jpg",
                  "md1.jpg",
                  "md4.jpg",
                  "md5.jpg",
                  "md3.jpg",
                  "md6.jpg",
                ].map((src, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <img
                      src={`/${src}`}
                      className="d-block w-100 slideshow"
                      alt={`Happy couple ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#anniversaryCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#anniversaryCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            {/* Blog image */}
            <img
              src="/mds2.jpg"
              alt="A lovely moment"
              className="blog-image mb-4"
              title="A lovely moment"
            />

            <footer className="mb-3">
              આ ખાસ દિવસ ને વધુ ખાસ બનાવા માટે અમારા તરફથી સપ્રેમ શુભકામનાઓ 💖
            </footer>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
