const API_URL = 'https://opentdb.com/api.php';

export async function fetchQuestions({ count, difficulty, type }) {
  try {
    const params = `?amount=${count}&difficulty=${difficulty}&type=${type}`;
    const response = await fetch(`${API_URL}${params}`);
    const { response_code, results: questions } = await response.json();
    return { response: response_code, questions };
  } catch (error) {
    console.error(error);
  }
}
