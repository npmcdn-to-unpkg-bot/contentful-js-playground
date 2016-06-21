var config = require('./config')
var contentfulManagement = require('contentful-management');
var makebutton = require('./makebutton');
var _ = require('lodash')

export default function setupCma() {
  makebutton('cma stuffs', () => {
    var client = contentfulManagement.createClient({
      accessToken: config.cmaToken
    });

    client.getSpace(config.spaceId)
    .then(space => {
      space.getEntries()
      .then(entries => {
        entries.items[0].update()
        .then((updatedEntry) => {
          console.log('entries', updatedEntry)
        })
      })
    })
  });
}
