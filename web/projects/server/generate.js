var faker = require('faker');

<<<<<<< HEAD
var database = {members: [], products: [], posts: [], categories: [], comments : []};
=======
var database = {members: [], products: [], posts: [], categories: []};
var categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
>>>>>>> c2aa6abfb281f90fc492c6c278aa9e095e1c9f0f

for (var i = 1; i< 20; i++) {
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
    image: 'assets/images/product/product-' + i + '.jpg',
    price: faker.commerce.price(),
    category: categories[(Math.floor(Math.random() * 4) + 1)],
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
    image: 'assets/images/blog/blog' + (Math.floor(Math.random() * 4) + 1) + '.png',
    author: faker.name.firstName() + ' ' + faker.name.lastName(),
    createdAt: faker.date.past(i)
  });
}

for (let index = 0; index < categories.length; index++) {
  database.categories.push({
    id: i,
    title: categories[index],
    image: 'assets/images/categories/cate-' + (Math.floor(Math.random() * 3) + 1) + '.png',
  });

  database.comments.push({
    id: i,
    postId: (Math.floor(Math.random() * 19) + 1),
    commentedBy: faker.name.firstName(),
    comment: faker.lorem.text(),
  });
}

console.log(JSON.stringify(database));




