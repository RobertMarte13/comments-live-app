const Header = ({ handleSubmit, search, setSearch }) => {
  return (
    <header className="header-page">
      <img
        style={{ width: 40, height: 40 }}
        src="../../../public/assets/logo/logo-commentsLive.png"
      />
      <form onSubmit={handleSubmit}>
        <input
          className="search-users"
          type="text"
          name="searchusers"
          placeholder="Search Users"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;