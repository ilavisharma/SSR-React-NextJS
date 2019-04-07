import fetchData from '../Functions/FetchData';

class Albums extends React.Component {
  state = { albums: null };

  async componentDidMount() {
    const data = await fetchData('albums');
    this.setState({ albums: data });
  }

  render() {
    if (this.state.albums === null) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      return (
        <div>
          <p>These are the {this.state.albums.length} albums available</p>

          <div className="list-group">
            {this.state.albums.map(album => (
              <a
                key={album.id}
                href="#"
                className="list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{album.title}</h5>
                </div>
              </a>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Albums;
