import fetch from 'isomorphic-fetch';
import {host} from 'config';

const request = (url) => fetch(url).then((res) => res.json())

export default {
  getBinId: () => request(`${host}/bin`)
}
