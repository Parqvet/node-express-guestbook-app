const entries = []; // esto simulara mi base de datos

const renderIndex = (req, res) => {
    res.render('index', {entries});
};

const renderNewEntry = (req, res) => {
    res.render('new-entry')
};

const createNewEntry = (req, res) => {
    // cada vez que venga un dato desde el form voy a guardarlo en un objeto
    const newEntry = {
        title: req.body.title,
        content: req.body.body,
        published: new Date()
    }
    entries.push(newEntry);
    res.redirect('/');
};

module.exports = {
    renderIndex,
    renderNewEntry,
    createNewEntry
}