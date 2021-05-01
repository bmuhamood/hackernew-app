import React from "react";
import { Card } from "react-bootstrap";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ReactDOM from "react-dom";

function Timeline({ posts }) {
  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>HackerNews Top 10 Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={post.url}>{post.title}</a>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Timeline() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    async function getTopStories() {
      const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          throw new Error("Response Error:" + response.text);
        }
        const json = await response.json();
        const promises = json
          .slice(0, 10)
          .map(id =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
              response => response.json()
            )
          );
        const result = await Promise.all(promises);
        setPosts(result);
      } catch (err) {
        console.error(err);
      }
    }
    getTopStories();
  }, []);

    return (
      <div className="mt-3 ml-2 mr-2 text-left">
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title><Timeline posts={posts} /></Card.Title>
            <Card.Text>hullo this is test text</Card.Text>
            <span className="text-muted"><AccessTimeIcon />1 min ago | 50 comments</span>
          </Card.Body>
        </Card>
      </div>
    );
}

export default Timeline
