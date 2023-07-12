import SearchSvg from "../svg/SearchSvg";
import logo from "../../../public/logo-commentsLive.png"

const Header = ({ handleSubmit, search, setSearch }) => {
  return (
    <header className="header-page">
      <img
        style={{ width: 40, height: 40 }}
        src={logo}
        alt="logo comments live"
      />
      <div style={{ position: 'relative' }}>
        <form onSubmit={handleSubmit}>
          <input
            className="search-users"
            type="text"
            name="searchusers"
            placeholder="Search Users"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button>
            <SearchSvg />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
