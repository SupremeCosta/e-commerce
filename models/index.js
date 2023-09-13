// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

Product.belongsTo(Category, {
  foreignKey: 'category_id', // This links Product to Category using the category_id column
});

Category.hasMany(Product, {
  foreignKey: 'category_id', // This establishes the reverse association from Category to Product
});

Product.belongsToMany(Tag, {
  through: ProductTag, // This establishes a many-to-many relationship between Product and Tag through ProductTag
  foreignKey: 'product_id', // The foreign key in ProductTag that links to Product
});

Tag.belongsToMany(Product, {
  through: ProductTag, // This establishes the reverse many-to-many relationship between Tag and Product through ProductTag
  foreignKey: 'tag_id', // The foreign key in ProductTag that links to Tag
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};