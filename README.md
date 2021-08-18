# 🚀 Welcome to Dfinity IDE Project

ChainIDE uses a form of plug-in to support Dfinity's project engineering.

Users can use the Dfinity development function corresponding to ChainIDE by enabling this plug-in in ChainIDE.

### Plugin System Structure 插件项目结构
src is the main project directory 目录下为主项目目录   
extension.ts Is the project entry 为插件入口文件，暴露三个属性
- activate: 插件激活时，触发该函数，函数入参,
 - ctx: 插件内部上下午
 - Impl: 插件接口

- deactivate: 插件注销时，触发该函数
- config: 插件提供基本信息，详见 PluginConfigurations 类型
## API List
### Add the right control bar 添加右侧控制栏 
```typescript
    const addControls =  Impl.addControl({
        componentFunc: controls,
        name: 'Deploy & Interaction',
        iconName: 'GroupObject',
    })

    ctx.subscriptions.push(addControls)
```

### Set up welcome page 设置欢迎页
```typescript
    const setWelcomePage =  Impl.setWelcomePage({
        componentFunc: welcomePage,
        name: 'welcomePage',
        iconName: 'GroupObject',
    })

    ctx.subscriptions.push(setWelcomePage)
```

### Register command 注册命令
```typescript
    const setCommand =  Impl.registerCommand({
        id: 'commandId',
        name: 'command',
        callback: <T>(data?: T) => void,
    })

    ctx.subscriptions.push(setCommand)
```

### Registration method 注册方法
```typescript
    const registerFunction =  Impl.registerFunction({
        name: 'functionName',
        function: <T>(data?: T) => void,
    })

    ctx.subscriptions.push(registerFunction)
```
