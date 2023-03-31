export default function Post(){
    return (
        <div className="post">
        <div className="postImage">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1249135392.jpg?w=850&h=492&crop=1"
          alt=""
        />
        </div>
        <div className="texts">
          <h2>TikTok CEO testifies before Congress</h2>
          <p className="info">
            <a href="" className="author">Mr. ahmed</a>
            <time> 2023-03-24 16:15</time>
          </p>
          <p className="summary">
            the Biden administration escalates its threats against TikTok, the
            company’s chief executive made his first appearance before Congress
            on Thursday. Given the U.S. government’s aggressive recent posture,
            TikTok CEO Shou Zi Chew was destined for a harsh turn under the
            glare of the government’s big, bright lights — and that’s very much
            what played out across the hearing’s sprawling five hours.
          </p>
        </div>
      </div>
    );
}