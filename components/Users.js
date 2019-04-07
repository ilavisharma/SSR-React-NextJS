const Users = ({ users }) => {
  return (
    <div>
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
    </div>
  );
};

export default Users;
