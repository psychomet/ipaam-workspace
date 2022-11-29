import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useLocale from './use-locale';

describe('useLocale', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useLocale());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
