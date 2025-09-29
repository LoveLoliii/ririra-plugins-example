// hello.plugin.js
module.exports.init = (eventBus) => {
  console.log("[hello.plugin] initialized!");

  eventBus.on('message', (msg) => {
    if (msg.text === 'hello') {
      console.log("[hello.plugin] Bot replies: Hi!");
    }
  });
};
