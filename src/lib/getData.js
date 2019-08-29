const API_URL = 'https://opentdb.com/api.php';

/**
 * fetch questions for the quiz based on the provided inputs
 *
 * @param {number} count - number of questions the quiz should load.
 * @param {string} difficulty - the difficulty of the trivia questions.
 * @param {string} type - which time of trivia questions, ie. True or False, or Multiple Choice.
 */
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
