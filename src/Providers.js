import React from 'react';
import { TriviaSettingsProvider } from './lib/context/triviaSettings';

/**
 * The ProviderComposer component is a nice way of combining a collection of context providers
 * together in one place without cluttering the render function or return value of a component
 * that requires the providers.
 *
 * Credit: Scott Tolinski
 * https://gist.github.com/stolinski/2d9545e19dd67bda64143cb1aae04ac0
 */

export function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

export function ContextProviders({ children }) {
  return (
    <ProviderComposer contexts={[<TriviaSettingsProvider />]}>
      {children}
    </ProviderComposer>
  );
}
