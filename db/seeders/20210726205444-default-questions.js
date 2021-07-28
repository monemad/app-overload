'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Questions', [
        { title: 'Display', details: 'You don’t see the front face of your product', votes: 90, viewCount: 420, userId: 22, createdAt: new Date(), updatedAt: new Date() },
        { title: 'multilingual', details: 'Copy and Past a text with the same name or just for the format of the text object.', votes: 49, viewCount: 280, userId: 29, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Acknowledge', details: 'Is there a possibility to Acknowledge a group of alarm', votes: 7, viewCount: 682, userId: 28, createdAt: new Date(), updatedAt: new Date() },
        { title: 'AC31', details: 'Communication between CP range and AC31 products with Ethernet', votes: 77, viewCount: 301, userId: 32, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Ethernet', details: 'Is it possible to program the Control Panel By Ethernet?', votes: 54, viewCount: 693, userId: 25, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Cables', details: 'CAB90 to a 07KP93 Modbus port?', votes: 11, viewCount: 180, userId: 7, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Controllers', details: 'How to optimise the communication speed between Controller and Display?', votes: 70, viewCount: 911, userId: 11, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Master/slave', details: 'Master mode: where to enter the slave number of the PLC?', votes: 60, viewCount: 596, userId: 22, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Master/slave', details: 'Is there a slave mode with AC31 range?', votes: 29, viewCount: 369, userId: 34, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Limits', details: 'How many different screens is it possible to display?', votes: 87, viewCount: 682, userId: 35, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Jump', details: 'How to change the page displayed?', votes: 29, viewCount: 230, userId: 27, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Active', details: 'How to know which is the active page?', votes: 39, viewCount: 988, userId: 17, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Cursor', details: 'Cursor position', votes: 90, viewCount: 732, userId: 26, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Lines', details: 'Is it possible to see more than 2 or 4 lines on the CP502 and CP503?', votes: -10, viewCount: 541, userId: 5, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Button', details: 'Is it possible to acknowledge all the alarms with a button ?', votes: 8, viewCount: 748, userId: 5, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Screen', details: 'Is it possible to have more than 10 alarms on one page ?', votes: 23, viewCount: 582, userId: 29, createdAt: new Date(), updatedAt: new Date() },
        { title: '', details: 'Screen saver', votes: 94, viewCount: 225, userId: 35, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Visualisation', details: 'Applets (Picture of the CP in a computer)', votes: 3, viewCount: 603, userId: 17, createdAt: new Date(), updatedAt: new Date()},
        { title: 'TFT', details: 'STN and TFT ?', votes: 68, viewCount: 79, userId: 16, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Transfer', details: 'My CP500 stay inactive during the Transfer of the program !! How can I do ?', votes: 14, viewCount: 877, userId: 4, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Limits', details: 'How many commands can we use in setup signal ?', votes: 99, viewCount: 888, userId: 2, createdAt: new Date(), updatedAt: new Date() },
        { title: 'What is it ?', details: 'What is Datalogger ?', votes: 70, viewCount: 859, userId: 30, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Trends', details: 'Datalogger and Trends name !', votes: 0, viewCount: 512, userId: 12, createdAt: new Date(), updatedAt: new Date() },
        { title: 'What is it ?', details: 'What is Library catalogue ?', votes: 43, viewCount: 851, userId: 31, createdAt: new Date(), updatedAt: new Date() },
        { title: 'What is it ?', details: 'Internal Variables ?', votes: 94, viewCount: 247, userId: 40, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Limits', details: 'IFC-MC and Comli Slave Driver !', votes: 40, viewCount: 519, userId: 7, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Progammer', details: 'Do you need to un-install the V1.0 version to put the V1.1 CP500Soft version ?', votes: 65, viewCount: 719, userId: 8, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Progammer', details: 'When you uninstall the V1.0 version, will you lose our project ?', votes: 98, viewCount: 212, userId: 14, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Progammer', details: 'An old program open with the new version could be open without problems ?', votes: 60, viewCount: 986, userId: 20, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Progammer', details: 'Whats happen if I want to open a new project with the old version of CP500Soft new version ? ', votes: 68, viewCount: 844, userId: 3, createdAt: new Date(), updatedAt: new Date()},
        { title: 'Progammer', details: 'Whats happend with the new functions and old version of CP Products?', votes: 73, viewCount: 643, userId: 11, createdAt: new Date(), updatedAt: new Date()},
        { title: 'Limits', details: 'Is it possible to use 2 bare code on one CP product', votes: 45, viewCount: 23, userId: 28, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Progammer', details: 'I do not arrive to install CP500Soft a Driver or the import of variable file !', votes: 12, viewCount: 728, userId: 23, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Limits', details: 'Is AC500 Driver available for CP501 ?', votes: 14, viewCount: 393, userId: 8, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Restriction', details: 'Why is it not possible to use Input or Output directly with AC500 Driver ?', votes: 42, viewCount: 255, userId: 18, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Import', details: 'Is import of variable available in CP500soft ?', votes: 82, viewCount: 501, userId: 14, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Progammer', details: 'Change the language of the software', votes: 19, viewCount: 587, userId: 14, createdAt: new Date(), updatedAt: new Date() },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
