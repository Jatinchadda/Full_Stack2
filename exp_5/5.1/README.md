# Experiment 5.1 — Basic Lazy Loading

## About

This experiment demonstrates the fundamentals of lazy loading in React using React.lazy() and Suspense. It shows how to dynamically load a single component on-demand.

## Objective

To understand and implement basic code splitting and lazy loading for a single React component using React.lazy() and Suspense boundaries.



## Project Structure

```
5.1/
├── src/
│   ├── components/
│   │   └── dashboard.jsx      # Lazy-loaded dashboard component
│   ├── App.jsx                # Main component with Suspense
│   ├── App.css                # Component styling
│   ├── main.jsx               # React entry point
│   ├── index.css              # Global styles
│   └── assets/                # Static assets
├── public/                    # Public assets
├── package.json               # Dependencies
├── vite.config.js             # Vite build configuration
├── eslint.config.js           # ESLint configuration
└── index.html                 # HTML template
```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at the provided URL (usually http://localhost:5173)

## Features

- **Dynamic Component Loading**: Dashboard loads only when App renders
- **Loading Fallback**: Shows "Loading Dashboard" message while component loads
- **Code Splitting**: Creates separate chunk for dashboard component
- **Minimal Setup**: Simple example to understand fundamentals

## How It Works

1. App component renders with Suspense boundary
2. React.lazy() initiates dynamic import of Dashboard
3. Suspense shows fallback UI while loading
4. Once Dashboard loads, it replaces the fallback
5. Component is now available for interaction

## Technologies Used

- **React 19** - Latest React version
- **Vite** - Fast build tool with code splitting support
- **React.lazy()** - Dynamic component loading
- **Suspense** - Loading boundary component
- **ESLint** - Code linting

## Learning Outcomes

✅ Understanding React.lazy() for dynamic imports  
✅ Using Suspense for loading states  
✅ Basic code splitting mechanics  
✅ Component-level lazy loading  
✅ Fallback UI patterns  



## Key Takeaways

- **React.lazy()** enables dynamic component imports
- **Suspense** manages loading states elegantly
- Code splitting reduces initial bundle size
- Perfect for performance optimization
- Foundational for understanding advanced patterns


![alt text](<Screenshot 2026-02-19 100744.png>)

![alt text](image.png)