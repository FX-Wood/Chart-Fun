var db = require('./models');

db.poll.create({
  name: 'testPoll2',
  answer: 'testAnswer2',
  survey: 11
}).then(function(category) {
  console.log(category.get());
});