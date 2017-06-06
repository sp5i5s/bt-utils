### BT工具类库，部分依赖layer和axios
#### 安装
>     npm|cnpm install bt-utils
#### 使用
> 1. window.bt.https,支持get,post.put,delete<br>
> 2. window.bt.string,全局String校验，比如"test".is_empty(),"test".is_mobile();<br>
> 3. window.bt.array,数组操作类，常规去重、指定键与值返回实体<br>
> 4. window.bt.msg,全局消息，依赖layer插件，bt.msg.show('txt'),bt.msg.loading();<br>
> 5. window.bt.event,事件方法，bt.event.add(object,event_name,handle),bt.event.remove
> 6. window.bt.uri,URL处理类,获取当前URI或根据URL分解query
> 7. window.bt.window,窗口操作对象，获取当前窗体的宽高和访问设备
> 8. window.bt.object,对象操作类
> 9. window.bt.other,其他

具体可bt.log(bt)查看所有内容