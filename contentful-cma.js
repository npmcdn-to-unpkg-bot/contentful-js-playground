var contentfulManagement = require('contentful-management');
var makebutton = require('./makebutton');
var _ = require('lodash')

makebutton('cma stuffs', () => {
  var client = contentfulManagement.createClient({
    accessToken: ''
  });

  client.getSpace('')
  .then(space => {
    space.getEntries()
    .then(entries => console.log(entries))
  })
});
