var fs = require('fs');

fs.readdir('.', function (err, data) {
  if (err) {
      console.log(err);
      return;
  }
  console.log(data);
});
