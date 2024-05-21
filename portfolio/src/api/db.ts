// Replace this line with the correct path
const modelsPath = path.join(__dirname, 'models');

// Load models from the models directory
fs.readdirSync(modelsPath)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file.slice(-3) === '.ts';
  })
  .forEach((file) => {
    const model = require(path.join(modelsPath, file)).default;
    db[model.name] = model;
  });
