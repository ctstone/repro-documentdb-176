const documentdb = require('documentdb');
const settings = require('./settings.json');

const collLink = `dbs/${settings.database}/colls/${settings.collection}`;
const client = new  documentdb.DocumentClient(settings.url, { masterKey: settings.key });

let count = 0;
client.readDocuments(collLink, {maxItemCount:5000}).forEach((err) => {
  if (err) {
    throw err;
  }
  count += 1;
  if (count % 1000 === 0) {
    console.log(count);
  }
});
