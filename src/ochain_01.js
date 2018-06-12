const meetups = {
  js: {name: 'DDJS', day: 'Thursday'},
  cpp: {name: 'DDCPP', day: 'Friday'}
};

const rubyMetupDay = meetups.ruby && meetups.ruby.day;
// undefined

// VS

const rubyMetupDay = meetups?.ruby;
// undefined