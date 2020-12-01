const URL = 'https://jsonplaceholder.typicode.com/posts';

const fetchData = async () => {
  try {
    const response = await fetch(URL);
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }

  return data;
};

export default fetchData;
