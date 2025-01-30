// simpleTest.tsx
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('basic render test', () => {
  render(<div>hello world</div>);
  expect(screen.getByText('hello world')).toBeInTheDocument();
});
