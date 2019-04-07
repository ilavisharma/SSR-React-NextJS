import fetchData from '../Functions/FetchData';

class Posts extends React.Component {
  state = { posts: null };

  async componentDidMount() {
    const data = await fetchData('posts');
    this.setState({ posts: data });
  }

  render() {
    if (this.state.posts === null) {
      console.log('in the IF part');

      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      console.log('in the ELSE part');
      return (
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
      );
    }
  }
}

export default Posts;
