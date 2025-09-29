class HelloPlugin {
  constructor() {
    this.name = 'hello';
    this.version = '1.0.0';
  }

  async onMessage(event, ctx) {
    const msg = event.d.content;
    const channelId = event.d.channel_id;

    if (msg === '你好') {
      await ctx.sendMessage(channelId, '你好呀，我是动态加载的插件 🤖');
    }
  }
}

module.exports = HelloPlugin;
