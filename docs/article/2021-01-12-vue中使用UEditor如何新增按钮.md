---
title: 'vue中使用UEditor如何新增按钮'
author: chenqi
date: 2021-01-12 14:22
tags:
  - '前端'
  - Vue
dataCategories:
  - 2021-01
---
> 在`CMS`项目中，使用`UEditor`作为富文本编辑器，由于上传视频功能需要自己改造，所以需要新增自定义按钮
## 环境
- `vue 2.5`
- `ueditor1_4_4_3`

## 操作
1. `ueditor.config.js`文件中 => 在`window.UEDITOR_CONFIG`的`toolbars`数组中新增`uploadvideo`项
2. 在`lang`中的`labelMap`下配置`'uploadvideo': '上传视频'`，使得鼠标移上去会显示 **上传视频** 字样
3. 修改`ueditor.all.min.js` 或者 `ueditor.all.js`中的配置（本人为历史遗留项目所以就拿`min`改了）
  - 全局搜`f = ["undo", "redo", "formatmatch" ...`的字样，不包含省略号，在数组后新增`uploadvideo`(`all.js`是`btnCmds`)
  - 搜`insertimage`， 在下面仿照写
  ```javascript
  UE.commands.uploadvideo = {
    execCommand: function(a, b) {
      // 自定义按钮上传视频
      this._vue.$emit('showUploadVideo')
    }
  }
  ```
  这里的`this._vue`是在初始化`UEditor`时绑定上去的`vue`实例
4. 这样我们就可以触发页面中打开上传`Dialog`的方法了