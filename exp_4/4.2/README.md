# Experiment 4.2 - State Management Using Redux (Counter Application)

## About

This experiment demonstrates centralized state management using Redux with Redux Toolkit. It shows how to manage application state predictably using actions, reducers, and the Redux store.

## Key Features

- **Redux Store**: Centralized state container using Redux Toolkit
- **Slices**: Counter slice with multiple actions and reducers
- **React-Redux Integration**: Using `useDispatch` and `useSelector` hooks
- **Advanced Operations**:
  - Increment/Decrement by custom amounts
  - Multiplier functionality
  - Operation history tracking
  - Statistics and analytics
- **State Predictability**: All state changes follow the Redux pattern

## Project Structure

```
4.2/
├── src/
│   ├── redux/
│   │   ├── store.js              # Redux store configuration
│   │   └── counterSlice.js       # Counter slice with reducers
│   ├── components/
│   │   ├── Counter.jsx            # Main counter display
│   │   ├── Statistics.jsx         # Statistics dashboard
│   │   ├── AdvancedControls.jsx   # Advanced operations
│   │   └── OperationHistory.jsx   # Action history log
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # Global styles
│   ├── main.jsx                   # Entry point with Redux Provider
│   └── index.css                  # Base styles
├── index.html                     # HTML template
├── package.json                   # Dependencies
└── vite.config.js                 # Vite configuration
```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the provided local URL (usually `http://localhost:5173`)

## Redux Architecture

### Store
The Redux store holds the entire application state in a single object tree.

### Actions
Pure functions that describe what happened:
- `increment()`
- `decrement()`
- `incrementByAmount(amount)`
- `decrementByAmount(amount)`
- `setMultiplier(value)`
- `reset()`
- `clearHistory()`

### Reducers
Pure functions that specify how the state changes in response to actions.

### Selectors
Functions that extract specific pieces of state from the store:
- `state.counter.value` - Current counter value
- `state.counter.multiplier` - Current multiplier
- `state.counter.operations` - History of operations
- `state.counter.totalOperations` - Total operations count

## Features Explained

### 1. Basic Counter
Increment and decrement with 1x multiplier. Changes are tracked in history.

### 2. Statistics Dashboard
Real-time statistics showing:
- Current value
- Multiplier setting
- Total operations
- Recent actions count

### 3. Advanced Controls
- Increment/Decrement by custom amounts
- Multiplier settings to scale all operations
- Dynamic updates reflecting in the store

### 4. Operation History
Complete audit trail of all operations:
- Action type
- Change magnitude
- Resulting value
- Timestamp

## Learning Outcomes

- Understanding Redux state management pattern
- Creating and using Redux Toolkit slices
- Using `useDispatch` for dispatching actions
- Using `useSelector` for accessing state
- Handling complex state with multiple pieces
- Implementing action history/audit trails
- Composing reducers for different state concerns

## Concepts Covered

✅ Redux store - Centralized state container  
✅ Actions - Events describing state changes  
✅ Reducers - Pure functions handling actions  
✅ Slices - Redux Toolkit simplified structure  
✅ Selectors - Extracting state efficiently  
✅ useDispatch hook - Dispatching actions  
✅ useSelector hook - Subscribing to state  
✅ Redux Provider - Making store available to app  
✅ Immutable updates - State immutability pattern  
✅ Time-travel debugging - History tracking  

## Advantages of Redux

1. **Predictability** - Single source of truth
2. **Debuggability** - Complete action history
3. **Testability** - Pure functions (reducers)
4. **Scalability** - Organized for large applications
5. **DevTools** - Excellent debugging tools available

## Redux Toolkit Benefits

- Reduced boilerplate code
- Built-in Redux DevTools integration
- Immer for immutable updates
- Slice API for simplified reducer creation
- Best practices built-in
