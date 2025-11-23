# Jest Testing Configuration Guide

This guide provides step-by-step instructions for configuring Jest testing in a TypeScript React project.

## Prerequisites

Ensure you have the following installed:
- Node.js (>= 10)
- npm or yarn package manager

## Step 1: Install Required Dependencies

Install Jest and related testing dependencies:

```bash
npm install --save-dev jest ts-jest @types/jest jest-environment-jsdom
```

### Explanation:
- **jest**: Core testing framework
- **ts-jest**: TypeScript preprocessor for Jest
- **@types/jest**: TypeScript type definitions for Jest
- **jest-environment-jsdom**: DOM environment for testing React components

## Step 2: Install Testing Library for React

Install React Testing Library for component testing:

```bash
npm install --save-dev @testing-library/react
```

### Additional helpful libraries (optional):
```bash
npm install --save-dev @testing-library/user-event @testing-library/jest-dom
```

## Step 3: Install CSS Module Mock

Install identity-obj-proxy to mock CSS imports in tests:

```bash
npm install --save-dev identity-obj-proxy
```

### Why this is needed:
Jest cannot process CSS/SCSS files natively. This package mocks CSS module imports so tests can run without errors.

## Step 4: Create Jest Configuration File

Create a `jest.config.cjs` file in your project root:

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
```

### Configuration breakdown:

- **preset: 'ts-jest'**: Uses ts-jest preset for TypeScript support
- **testEnvironment**: Sets up jsdom for DOM testing
- **moduleNameMapper**: Maps CSS and asset imports to mock objects
- **transform**: Configures how to transform TypeScript/TSX files
- **moduleFileExtensions**: File extensions Jest should recognize

## Step 5: Configure Babel (if needed)

Create or verify `babel.config.js`:

```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
```

### Install Babel dependencies:
```bash
npm install --save-dev @babel/preset-env @babel/preset-react babel-jest
```

## Step 6: Update package.json Scripts

Add test scripts to your `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

## Step 7: Create Your First Test

Create a test file (e.g., `test/components/ProductTitle.test.tsx`):

```tsx
import React from 'react';
import { render } from '@testing-library/react';
import { ProductTitle } from '../../src/components/ProductTitle';

describe('ProductTitle', () => {
  it('should render the component with custom title', () => {
    const { getByText } = render(<ProductTitle title="Custom Product" />);
    expect(getByText('Custom Product')).toBeInTheDocument();
  });
});
```

## Step 8: Run Tests

Execute your tests:

```bash
npm test
```

Or in watch mode:

```bash
npm run test:watch
```

## Common Issues and Solutions

### Issue 1: "Jest encountered an unexpected token"

**Cause**: Jest cannot parse TypeScript/JSX files.

**Solution**: Ensure ts-jest is installed and configured in `jest.config.js`:
```javascript
preset: 'ts-jest',
transform: {
  '^.+\\.tsx?$': 'ts-jest',
}
```

### Issue 2: "Multiple configuration files found"

**Cause**: Multiple Jest config files exist (e.g., `jest.config.js` and `jest.config.cjs`).

**Solution**: Keep only one configuration file. Remove duplicates.

### Issue 3: "Could not locate module [CSS file] mapped as identity-obj-proxy"

**Cause**: `identity-obj-proxy` package is not installed.

**Solution**:
```bash
npm install --save-dev identity-obj-proxy
```

### Issue 4: "ts-node is required for TypeScript configuration"

**Cause**: Using `jest.config.ts` without ts-node installed.

**Solution**: Either:
- Rename config to `jest.config.js`, or
- Install ts-node: `npm install --save-dev ts-node`

### Issue 5: TypeScript errors about unused variables

**Cause**: Strict TypeScript checking in test files.

**Solution**: Remove unused imports or configure TypeScript to be less strict for test files.

## Best Practices

1. **Organize tests**: Mirror your source structure in the test directory
   ```
   src/
     components/
       ProductTitle.tsx
   test/
     components/
       ProductTitle.test.tsx
   ```

2. **Use descriptive test names**: Make it clear what each test validates

3. **Follow AAA pattern**: Arrange, Act, Assert
   ```tsx
   it('should do something', () => {
     // Arrange: Set up test data
     const props = { title: 'Test' };
     
     // Act: Perform action
     const { getByText } = render(<Component {...props} />);
     
     // Assert: Verify result
     expect(getByText('Test')).toBeInTheDocument();
   });
   ```

4. **Clean up**: Use cleanup utilities when needed (React Testing Library does this automatically)

5. **Mock external dependencies**: Mock API calls, external modules, etc.

## Additional Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [ts-jest Documentation](https://kulshekhar.github.io/ts-jest/)

## Summary Checklist

- [ ] Install Jest, ts-jest, @types/jest, jest-environment-jsdom
- [ ] Install @testing-library/react
- [ ] Install identity-obj-proxy for CSS mocking
- [ ] Create jest.config.js with proper configuration
- [ ] Configure Babel (if using JSX transform)
- [ ] Add test scripts to package.json
- [ ] Verify no duplicate config files exist
- [ ] Write and run your first test
- [ ] Ensure all tests pass

---

**Note**: This configuration is specifically designed for TypeScript React projects using TSDX or similar setups.
