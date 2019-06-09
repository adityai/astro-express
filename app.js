const express = require('express');
const app = express();
const astroRouter = express.Router();
const port = process.env.PORT || 3000;

astroRouter.route('/astro')
    .get((req, res) => {
          const response = { "hello": "This is my astronomy API"}
          res.json(response);
    });

app.use("/api", astroRouter);

app.get('/', (req, res) => {
    res.send("Welcome to the astro service.");
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
