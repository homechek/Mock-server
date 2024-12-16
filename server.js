const express = require('express'); 
const fs = require('fs'); 
const path = require('path'); 

const app = express(); 
const port = 3001; 


const dataDir = path.join(__dirname, 'data');


app.get('/api/*', (req, res) => {
  const requestedPath = req.params[0]; 
  const filename = requestedPath.replace(/\//g, '_') + '.json'; 
  const filePath = path.join(dataDir, filename); 

  fs.readFile(filePath, 'utf8', (err, data) => { 
    if (err) {
      return res.status(404).json({ error: 'File not found' }); 
    }
    res.json(JSON.parse(data)); 
  });
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
