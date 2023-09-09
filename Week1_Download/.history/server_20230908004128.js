// Setup
/*const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;
// Or use some other port number that you like better

// Add support for incoming JSON entities
app.use(bodyParser.json());

// Array of strings
let colours = ['Red', 'Green', 'Blue', 'Yellow', 'Aqua', 'Fuschia'];

// Deliver the app's home page to browser clients
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Get all
let c = data.map((p) => p);
c.sort(function (a, b) {
  return a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName) || 0;
});

// or, using arrow function syntax...
c.sort((a, b) => {
  return a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName) || 0;
});
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
// assume the array "c" of people/person objects
// and we want to sort on credit score
c.sort((a, b) => a.creditScore - b.creditScore);
app.get('/api/items', (req, res) => {
  res.json({ message: 'fetch all items' });
});

// Get one
let o = data.find((p) => p.id == itemId);
// Extract the item identifier
let itemId = req.params.itemId;
// Make sure it's valid
if (itemId > colours.length) {
  res.status(404).send('Resource not found');
} else {
  res.json(colours[itemId]);
}
app.get('/api/items/:itemId', (req, res) => {
  res.json({ message: `get user with identifier: ${req.params.id}` });
});

// Add new
// Extract the incoming data from { "colourName": "Purple" }
let newItem = req.body.colourName;
// Add another item to the array
colours.push(newItem);
// Return the result; RFC 7231 tells us that it must return HTTP status 201
res.status(201).json({ message: `added ${newItem} as item identifier ${colours.length}` });
// This route expects a JSON object in the body, e.g. { "firstName": "Peter", "lastName": "McIntyre" }
app.post('/api/items', (req, res) => {
  // MUST return HTTP 201
  res.status(201).json({ message: `added a new item: ${req.body.firstName} ${req.body.lastName}` });
});

// Edit existing
// This route expects a JSON object in the body, e.g. { "id": 123, "firstName": "Peter", "lastName": "McIntyre" }
app.put('/api/items/:id', (req, res) => {
  res.json({
    message: `updated item with identifier: ${req.params.id} to ${req.body.firstName} ${req.body.lastName}`,
  });
});

// Delete item
app.delete('/api/items/:id', (req, res) => {
  res.status(200).json({ message: `deleted user with identifier: ${req.params.id}` });
});

// Resource not found (this should be at the end)
app.use((req, res) => {
  res.status(404).send('Resource not found');
});

// Tell the app to start listening for requests
app.listen(HTTP_PORT, () => {
  console.log('Ready to handle requests on port ' + HTTP_PORT);
});*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

// Add support for incoming JSON entities
app.use(bodyParser.json());

// Array of strings
let colours = ['Red', 'Green', 'Blue', 'Yellow', 'Aqua', 'Fuschia'];

// Assume you have a 'data' array defined somewhere for sorting
/*let data = [
  {
    lastName: 'Doe',
    firstName: 'John',
    creditScore: 750,
  },
  {
    lastName: 'Smith',
    firstName: 'Alice',
    creditScore: 800,
  },
  // ... other data objects
];*/



// Deliver the app's home page to browser clients
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Get all - Sorting data by lastName, firstName, and creditScore
data.sort((a, b) =>
  a.lastName.localeCompare(b.lastName) ||
  a.firstName.localeCompare(b.firstName) ||
  a.creditScore - b.creditScore
);

// Get all colours
app.get('/api/items', (req, res) => {
  res.json(colours);
});

// Get one colour by ID
app.get('/api/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  if (itemId >= 0 && itemId < colours.length) {
    res.json({ colour: colours[itemId] });
  } else {
    res.status(404).send('Resource not found');
  }
});

// Add new colour
app.post('/api/items', (req, res) => {
  const newItem = req.body.colourName;
  colours.push(newItem);
  res.status(201).json({ message: `Added ${newItem} as item identifier ${colours.length - 1}` });
});

// Edit existing colour by ID
app.put('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  if (itemId >= 0 && itemId < colours.length) {
    const updatedItem = req.body.colourName;
    colours[itemId] = updatedItem;
    res.json({ message: `Updated item with identifier: ${itemId} to ${updatedItem}` });
  } else {
    res.status(404).send('Resource not found');
  }
});

// Delete colour by ID
app.delete('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  if (itemId >= 0 && itemId < colours.length) {
    const deletedItem = colours.splice(itemId, 1)[0];
    res.status(200).json({ message: `Deleted colour: ${deletedItem}` });
  } else {
    res.status(404).send('Resource not found');
  }
});

// Resource not found (this should be at the end)
app.use((req, res) => {
  res.status(404).send('Resource not found');
});

// Tell the app to start listening for requests
app.listen(HTTP_PORT, () => {
  console.log('Ready to handle requests on port ' + HTTP_PORT);
});


