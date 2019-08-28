import { useEffect } from 'react';
import { node } from 'prop-types';
import { fetchQuestions } from './lib/getData';
import { useQuestions } from './lib/context/questions';
import { useTriviaSettings } from './lib/context/triviaSettings';

DataLoader.propTypes = {
  children: node.isRequired,
};

function DataLoader({ children }) {
  // State
  const { setQuestions } = useQuestions();
  const { triviaSettings } = useTriviaSettings();

  // Effects
  useEffect(() => {
    (async () => {
      const { count, difficulty, type } = triviaSettings;
      const data = await fetchQuestions({
        count,
        difficulty,
        type: type.value,
      });

      setQuestions(data.questions);
    })();
  }, [triviaSettings, setQuestions]);

  return children;
}

export default DataLoader;
