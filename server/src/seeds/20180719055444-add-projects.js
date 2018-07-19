module.exports = {
  up(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const projects = [

      {
        name: 'My first project',
        description: 'When I was a child I create this beautiful project!',
        url: 'www.google.com',
        image: 'None',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'My second project',
        description: 'When I was a child I create this other beautiful project!',
        url: 'www.google.com',
        image: 'None',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'My third project',
        description: 'When I was a child I create this other beautiful project!',
        url: 'www.google.com',
        image: 'None',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    return queryInterface.bulkInsert('projects', projects);
  },

  down(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};
