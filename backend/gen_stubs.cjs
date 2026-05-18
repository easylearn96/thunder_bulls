const fs = require('fs');
const bDir = 'E:/Thunder website/backend';

const stubs = ['authRoutes', 'orderRoutes', 'contactRoutes', 'uploadRoutes'];
stubs.forEach(stub => {
  const code = `const express = require('express');\nconst router = express.Router();\n// Placeholder routes\nrouter.get('/', (req, res) => res.json({ message: '${stub} coming soon' }));\nmodule.exports = router;`;
  fs.writeFileSync(`${bDir}/routes/${stub}.js`, code);
});
console.log('Stub routes created.');
