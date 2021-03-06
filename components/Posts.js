import fetchData from '../Functions/FetchData';

class Posts extends React.Component {
  state = { posts: null };

  async componentDidMount() {
    const data = await fetchData('posts');
    this.setState({ posts: data });
  }

  render() {
    if (this.state.posts === null) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      return (
        <div>
          <p>These are the {this.state.posts.length} posts available</p>

          <div className="list-group">
            {this.state.posts.map(post => (
              <a
                key={post.id}
                href="#"
                className="list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{post.title}</h5>
                </div>
              </a>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Posts;
