const { Event } = require('../../../handler');

module.exports = class extends Event {
  constructor() {
    super('ready');
  }

  run(client) {
    console.log(`${client.user.tag} is running`);
  }
};
