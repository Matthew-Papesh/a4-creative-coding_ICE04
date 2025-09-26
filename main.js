const express = require('express'),
    app = express(),
    cors = require('cors'),
    path = require('path')

app.use(cors())
app.use(express.static('./'))

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});