function createRestApi({ rootUrl }) {
  return {
    find({ skip, limit }) {
      const url = `${rootUrl}/?$limit=${limit}&$skip=${skip}`;
      return fetch(url).then(r => r.json());
    },
    get(id) {
      const url = `${rootUrl}/${id}`;
      return fetch(url)
        .then(r => r.json())
        .then(data => ({ data }));
    },
    create(todo) {
      const url = `${rootUrl}`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
      };
      return fetch(url, options).then(r => r.json());
    },
    update(id, todo) {
      const url = `${rootUrl}/${id}`;
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
      };
      return fetch(url, options).then(r => r.json());
    },
    remove(id) {
      const url = `${rootUrl}/${id}`;
      const options = {
        method: "DELETE"
      };
      return fetch(url, options).then(r => r.json());
    }
  };
}

export default createRestApi;
