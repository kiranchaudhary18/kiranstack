const fs = require('fs');
const path = require('path');

const dir = 'c:/Kiran-PR/Frontend/src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx') && f !== 'Home.jsx');

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace md:ml-[280px] string variables
  content = content.replace(/'md:ml-\[280px\]'/g, "'md:ml-0 md:pl-[300px]'");
  // Replace plain md:ml-[280px] in classNames e.g. in Dashboard.jsx
  content = content.replace(/md:ml-\[280px\]/g, "md:ml-0 md:pl-[300px]");
  
  fs.writeFileSync(filePath, content);
  console.log('Fixed', file);
});
