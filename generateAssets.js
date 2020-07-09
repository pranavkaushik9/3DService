const faker = require('faker');

module.exports = (threshold, users) => {
    const assets = [];
    for (let i = 1; i<= threshold; i++) {
        const random = Math.floor(Math.random() * users.length - 1);
        assets.push({
            id: i,
            name: faker.commerce.productName(),
            image: faker.image.imageUrl(),
            price: faker.commerce.price(),
            ownerId: users[random].id
        });
    }
    return assets;
};
