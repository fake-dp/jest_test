# jest_test

---

jest는 단위테스트 및 여러 기능을 테스트를 할 수 있는 프레임워크이다. 보편적으로 많이 사용하니 익혀두자!

### jest 설치

```
yarn add --dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

### jest config 설정

jest.config.js 파일 생성

```js
// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
```

---

### 기본 테스트 사용방법

1. 기본적으로 함수 및 기능 테스트를 할 수 있다.

```js
// index.js
export const add = (a, b) => {
  return a + b;
};
```

React에서는 `jest폴더` 에 `__test__ 폴더` 를 생성해 `index.test.ts` 파일을 만들어줘야 하지만, Next에서는 `__test__ 폴더` 를 `jest폴더` 에 넣지않고 pages 바깥에 위치해야한다 왜냐하면, Next에서 pages안의 폴더는 페이지가 되기 때문이다.

```js
// index.test.ts 파일 -> 테스트 코드

import { add } from "./sum";

it("2와 3이 주어졌을 때, 5가 나와야 한다.", () => {
const result = add(2,3)
  expect(result.toBe(5);
});
```

테스트 코드 작성후 `yarn test` 입력
