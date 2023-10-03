const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'jhon Doe',
        email: 'mauricioseed@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        update_at: new Date(),
      },
    ],
    {},
  ),

  down() { },
};
