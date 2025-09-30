如何创建莉莉菈插件：
- 新建一个入口文件；
- 使用
```npm init -y``` 
创建package.json并修改和填写以下属性：
    ```
    {
    "name": "my-plugin",
    "version": "1.0.0",
    "main": "main.js",
    "enabled": true,
    "source": { "type": "git", "url": "my-plugin" }
    }
    ```