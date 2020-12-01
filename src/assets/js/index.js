// import styles
import '../scss/styles.scss';

import fetchData from './fetchData.js';
import { setupStore, store } from './store.js';

const init = async () => {
  const users = await fetchData();

  setupStore(users);
  const firstUser = store.filter((user) => user.userId === 1);
  console.log(firstUser);

  console.log(`finally it's working!!`);
};

const name = (name) => console.log(`Hello, ${name}`);
name('Ibrahim Kamal');

window.addEventListener('DOMContentLoaded', init);
