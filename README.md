# DOrSU Digital Campus Pass

A mobile application built with React Native and Expo for **ITMSD 1 — Laboratory Exercise 03: React Native Fundamentals**.

## Setup & Installation

```bash
npm install
npx expo start
```

## Project Structure

```
src/
├── app/
│   ├── _layout.tsx        # Root layout
│   └── index.tsx          # Main screen with state management
├── components/
│   ├── Header.tsx         # Institutional banner
│   ├── StatusBadge.tsx    # Dynamic active/suspended badge
│   ├── StudentCard.tsx    # Student ID card with props
│   └── ScanCounter.tsx    # Gate scan counter with useState
└── types/
    └── student.ts         # TypeScript interfaces
```

## Features

- Student ID card displaying profile information via props
- Dynamic campus gate scan counter using `useState`
- Pass suspension and reactivation toggle
- Responsive Flexbox layout with `StyleSheet.create()`

## Tech Stack

- Expo SDK 57
- React 19
- React Native 0.86
- TypeScript
