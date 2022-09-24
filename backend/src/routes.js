let home = (req, res) => res.send('Hello World, ovaj puta iz paketa!')
let student = (req, res) => res.send('Ruta za studente preko novog paketa.')
let allFastFood = (req, res) => res.send('Ruta dohvacanje sve brze hrane.')


export default { home, student,allFastFood } // na kraju navodimo koje JS objekte treba