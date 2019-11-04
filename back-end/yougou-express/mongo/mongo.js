const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";

const dbName = "yougou";

const connect = () => {
  return new Promise((resolve, reject) => {
    // Use connect method to connect to the server
    MongoClient.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      function(err, client) {
        assert.equal(null, err);
        err ? reject(err) : resolve(client);
      }
    );
  });
};

const find = (col, query, limit) => {
  return new Promise(async (resolve, reject) => {
    const client = await connect();

    const db = client.db(dbName);

    const collection = db.collection(col);

    collection
      .find(query ? query : {})
      .limit(limit ? limit : 1)
      .toArray(function(err, docs) {
        err ? reject(err) : resolve(docs);
      });
  });
};

const insert = (col, doc) => {
  return new Promise(async (resolve, reject) => {
    const client = await connect();

    const db = client.db(dbName);

    const collection = db.collection(col);

    collection.insertOne(doc, function(err, result) {
      err ? reject(err) : resolve(result);
    });
  });
};

const update = (col, query, newDoc) => {
  return new Promise(async (resolve, reject) => {
    const client = await connect();

    const db = client.db(dbName);

    const collection = db.collection(col);

    collection.updateOne(
      query,
      {
        $set: newDoc
      },
      function(err, result) {
        err ? reject(err) : resolve(result);
      }
    );
  });
};

const remove = function(col, query) {
  return new Promise(async (resolve, reject) => {
    const client = await connect();

    const db = client.db(dbName);

    const collection = db.collection(col);

    collection.deleteOne(query, function(err, result) {
      err ? reject(err) : resolve(result);
    });
  });
};

module.exports = {
  find,
  insert,
  update,
  remove
};
