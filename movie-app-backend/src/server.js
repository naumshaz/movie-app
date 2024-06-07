const app = require('./app');
const PORT = process.env.PORT || 6090;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
