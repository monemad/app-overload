'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Answers', [
        { answer: `As mentioned in the comments, your code should work. I'll list some steps which can be used to try to find the problem.

Show debug info
Set DEBUG =* in your environment.DEBUG is an environment variable which controls logging for many Node modules.You'll be able to see the flow of a request through Express. If there is too much info, you can limit the output like so: DEBUG=*,-babel,-babel:*,-nodemon,-nodemon:*,-router:layer,-follow-redirects,-send (use a comma-separated list and put a - in front of any module you'd like to exclude)

    This should help you trace the life of a request through the various routers and routes.You're now in a position to...

    Check for another route that is short - circuiting the request
    The fact that you're seeing an HTML page when the Express route is sending an object might indicate that your request is matching a different route. Look for catch-all routes such as non-middleware app.use() or wildcard routes which appear ABOVE your route.

    Other suggestions
    Don't explicitly set the status
    Adding.status(200) is more code and unnecessary.

    Use res.json()
    Use.json() instead of.send().If will always add the Content - Type: application / json header, whereas.send() will not when it cannot determine the content type(e.g. .send(null) or.send('hello') will not set the Content Type header to application / json, which may confuse clients).`, votes: 8, questionId: 1, userId: 38, createdAt: new Date(), updatedAt: new Date()},
{ answer: `Use dynamicUrlToDependencies option of Service Worker Precache to cache your route url and its dependencies.Then set navigateFallback to '/' and navigateFallbackWhitelist to a regex matching your sublinks logic.

    Take this configuration: (Add const glob = require('glob') atop of your webpack config)`, votes: 43, questionId: 2, userId: 2, createdAt: new Date(), updatedAt: new Date()},
{ answer: `That use case should be supported.I have an example of something similar using the underlying sw- precache library, and I believe the syntax should be equivalent when using the Webpack wrapper.

In this case, /shell is the URL used for dynamically generated content from the server, constituting the App Shell, but it sounds like your use case is similar, with / instead of / shell.`, votes: 74, questionId: 2, userId: 34, createdAt: new Date(), updatedAt: new Date()},
{ answer: `To answer your main question, the CORS spec only requires the OPTIONS call to precede the POST or GET if the POST or GET has any non - simple content or headers in it.

  Content - Types that require a CORS pre - flight request(the OPTIONS call) are any Content - Type except the following:

application / x - www - form - urlencoded
multipart / form - data
text / plain
Any other Content - Types apart from those listed above will trigger a pre - flight request.

As for Headers, any Request Headers apart from the following will trigger a pre - flight request:

Accept
Accept - Language
Content - Language
Content - Type
DPR
Save - Data
Viewport - Width
Width
Any other Request Headers will trigger the pre - flight request.

  So, you could add a custom header such as: x - Trigger: CORS, and that should trigger the pre - flight request and hit the OPTIONS block.

See MDN Web API Reference - CORS Preflighted requests
  `, votes: 26, questionId: 3, userId: 2, createdAt: new Date(), updatedAt: new Date()},
{ answer: `I found the easiest way is to use the node.js package cors.There are, of course many ways to configure the behaviour to your needs; the page linked above shows a number of examples.`, votes: 8, questionId: 3, userId: 21, createdAt: new Date(), updatedAt: new Date()},
{ answer: `Try passing control to the next matching route.If Express is matching app.get route first, then it won't continue onto the options route unless you do this (note use of next): In terms of organising the CORS stuff, I put it in a middleware which is working well for me:`, votes: 29, questionId: 3, userId: 6, createdAt: new Date(), updatedAt: new Date()},
{ answer: `This is because require() does not exist in the browser/client-side JavaScript.

Now you're going to have to make some choices about your client-side JavaScript script management.

You have three options:

Use the < script > tag.
Use a CommonJS implementation.It has synchronous dependencies like Node.js
Use an asynchronous module definition (AMD) implementation.
CommonJS client side - implementations include(most of them require a build step before you deploy):

Browserify - You can use most Node.js modules in the browser.This is my personal favorite.
  Webpack - Does everything(bundles JavaScript code, CSS, etc.).It was made popular by the surge of React, but it is notorious for its difficult learning curve.
    Rollup - a new contender.It leverages ES6 modules and includes tree - shaking abilities(removes unused code).
You can read more about my comparison of Browserify vs(deprecated) Component.

AMD implementations include:

RequireJS - Very popular amongst client - side JavaScript developers.It is not my taste because of its asynchronous nature.
  Note, in your search for choosing which one to go with, you'll read about Bower. Bower is only for package dependencies and is unopinionated on module definitions like CommonJS and AMD.`, votes: 25, questionId: 4, userId: 6, createdAt: new Date(), updatedAt: new Date()},
{ answer: `I am coming from an Electron environment, where I need IPC communication between a renderer process and the main process. The renderer process sits in an HTML file between script tags and generates the same error. throws the Uncaught ReferenceError: require is not defined

I was able to work around that by specifying Node.js integration as true when the browser window(where this HTML file is embedded) was originally created in the main process.That solved the issue for me.The solution was proposed here.`, votes: 97, questionId: 4, userId: 39, createdAt: new Date(), updatedAt: new Date()},
{ answer: `ES6: In HTML, include the main JavaScript file using attribute type = ""module "" (browser support):

<script type="" module"" src = ""script.js"" ></script >
  And in the script.js file, include another file like this:

import { hello } from './module.js';
...
// alert(hello());
Inside the included file(module.js), you must export the function/class that you will import:

export function hello() {
  return ""Hello World"";
}
A working example is here.More information is here.`, votes: 39, questionId: 4, userId: 13, createdAt: new Date(), updatedAt: new Date()},
{ answer: `In Express it's already done for you and you can simply use req.query for that:

var id = req.query.id; // $_GET[""id""]
Otherwise, in NodeJS, you can access req.url and the builtin url module to url.parse it manually:

var url = require('url');
var url_parts = url.parse(request.url, true);
var query = url_parts.query; `, votes: 36, questionId: 5, userId: 20, createdAt: new Date(), updatedAt: new Date()},
{ answer: `Since you've mentioned Express.js in your tags, here is an Express-specific answer: use req.query. E.g.

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('id: ' + req.query.id);
});

app.listen(3000); `, votes: 58, questionId: 5, userId: 8, createdAt: new Date(), updatedAt: new Date()},
{ answer: `There are a lot of details in the File System API.The most common way is:

const fs = require('fs'); `, votes: 41, questionId: 6, userId: 27, createdAt: new Date(), updatedAt: new Date()},
{ answer: `Currently there are three ways to write a file:

fs.write(fd, buffer, offset, length, position, callback)

You need to wait for the callback to ensure that the buffer is written to disk.It's not buffered.

fs.writeFile(filename, data, [encoding], callback)

All data must be stored at the same time; you cannot perform sequential writes.

  fs.createWriteStream(path, [options])

Creates a WriteStream, which is convenient because you don't need to wait for a callback. But again, it's not buffered.`, votes: 77, questionId: 6, userId: 36, createdAt: new Date(), updatedAt: new Date()},
{ answer: `You might have guessed it already: it's a connection error.

""ECONNRESET"" means the other side of the TCP conversation abruptly closed its end of the connection.This is most probably due to one or more application protocol errors.You could look at the API server logs to see if it complains about something.

But since you are also looking for a way to check the error and potentially debug the problem, you should take a look at ""How to debug a socket hang up error in NodeJS ? "" which was posted at stackoverflow in relation to an alike question.`, votes: 46, questionId: 7, userId: 1, createdAt: new Date(), updatedAt: new Date()},
{ answer: `A simple tcp server I had for serving the flash policy file was causing this.I can now catch the error using a handler:

# serving the flash policy file
net = require(""net"")`, votes: 38, questionId: 7, userId: 10, createdAt: new Date(), updatedAt: new Date()},
{ answer: `I had a similar problem where apps started erroring out after an upgrade of Node.I believe this can be traced back to Node release v0.9.10 this item:

net: don't suppress ECONNRESET (Ben Noordhuis)
Previous versions wouldn't error out on interruptions from the client. A break in the connection from the client throws the error ECONNRESET in Node. I believe this is intended functionality for Node, so the fix (at least for me) was to handle the error, which I believe you did in unCaught exceptions. Although I handle it in the net.socket handler.

You can demonstrate this:

Make a simple socket server and get Node v0.9.9 and v0.9.10.`, votes: 16, questionId: 7, userId: 8, createdAt: new Date(), updatedAt: new Date()},
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Answers', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
