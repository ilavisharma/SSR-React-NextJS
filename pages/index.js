import Layout from '../components/Layout';
import fetchData from '../Functions/FetchData';
import Users from '../components/Users';
import Posts from '../components/Posts';
import Albums from '../components/Albums';

class Index extends React.Component {
  state = { data: 'users' };

  onSelectChange = e => {
    this.setState({ data: e.target.value });
  };

  renderContent = () => {
    const { content } = this.props;
    if (this.state.data === 'posts') return <Posts />;
    if (this.state.data === 'albums') return <Albums />;
    if (this.state.data === 'users') return <Users users={content} />;
  };

  render() {
    return (
      <Layout>
        <select
          onChange={e => this.onSelectChange(e)}
          className="custom-select my-4"
        >
          <option value="users">Users</option>
          <option value="posts">Posts</option>
          <option value="albums">Albums</option>
        </select>

        {this.renderContent()}
      </Layout>
    );
  }
}

Index.getInitialProps = async function() {
  const data = await fetchData('users');
  return {
    content: data
  };
};

export default Index;
