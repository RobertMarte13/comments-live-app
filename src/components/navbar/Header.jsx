import SearchSvg from "../svg/SearchSvg";

const Header = ({ handleSubmit, search, setSearch }) => {
  return (
    <header className="header-page">
      <img
        style={{ width: 40, height: 40 }}
        src="../../../public/logo-commentsLive.png"
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
