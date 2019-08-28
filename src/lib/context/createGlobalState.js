import React, { createContext, useContext, useState } from 'react';

function createGlobalState({ name, initialValue, customSetState }) {
  const NewGlobalContext = createContext();

  return {
    [`use${name}`]() {
      const context = useContext(NewGlobalContext);

      if (!context) {
        throw new Error(`use${name} must be used within a ${name}Provider`);
      }
      return context;
    },
    [`${name}Provider`](props) {
      const [state, _setState] = useState(initialValue);
      const setState = customSetState
        ? (newValue, options) => {
            _setState(state => customSetState(state, newValue, options));
          }
        : _setState;

      const value = React.useMemo(
        () => ({
          [`${name.toLowerCase()}`]: state,
          [`set${name}`]: setState,
        }),
        [state, setState]
      );
      return <NewGlobalContext.Provider value={value} {...props} />;
    },
  };
}

export default createGlobalState;
