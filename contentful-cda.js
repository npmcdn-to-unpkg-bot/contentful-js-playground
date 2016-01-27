var contentful = require('contentful');
var makebutton = require('./makebutton');
var _ = require('lodash')

makebutton('cda stuff', () => {
  var client = contentful.createClient({
    space: '',
    accessToken: ''
  });

  client.entries()
  .then(entries => console.log(entries))

})
