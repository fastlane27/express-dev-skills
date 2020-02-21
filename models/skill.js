module.exports = {
    getAll,
    getOne,
    deleteOne,
    create,
    update
};

const skills = [
    {skill: 'HTML', description: 'Make a webpage.'},
    {skill: 'CSS', description: 'Make a webpage pretty.'},
    {skill: 'JavaScript', description: 'Make a webpage do things.'},
    {skill: 'jQuery', description: 'Make a webpage do things, but easier.'},
    {skill: 'Node.js', description: 'Make JavaScript do server stuff.'},
];

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}

function deleteOne(id) {
    skills.splice(id, 1);
}

function create(skill) {
    skills.push(skill);
}

function update(skill, id) {
    skills.splice(id, 1, skill);
}
