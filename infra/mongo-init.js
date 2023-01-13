print('Start #################################################################');

db = db.getSiblingDB('delivery');
db.createUser(
  {
    user: 'root',
    pwd: 'pass',
    roles: [{ role: 'readWrite', db: 'delivery' }],
  },
);

db = db.getSiblingDB('delivery_test');
db.createUser(
  {
    user: 'root',
    pwd: 'pass',
    roles: [{ role: 'readWrite', db: 'delivery_test' }],
  },
);

print('END #################################################################');