var config = require('./config')
var contentful = require('contentful');
var makebutton = require('./makebutton');
var _ = require('lodash')

export default function setupCda() {

  makebutton('cda stuff', () => {
    var client = contentful.createClient({
      space: config.spaceId,
      accessToken: config.cdaToken
    });

    /*
    client.space()
    .then(r => console.log(r))
    client.entries()
    .then(entries => console.log(entries))
    */
    return client.getEntries({'sys.id[in]': 'finn,jake'})
    .then(response => {
      console.log(response)
    }, err => {
      console.log(err)
    })
  })

}
