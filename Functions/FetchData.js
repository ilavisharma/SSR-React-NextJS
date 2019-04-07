import fetch from 'isomorphic-unfetch';

const fetchData = async type => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
  const data = await res.json();
  return data;
};

export default fetchData;
