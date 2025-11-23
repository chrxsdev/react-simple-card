import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = ReactDOM.createRoot(div);
    root.render(<div>Hello, world!</div>);
    root.unmount();
  });
});
