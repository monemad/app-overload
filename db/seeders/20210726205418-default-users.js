'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [
        { firstName: 'Jack', lastName: 'Evie', username: 'JackEvie178', hashedPassword: 'Q77ET98LG79LU39UP20HK31DI', reputation: 675, avatarURL: '/images/default.png', email: 'Jack.Evie@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Oliver', lastName: 'Eilidh', username: 'OliverEilidh500', hashedPassword: 'J69WT18CN96BV17KS68NG85JS', reputation: 173, avatarURL: '/images/default.png', email: 'Oliver.Eilidh@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'James', lastName: 'Ruby', username: 'JamesRuby939', hashedPassword: 'J12DI45QG40GF31ZD48BP44NR', reputation: 252, avatarURL: '/images/default.png', email: 'James.Ruby@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Charlie', lastName: 'Willow', username: 'CharlieWillow253', hashedPassword: 'S51OA47QX42VG68UQ84LA70DJ', reputation: -40, avatarURL: '/images/default.png', email: 'Charlie.Willow@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Harris', lastName: 'Anna', username: 'HarrisAnna51', hashedPassword: 'W15UI98DR58MS89ZN15ME46IH', reputation: 586, avatarURL: '/images/default.png', email: 'Harris.Anna@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Lewis', lastName: 'Maisie', username: 'LewisMaisie85', hashedPassword: 'C72SS10FJ28UV49PX33FT33ZA', reputation: 78, avatarURL: '/images/default.png', email: 'Lewis.Maisie@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Leo', lastName: 'Hannah', username: 'LeoHannah330', hashedPassword: 'C61ZZ79OY60DR79EB33JR50JC', reputation: 883, avatarURL: '/images/default.png', email: 'Leo.Hannah@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Noah', lastName: 'Eva', username: 'NoahEva633', hashedPassword: 'O22ZV73QQ30QN81CZ96UZ98ME', reputation: 157, avatarURL: '/images/default.png', email: 'Noah.Eva@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Alfie', lastName: 'Chloe', username: 'AlfieChloe316', hashedPassword: 'E81CI11WF13UX81GA70PJ35AY', reputation: 520, avatarURL: '/images/default.png', email: 'Alfie.Chloe@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Rory', lastName: 'Mila', username: 'RoryMila736', hashedPassword: 'P53BB86SF63ED34VM92DI57DX', reputation: 217, avatarURL: '/images/default.png', email: 'Rory.Mila@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Alexander', lastName: 'Orla', username: 'AlexanderOrla404', hashedPassword: 'H23CP54HM41OL44NG95CN76IQ', reputation: 467, avatarURL: '/images/default.png', email: 'Alexander.Orla@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Max', lastName: 'Isabella', username: 'MaxIsabella302', hashedPassword: 'E16ZS31IU69DM94IT11CP45AM', reputation: 429, avatarURL: '/images/default.png', email: 'Max.Isabella@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Logan', lastName: 'Ivy', username: 'LoganIvy851', hashedPassword: 'T78EY60JT64SW13RD61IV82LQ', reputation: 432, avatarURL: '/images/default.png', email: 'Logan.Ivy@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Lucas', lastName: 'Emma', username: 'LucasEmma488', hashedPassword: 'D31TC73AE67ED87WP74AY92YZ', reputation: 963, avatarURL: '/images/default.png', email: 'Lucas.Emma@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Harry', lastName: 'Georgia', username: 'HarryGeorgia739', hashedPassword: 'Z59WX59PZ31YX21GJ80ZN72MA', reputation: 227, avatarURL: '/images/default.png', email: 'Harry.Georgia@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Theo', lastName: 'Poppy', username: 'TheoPoppy946', hashedPassword: 'O42OG28KO75DV39HU60ZV16NG', reputation: 563, avatarURL: '/images/default.png', email: 'Theo.Poppy@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Thomas', lastName: 'Robyn', username: 'ThomasRobyn753', hashedPassword: 'X80DF16YC80EA63JA63SC95HQ', reputation: 703, avatarURL: '/images/default.png', email: 'Thomas.Robyn@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Brodie', lastName: 'Daisy', username: 'BrodieDaisy789', hashedPassword: 'W53PH64HU47OQ45UI49ON70WQ', reputation: 622, avatarURL: '/images/default.png', email: 'Brodie.Daisy@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Archie', lastName: 'Zara', username: 'ArchieZara134', hashedPassword: 'V75GM75EQ96OT71MM46CD49CA', reputation: 680, avatarURL: '/images/default.png', email: 'Archie.Zara@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Jacob', lastName: 'Gracie', username: 'JacobGracie373', hashedPassword: 'X48WR64BA44HW34XB29RE98YU', reputation: -88, avatarURL: '/images/default.png', email: 'Jacob.Gracie@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Olivia', lastName: 'Finlay', username: 'OliviaFinlay345', hashedPassword: 'S53QF31QR86XY71QM67WQ72AD', reputation: 783, avatarURL: '/images/default.png', email: 'Olivia.Finlay@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Emily', lastName: 'Finn', username: 'EmilyFinn23', hashedPassword: 'H27ML13HL24GW32GU69QR38VO', reputation: 572, avatarURL: '/images/default.png', email: 'Emily.Finn@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Isla', lastName: 'Daniel', username: 'IslaDaniel640', hashedPassword: 'I18AK28XY98DZ38BR60VI51TY', reputation: 502, avatarURL: '/images/default.png', email: 'Isla.Daniel@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Sophie', lastName: 'Joshua', username: 'SophieJoshua929', hashedPassword: 'U56OK78OX43IZ22IH65BY84IR', reputation: 321, avatarURL: '/images/default.png', email: 'Sophie.Joshua@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Ella', lastName: 'Oscar', username: 'EllaOscar159', hashedPassword: 'M55QU96BV86SF51VU10LO21AT', reputation: 145, avatarURL: '/images/default.png', email: 'Ella.Oscar@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Ava', lastName: 'Arthur', username: 'AvaArthur270', hashedPassword: 'U76UI25CK33AC41ND54YX19MZ', reputation: 150, avatarURL: '/images/default.png', email: 'Ava.Arthur@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Amelia', lastName: 'Hunter', username: 'AmeliaHunter453', hashedPassword: 'U24RN68WU92AJ50US23ZV80QG', reputation: 276, avatarURL: '/images/default.png', email: 'Amelia.Hunter@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Grace', lastName: 'Ethan', username: 'GraceEthan386', hashedPassword: 'P80VZ66LB25WQ45ZD45VX40WB', reputation: 529, avatarURL: '/images/default.png', email: 'Grace.Ethan@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Freya', lastName: 'Mason', username: 'FreyaMason107', hashedPassword: 'I26RY58QI34OR56IY43ZP22HQ', reputation: 628, avatarURL: '/images/default.png', email: 'Freya.Mason@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Charlotte', lastName: 'Harrison', username: 'CharlotteHarrison22', hashedPassword: 'E37PL55CY20TX24EK79QC26PE', reputation: 279, avatarURL: '/images/default.png', email: 'Charlotte.Harrison@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Jessica', lastName: 'Freddie', username: 'JessicaFreddie842', hashedPassword: 'O78RX58GR29YM35GF48TO94IK', reputation: 491, avatarURL: '/images/default.png', email: 'Jessica.Freddie@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Lucy', lastName: 'Ollie', username: 'LucyOllie492', hashedPassword: 'M35SR28GK65RE72KF81MS29JL', reputation: 894, avatarURL: '/images/default.png', email: 'Lucy.Ollie@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Ellie', lastName: 'Adam', username: 'EllieAdam755', hashedPassword: 'A72ET56SS34GL71WR45CT80CX', reputation: 251, avatarURL: '/images/default.png', email: 'Ellie.Adam@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Sophia', lastName: 'William', username: 'SophiaWilliam65', hashedPassword: 'K11UF59TJ78ZD62JV51XX14PR', reputation: 515, avatarURL: '/images/default.png', email: 'Sophia.William@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Aria', lastName: 'Jaxon', username: 'AriaJaxon844', hashedPassword: 'A29BU92WE20LS55MM81VO12XO', reputation: 810, avatarURL: '/images/default.png', email: 'Aria.Jaxon@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Lily', lastName: 'Aaron', username: 'LilyAaron266', hashedPassword: 'B88WC21KC49QN18KT66QR63WZ', reputation: -26, avatarURL: '/images/default.png', email: 'Lily.Aaron@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Harper', lastName: 'Cameron', username: 'HarperCameron370', hashedPassword: 'T76ND17NB48PZ66GP60QT49HO', reputation: 624, avatarURL: '/images/default.png', email: 'Harper.Cameron@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Mia', lastName: 'Liam', username: 'MiaLiam353', hashedPassword: 'N30AY60XV20RU20VC28MR98FQ', reputation: 776, avatarURL: '/images/default.png', email: 'Mia.Liam@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Rosie', lastName: 'George', username: 'RosieGeorge664', hashedPassword: 'L38JL25ZO45UF95NX29GK78CK', reputation: 272, avatarURL: '/images/default.png', email: 'Rosie.George@gmail.com', createdAt: new Date(), updatedAt: new Date() },
        { firstName: 'Millie', lastName: 'Jamie', username: 'MillieJamie772', hashedPassword: 'U85BU80VT13GN10XG80TV64IK', reputation: -35, avatarURL: '/images/default.png', email: 'Millie.Jamie@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
