app.get('/admins', (req, res) => {
  db.query('SELECT * FROM admin', (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post('/admins', (req, res) => {
  const { name, email, phone } = req.body;
  db.query('INSERT INTO admin (name, email, phone) VALUES (?, ?, ?)', [name, email, phone], (err, result) => {
    if (err) throw err;
    res.send('Admin added successfully');
  });
});
