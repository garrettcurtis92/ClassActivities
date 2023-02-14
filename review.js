const testResults = [
  { student: 'Greg', subject: 'English', score: 90 },
  { student: 'Spike', subject: 'Math', score: 75 },
  { student: 'Moose', subject: 'History', score: 92 },
  { student: 'Peter', subject: 'English', score: 85 },
  { student: 'Chicken', subject: 'Math', score: 50 },
  { student: 'Spike', subject: 'English', score: 79 },
  { student: 'Chicken', subject: 'English', score: 33 },
  { student: 'Peter', subject: 'Math', score: 82 },
  { student: 'Chicken', subject: 'History', score: 65 },
  { student: 'Greg', subject: 'Math', score: 87 },
  { student: 'Spike', subject: 'History', score: 93 },
];

let gregResults = testResults.filter(arr => arr.student === "Greg");
console.log(gregResults);

let englishResults = testResults.filter(arr => arr.subject === "English");
console.log(englishResults);

function testAverage

(arr) {
englishResults.map(obj => obj.score)
}
