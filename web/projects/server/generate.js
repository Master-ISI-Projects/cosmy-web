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
    image: 'assets/images/blog/blog' + (Math.floor(Math.random() * 3) + 1) + '.png',
    price: faker.commerce.price(),
    weight: faker.random.number(),
    description: faker.lorem.text(),
    applicationProtocol: faker.lorem.text(),
    video: faker.image.dataUri(),
    qte: faker.random.number(),
    pourcentagePromotion: faker.random.number(),
    favourite: faker.random.number(),
    productSeller: faker.random.number()
  });

  database.posts.push({
    id: i,
    title: faker.lorem.words(),
    createdAt: faker.date.recent(),
    content: faker.lorem.text(),
    image: 'assets/images/blog/blog' + (Math.floor(Math.random() * 3) + 1) + '.png',
    author: faker.name.firstName() + ' ' + faker.name.lastName(),
    createdAt: faker.date.past(i)
  });

  database.categories.push({
    id: i,
    title: faker.lorem.words(),
    image: 'assets/images/blog/blog' + (Math.floor(Math.random() * 3) + 1) + '.png',
  });
}

console.log(JSON.stringify(database));




