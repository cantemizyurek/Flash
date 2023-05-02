# Flash Library - Performance Comparison Tool

The Flash Library is a lightweight JavaScript tool for comparing the performance of different functions. It measures the execution time of each function and provides helpful analytics, such as average execution time, ranking, and raw execution times.

## Features

- Easy-to-use API for comparing functions
- Collects execution time analytics
- Calculates average execution time
- Ranks functions based on their performance
- Provides min and max execution time statistics

## Installation

To install the Flash Library, simply download the flash.js file and import it into your project:

```javascript
import Flash from './flash.js'
```

## Usage

1. Create a new instance of the Compare class:

```javascript
const comparison = new Flash.Compare()
```

2. Add functions to the comparison using the add method:

```javascript
comparison.add(functionA, 'Function A')
comparison.add(functionB, 'Function B')
```

3. Run the comparison and get the results:

```javascript
comparison.run().then(stats => console.log(stats))
```

4. (Optional) Remove a function from the comparison using the remove method:

```javascript
comparison.remove('Function A')
```

## Example

```javascript
import Flash from './flash.js'

const functionA = () => {
  // Some code here...
}

const functionB = () => {
  // Some code here...
}

const comparison = new Flash.Compare()

comparison.add(functionA, 'Function A')
comparison.add(functionB, 'Function B')

comparison.run().then(stats => console.log(stats))
```

## API

`runFunction(fn, amountOfRuns = 10)`

    fn : The function to run
    amountOfRuns: (Optional) The number of times to run the function (default: 10)

`Compare`
`add(fn, name)`

    fn: The function to add to the comparison
    name: A unique identifier for the function

`remove(name)`

    name: The unique identifier of the function to remove from the comparison

`run(amountOfRuns = 10)`

    amountOfRuns: (Optional) The number of times to run each function (default: 10)
