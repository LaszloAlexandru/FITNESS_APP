import React from 'react';
import { render } from '@testing-library/react';

import FClass from './FClass';

describe(' FClass', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FClass />);
    expect(baseElement).toBeTruthy();
  });
});
