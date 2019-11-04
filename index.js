const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/member_login', (req, res) => {
  let response = {
    user: 'user',
    password: 'password',
    client_id: req.body.client_id
  };
  console.log(`#####client_id: ${response.client_id}`);
  console.log(req.body);

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`App listening at port: ${PORT}`);
});
