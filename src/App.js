import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MuInput";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "aaaa", body: "xxxxx" },
    { id: 3, title: "xxxx", body: "aaaaa" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка по"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>

      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Посты про JS" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;
