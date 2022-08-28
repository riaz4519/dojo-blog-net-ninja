import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFatch";

const Home = () => {

  const {data : Blogs,isPending,error} = useFetch("http://localhost:8000/blogs")


  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <BlogList blogs={Blogs} title="All Blogs" />
    </div>
  );
};

export default Home;
 