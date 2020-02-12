var faker = require('faker');

var database = {members: [], products: [], posts: [], categories: [], comments : [], orders: []};
var categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
var orderStatus = ['En Attent', 'Annulé', 'Confirmé'];

for (var i = 1; i< 10; i++) {
  database.members.push({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    siret: faker.lorem.text(),
    email:faker.internet.email(),
    password:faker.internet.password(),
    phoneNumber:faker.phone.phoneNumber(),
    postsCount: (Math.floor(Math.random() * 5) + 1),
    employeesCount: (Math.floor(Math.random() * 7) + 1),
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
    inSold: faker.random.boolean(),
    pourcentagePromotion: faker.random.number(),
    favourite: faker.random.number(),
    productSeller: faker.random.number(),
    inSolde : faker.random.boolean()

  });

  database.posts.push({
    id: i,
    title: faker.lorem.words(),
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

for (let i = 0; i < 20; i++) {
  const details = [];

  for (let index = 0; index < 20; index++) {
    details.push({
      id: index,
      qte: (Math.floor(Math.random() * 5) + 1),
      products: faker.commerce.productName()
    })
  }

  database.orders.push({
    id: i,
    billingAdress: faker.lorem.text(),
    deliveryAdress: faker.lorem.text(),
    status: orderStatus[(Math.floor(Math.random() * 2) + 0)],
    createdAt: faker.date.past(i),
    customer: faker.name.firstName() + ' ' + faker.name.lastName(),
    orderDetails: details
  });
}

console.log(JSON.stringify(database));




