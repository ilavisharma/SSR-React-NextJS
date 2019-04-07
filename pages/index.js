import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

class Index extends React.Component {
  state = { data: 'users' };
  render() {
    const { users } = this.props;
    return (
      <Layout>
        <h1 className="display-4 text-center">Json Placeholder Data</h1>
        <p>These are the {users.length} users available</p>
        <div className="list-group">
          {users.map(user => (
            <a
              key={user.id}
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{user.name}</h5>
                <small>{user.username}</small>
              </div>
              <p className="mb-">
                {user.address.suite},{user.address.street},{user.address.city}
              </p>
              <small>{user.phone}</small>
            </a>
          ))}
        </div>
      </Layout>
    );
  }
}

Index.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  //   console.log(data);
  return {
    users: data
  };
};

export default Index;
