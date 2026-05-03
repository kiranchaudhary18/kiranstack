const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

const imageUrl = 'https://res.cloudinary.com/dnbayngfx/image/upload/v1776965724/ChatGPT_Image_Apr_19_2026_10_52_51_PM_uhap27.png';
const publicDir = path.join(__dirname, 'public');

function download(fileUrl, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(fileUrl, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
  });
}

async function generateFavicons() {
  try {
    let sharp;
    try {
      sharp = require('sharp');
    } catch(e) {
      console.log('sharp not available, just downloading the PNG as-is for favicon-32x32.png');
      await download(imageUrl, path.join(publicDir, 'favicon-32x32.png'));
      fs.copyFileSync(path.join(publicDir, 'favicon-32x32.png'), path.join(publicDir, 'favicon-16x16.png'));
      fs.copyFileSync(path.join(publicDir, 'favicon-32x32.png'), path.join(publicDir, 'apple-touch-icon.png'));
      fs.copyFileSync(path.join(publicDir, 'favicon-32x32.png'), path.join(publicDir, 'favicon.ico'));
      console.log('✅ Favicon files saved (without resize).');
      return;
    }

    const tmpFile = path.join(publicDir, '_tmp_favicon_src.png');
    console.log('Downloading image...');
    await download(imageUrl, tmpFile);
    console.log('Downloaded!');

    await sharp(tmpFile).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
    await sharp(tmpFile).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'));
    await sharp(tmpFile).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
    await sharp(tmpFile).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.ico'));
    fs.unlinkSync(tmpFile);
    console.log('✅ All favicon files generated successfully!');
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

generateFavicons();
