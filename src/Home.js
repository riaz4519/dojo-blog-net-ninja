const Home = () => {
  const handleClick = (e) => {
    console.log("Hello ninja",e);
  };

  const handleClickAgain = (name,r) => {
    console.log("Hello " + name,r.target);
  };
  return (
    <div className="home">
      <h2>Home page</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(r) => handleClickAgain("marios",r)}>Click me again</button>
    </div>
  );
};

export default Home;
