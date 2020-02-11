var faker = require('faker');

var database = {members: [], products: [], posts: [], categories: []};

for (var i = 1; i<= 20; i++) {
  database.members.push({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    siret: faker.lorem.text(),
    email:faker.internet.email(),
    password:faker.internet.password(),
    phoneNumber:faker.phone.phoneNumber(),
    postsCount: 3,
    employeesCount: 3,
  });

  database.products.push({
    id: i,
    title: faker.commerce.productName(),
    image: faker.image.dataUri(),
    prices: faker.commerce.price(),
    weight: faker.random.number(),
    description: faker.lorem.text(),
    applicationProtocol: faker.internet.protocol(),
    video: faker.image.dataUri(),
    inSolde: faker.random.boolean(),
    soldeRate: faker.random.number()
  });

  database.posts.push({
    id: i,
    title: faker.lorem.words(),
    createdAt: faker.date.recent(),
    content: faker.lorem.text(),
  });

  database.categories.push({
    id: i,
    title: faker.lorem.words(),
    image: faker.image.dataUri(),
  });
}

console.log(JSON.stringify(database));




