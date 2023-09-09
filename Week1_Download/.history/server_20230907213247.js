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
app.get('/api/items', (req, res) => {
  res.json({ message: 'fetch all items' });
});

// Get one
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

/*const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

// Add support for incoming JSON entities
app.use(bodyParser.json());

// Array of strings
let colours = ['Red', 'Green', 'Blue', 'Yellow', 'Aqua', 'Fuschia'];

// Deliver the app's home page to browser clients
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// --- Get all items ---
app.get('/api/items', (req, res) => {
  res.json({ message: 'Fetch all items', colours });
});

// --- Get one item by index ---
app.get('/api/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  if (itemId >= 0 && itemId < colours.length) {
    res.json({ message: `Get item with identifier: ${itemId}`, colour: colours[itemId] });
  } else {
    res.status(404).send('Resource not found');
  }
});

// --- Add a new item ---
app.post('/api/items', (req, res) => {
  const newItem = req.body.colourName;

  if (newItem) {
    colours.push(newItem);
    res.status(201).json({ message: `Added ${newItem} as item identifier ${colours.length - 1}` });
  } else {
    res.status(400).json({ error: 'Invalid input' });
  }
});

// --- Edit an existing item ---
app.put('/api/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  const updatedItem = req.body.colourName;

  if (itemId >= 0 && itemId < colours.length && updatedItem) {
    colours[itemId] = updatedItem;
    res.json({ message: `Updated item with identifier: ${itemId} to ${updatedItem}` });
  } else {
    res.status(404).send('Resource not found');
  }
});

// --- Delete an item by index ---
app.delete('/api/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  if (itemId >= 0 && itemId < colours.length) {
    const deletedItem = colours.splice(itemId, 1);
    res.status(200).json({ message: `Deleted item with identifier: ${itemId}`, deletedColor: deletedItem[0] });
  } else {
    res.status(404).send('Resource not found');
  }
});

// --- Resource not found (this should be at the end) ---
app.use((req, res) => {
  res.status(404).send('Resource not found');
});

// Tell the app to start listening for requests
app.listen(HTTP_PORT, () => {
  console.log('Ready to handle requests on port ' + HTTP_PORT);
});
