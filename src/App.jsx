import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchPosts } from "./features/postsSlice";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <main className="py-4">
      <div className="text-center text-3xl font-extrabold">POSTS</div>
      <div className="w-full flex justify-center">
        <a href="https://jsonplaceholder.typicode.com/posts" className="text-blue-500 my-4">
          Source: https://jsonplaceholder.typicode.com/posts
        </a>
      </div>
      <ul className="grid xl:grid-cols-3 md:grid-cols-2 max-w-[640px] lg:max-w-[1200px] xl:max-w-[1600px] mx-auto gap-4">
        {posts.length > 0 &&
          posts?.map((post) => {
            const { id, body, title } = post;
            console.log(body);
            return (
              <li key={id} className="list-none flex flex-col gap-2 shadow-lg p-3 rounded-lg">
                <h2 className="font-bold text-2xl uppercase">
                  {id}. {title}
                </h2>
                <p className="">{body}</p>
              </li>
            );
          })}
      </ul>
    </main>
  );
}

export default App;
