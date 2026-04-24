# Expo + NativeWind Setup Guide

A complete step-by-step guide to set up an Expo project with NativeWind (Tailwind CSS for React Native) from scratch.

---

## Prerequisites

- Node.js (v18+)
- npm or yarn
- Expo CLI

---

## Step 1 — Create a new Expo project

```bash
npx create-expo-app my-app
cd my-app
```

---

## Step 2 — Install required packages

```bash
npm install nativewind
npm install --save-dev tailwindcss babel-preset-expo
```

> Always add `babel-preset-expo` to devDependencies — without it, you will get a bundling error on startup.

---

## Step 3 — Initialize Tailwind config

```bash
npx tailwindcss init
```

Open the generated `tailwind.config.js` and update it:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## Step 4 — Create global.css

Create a `global.css` file in the root of your project:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Step 5 — Update babel.config.js

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

---

## Step 6 — Create metro.config.js

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
```

---

## Step 7 — Disable New Architecture in app.json

```json
{
  "expo": {
    "newArchEnabled": false
  }
}
```

> NativeWind 4.x is not yet fully compatible with the New Architecture.

---

## Step 8 — Import global.css in App.js

Import `global.css` at the **very top** of your file:

```js
import "./global.css";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-blue-500 items-center justify-center">
      <Text className="text-white text-2xl font-bold">
        NativeWind is working!
      </Text>
    </View>
  );
}
```

---

## Step 9 — Start the server with cache cleared

```bash
npx expo start --clear
```

Always use `--clear` when you run into unexpected bundler issues — it wipes the old cache and starts fresh.

---

## Common Errors

| Error | Fix |
|-------|-----|
| `Cannot find module 'babel-preset-expo'` | `npm install --save-dev babel-preset-expo` |
| NativeWind classNames have no effect | Make sure `global.css` is imported at the top of `App.js` |
| Metro bundler crash | Restart with `npx expo start --clear` |
| New Architecture errors | Set `"newArchEnabled": false` in `app.json` |

---

## Project Structure

```
my-app/
├── App.js
├── app.json
├── babel.config.js
├── global.css
├── metro.config.js
├── tailwind.config.js
└── package.json
```

---

## Useful Links

- [Expo Docs](https://docs.expo.dev)
- [NativeWind Docs](https://www.nativewind.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
