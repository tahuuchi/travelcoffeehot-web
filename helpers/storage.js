 import { reverse as _reverse }  from 'lodash';
const storage = {
  set: (key, data, pushItem =  false) => {
    if (pushItem) {
      const storageData =  window.localStorage.getItem(key) || [];
      storageData.push(data);
      window.localStorage.setItem(key, storageData);
    } else {
      window.localStorage.setItem(key, data);
    }
  },
  get: (key) => {
    return window.localStorage.getItem(key) || false;
  },
}
export default storage;