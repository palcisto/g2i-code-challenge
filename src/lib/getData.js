const API_URL = 'https://opentdb.com/api.php';

async function getData({ count, difficulty, type }) {
  try {
    const params = `?amount=${count}&difficulty=${difficulty}&type=${type}`;
    const response = await fetch(`${API_URL}${params}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export default getData;
