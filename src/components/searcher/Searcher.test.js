import { render } from '@testing-library/react';
import React from 'react';
import Searcher from './Searcher';

describe('Searcher', () => {
  it('must exist', () => {
    const component = render(<Searcher />);
  });
});
