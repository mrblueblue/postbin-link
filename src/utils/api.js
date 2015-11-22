import fetch from 'isomorphic-fetch';

const request = (url) => fetch(url).then((res) => res.json())

export default {
  getBinId: () => request('http://localhost:9000/bin')
}
