import React from 'react';
import { render } from '@testing-library/react';

import ClassNav from './class-nav';

describe(' ClassNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClassNav />);
    expect(baseElement).toBeTruthy();
  });
});
