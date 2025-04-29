import "./Poster.css";
import SearchIcon from '@mui/icons-material/Search';

export default function Poster(prop) {
  return (
    <>
      <div className="Poster">
        <div className="Poster_left">
          <img
            src="C:\Users\pshiv\OneDrive\Pictures\Screenshots\Screenshot 2025-04-29 230921.png"
            alt=""
          />
          <h1>{prop.title}</h1>
          <h3>{prop.info}</h3>
          <button>
            {prop.button}&nbsp;&nbsp;<i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div className="Poster_right">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/aalp-magsafe-header-202503?wid=2880&hei=960&fmt=png-alpha&.v=1739469284547"
            alt=""
          />
        </div>
      </div>

      <div className="after_poster">
        <h1>Find the accessories you're looking for.</h1>
        <input type="text"  placeholder="Search accessories"/>
      </div>
      {/* <div class="navbar-nav ms-auto"> 
          <form class="d-flex" role="search">
            <input class="form-control me-2 search-inp" type="search" placeholder="Search destinations"/ >
            <button class="btn search-btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i>Search</button>
          </form>
        </div> */}
    </>
  );
}
