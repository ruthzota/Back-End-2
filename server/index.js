const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


const ctrl = required('./controller');

const {
    getHouses,
    deleteHouse, 
    createHouse, 
    updateHouse
} = require('./controller')

app.get(`/api/houses`, getHouses)
app.post(`/api/houses`, createHouse)
app.put(`/api/houses/:id`, updateHouse)
app.delete(`api/houses/:id`, deleteHouse)



app.listen(4040, () => console.log('Server running on 4040'))