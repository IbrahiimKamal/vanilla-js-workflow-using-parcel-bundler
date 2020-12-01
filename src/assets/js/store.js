let store = [];

const setupStore = (users) => {
  store = users.map((user) => {
    const { userId, id, title, body } = user;

    return { userId, id, title, body };
  });
};

export { store, setupStore };
