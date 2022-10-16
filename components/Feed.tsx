import Post from "./Post";

export default function Feed({ props }) {
  return (
    <div>
      <hr />
      <main>
        {props.feed.length == 0 ? (
          <p>(Nothing to see here) ʕ•ᴥ•ʔ</p>
        ) : (
          props.feed.map((post, index) => (
            <div key={post.id} className="my-2 border-b-2 border-zinc-900">
              <p className="m-0">
                #{props.feed.length - index} |{" "}
                {new Date(post.date).toLocaleDateString()}
              </p>
              <Post post={post} />
            </div>
          ))
        )}
      </main>
    </div>
  );
}
