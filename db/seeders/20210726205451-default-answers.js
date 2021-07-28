'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Answers', [
        { answer: `In View/Option select “Show terminal”`, votes: 47, questionId: 1, userId: 6, createdAt: new Date(), updatedAt: new Date() },
        { answer: `When you copy and past a text block 2 solutions:
1 - With Reuse button inactive       : it’s copying just the format and when you change the text it’s not link
2 - With Reuse button active         : it’s copying the object and the link with the database for Multilanguage used.And when you  change 1 of the object, it's changing all the objects linked.`, votes: 0, questionId: 2, userId: 3, createdAt: new Date(), updatedAt: new Date()},
    { answer: `Yes in Functions/Alarm groups use a bit from the controller in Remote acknowledge`, votes: 30, questionId: 3, userId: 6, createdAt: new Date(), updatedAt: new Date() },
    { answer: `Possible with AC31 Modbus TCP master Driver or with using Generic Modbus TCP master or slave`, votes: 10, questionId: 4, userId: 26, createdAt: new Date(), updatedAt: new Date() },
    { answer: `Yes: You need the Ethernet Card or with CP551 it’s available directly. The first time you send the program you have to use the serial transfer to "configure" the Ethernet Card`, votes: 24, questionId: 5, userId: 4, createdAt: new Date(), updatedAt: new Date() },
    { answer: `No, it’s not working with CAB90, SubD15 connector`, votes: 32, questionId: 6, userId: 24, createdAt: new Date(), updatedAt: new Date() },
    { answer: `In the Driver Help there is Efficient communication chapter`, votes: 24, questionId: 7, userId: 25, createdAt: new Date(), updatedAt: new Date() },
    { answer: `Setup\Peripherals\controller: selection the Driver and change properties Setting Default Station.`, votes: 81, questionId: 8, userId: 20, createdAt: new Date(), updatedAt: new Date() },
    { answer: `NO, to use the slave mode, use the Modbus Slave Driver`, votes: 62, questionId: 9, userId: 35, createdAt: new Date(), updatedAt: new Date() },
    { answer: `The maximum number of blocks (1 block = 1 screen) is 50 for CP501, 150 for CP502 and CP503 and 990 for the other terminals.`, votes: 59, questionId: 10, userId: 24, createdAt: new Date(), updatedAt: new Date() },
    { answer: `5 possibilities:
    1 - Jump to the new block with the function-keys. (Ch23.2 Jump to block with function keys) (Double click on the function keys to program).
2 - Jump to the new block with Jump command           in tools box. 
3 - Jump to the Previous block or Main
4 - Jump to the new block with status of digital signal(open the ""block header"" in the project block manager(right click on the block) or from the block list.Write the bit in display signal.
5 - Jump to the new block with status of Analogue signal(In Setup / System Signal: Possibility to put in a PLC register to active one page with is number(works when the value change).`, votes: 1, questionId: 11, userId: 7, createdAt: new Date(), updatedAt: new Date()},
{ answer: `In Setup / System Signal: Possibility to put in a PLC register the active page`, votes: 37, questionId: 12, userId: 8, createdAt: new Date(), updatedAt: new Date()},
{ answer: `If you want the cursor on the first manoeuvrable, open the ""block header"" in the project block manager(right click on the block) or from the block list.
Press the ""status"" key and define ""Put the cursor..."" and / or ""auto data entry"".`, votes: -7, questionId: 13, userId: 26, createdAt: new Date(), updatedAt: new Date()},
{ answer: `Yes! The text is scrollable in using Up and Down arrow keys(up to 150 characters).`, votes: 30, questionId: 14, userId: 3, createdAt: new Date(), updatedAt: new Date()},
{ answer: `Yes! You can make a macro with all the variable who acknowledge each group.`, votes: 4, questionId: 15, userId: 6, createdAt: new Date(), updatedAt: new Date()},
{ answer: `Yes, use the loop on the menu on the right
Click, it's increasing and after réduce (4 sizes)`, votes: 17, questionId: 16, userId: 29, createdAt: new Date(), updatedAt: new Date()},
{ answer: `In SETUP / Terminal Options :
0 equal no screen saver
different: value in Seconds`, votes: 2, questionId: 17, userId: 22, createdAt: new Date(), updatedAt: new Date()},
{ answer: `You have to download the applet in the CP500 Panel and Cross in Setup / Network / Services WWW Server, FTP Server`, votes: 83, questionId: 18, userId: 32, createdAt: new Date(), updatedAt: new Date()},
{ answer: `STN(SupeT) Passive matrices
TFT(Thin film transistor) Active Matrices`, votes: 31, questionId: 19, userId: 16, createdAt: new Date(), updatedAt: new Date()},
{ answer: `The communication has been disconnected.You have just to send the program again.If necessary power off and on the product`, votes: 73, questionId: 20, userId: 25, createdAt: new Date(), updatedAt: new Date()},
{ answer: `The number of commands is limited by the number of characters used:
CP501, CP502 & CP503 = 20 characters
CP511, CP512, CP513, CP551, CP552, CP554
  & CP555 = 30 characters
Complete list of commands p4 - 38 manual 1SBC159002R0202`, votes: 38, questionId: 21, userId: 37, createdAt: new Date(), updatedAt: new Date()},
{ answer: `The Datalogger are used to collect regularly the information from analogue values(You don't need to make a trend to collect this values)
  (Page 4 - 5 from 1SBC159002R0202)`, votes: 44, questionId: 22, userId: 39, createdAt: new Date(), updatedAt: new Date()},
{ answer: `The trends and the Datalogger mustn't have the same name to be able to keep the information from both without conflict!`, votes: 25, questionId: 23, userId: 12, createdAt: new Date(), updatedAt: new Date()},
{ answer: `The libraries are used to save the new symbols to be able to use it in others projects. It's the customer personalisation`, votes: 24, questionId: 24, userId: 6, createdAt: new Date(), updatedAt: new Date() },
  { answer: `The internal variables are available like an other driver and non-volatile variables are saved in the flash memory and be read at the next start-up
    (Page 4 - 5 from 1SBC159002R0202)`, votes: 51, questionId: 25, userId: 6, createdAt: new Date(), updatedAt: new Date()},
{ answer: `If your application works with memory backup(IFC - MC) and Comli Slave, the feature “Restore application from memory card” will not work correctly. (HMIWEB001235)`, votes: 67, questionId: 26, userId: 12, createdAt: new Date(), updatedAt: new Date()},
{ answer: `It is possible to install the new version without uninstalling the old version but we recommend that you always uninstall the old version before installing the new.If you keep both versions of CP500Soft use may receive error messages.`, votes: 3, questionId: 27, userId: 37, createdAt: new Date(), updatedAt: new Date()},
{ answer: `Projects will not be crashed and there is no need to move them.`, votes: 6, questionId: 28, userId: 28, createdAt: new Date(), updatedAt: new Date()},
{ answer: `Yes, old projects can be opened in the new version of CP500Soft without any problems.`, votes: 58, questionId: 29, userId: 19, createdAt: new Date(), updatedAt: new Date()},
{ answer: `You can NOT open projects made with the new version of CP500Soft in an older version of CP500Soft`, votes: 48, questionId: 30, userId: 7, createdAt: new Date(), updatedAt: new Date()},
{ answer: `We ALWAYS recommend using the latest / newest CP500Soft together with the latest / newest version of the system program in the panel.This is the combination that we test so this is what we support and test.`, votes: 65, questionId: 31, userId: 27, createdAt: new Date(), updatedAt: new Date()},
{ answer: `- It's not possible to use 2 bare code in same time, the terminal does not support any station (multidrop) handling.
But it's possible to connect the barcode readers via a relay. Then can you switch between which of the readers that are active. I think you also can connect them direct to the terminal but only one can be active at a time.
The terminal does not know from which barcode reader the data comes from, this must you take care of in the PLC.

- It exist some bare code with Modbus option.`, votes: -5, questionId: 32, userId: 23, createdAt: new Date(), updatedAt: new Date()},
{ answer: `Maybe you don't have the Rights, please verify you have Administrator rights !`, votes: 32, questionId: 33, userId: 30, createdAt: new Date(), updatedAt: new Date()},
{ answer: `CP501 have an independent driver and AC500 variables are not available, but Generic Modbus is available.`, votes: 16, questionId: 34, userId: 9, createdAt: new Date(), updatedAt: new Date() },
{ answer: `AC500 I/O are not available directly, you have to affect them to internal Modbus variables in the AC500 products.`, votes: -9, questionId: 35, userId: 34, createdAt: new Date(), updatedAt: new Date() },
{ answer: `Import of variable could be done with text files, or for AC31 and AC500, directly with the exported files from 907AC1131 or PS501 softwares. Install_Modbus_ABB_NameImport.bat and Install_Modbus_ABB_NameImport.exe needed (double click on .bat file), file available with AC500 Driver on Web`, votes: 3, questionId: 36, userId: 40, createdAt: new Date(), updatedAt: new Date() },
{ answer: `You musn't have a project open. Click on parameters and change the language.`, votes: 28, questionId: 37, userId: 11, createdAt: new Date(), updatedAt: new Date() },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Answers', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
