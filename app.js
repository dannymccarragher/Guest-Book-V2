const express = require('express');
const mariadb = require('mariadb');
const { title } = require('process');
const app = express();

const PORT = 3000;

app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Gohabsgo1',
    database : 'contact'
});

//connect to db
async function connect() {
    try{
        const conn = await pool.getConnection();
        console.log('Connected to database');
        return conn;
    } catch (err){
        console.log('Error connecting to database: ' + err);
    }
};

app.get('/', (req, res) => {
    res.render('index');
});

//
app.post('/confirmation', async (req, res) => {

    const conn = await connect();
    const data = req.body;

    conn.query(`INSERT INTO contacts (firstName, lastName, job, company,
                linkedin, email, meeting, other, message) 
                VALUES ('${data.fname}','${data.lname}', '${data.job-title}', '${data.company}', '${data.LinkedIn}',
                '${data.email}','${data.meeting}', '${data.other}', '${data.message}')`);

    res.render('confirmation');
});

app.get('/admin', async (req, res) => {
    const conn = await connect();
    const data = await conn.query('SELECT * FROM contacts');
    res.render('admin', {data : data})
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});