---
title: 'Mac如何让 Finder 显示隐藏文件和文件夹'
author: chenqi
date: 2020-11-11 18:53
tags:
  - 'Mac'
dataCategories:
  - 2020-11
---

1. **第一步：** 打开「终端」应用程序。
2. **第二步：** 输入如下命令：开启隐藏文件的显示，并关掉所有 `finder`
```bash
defaults write com.apple.finder AppleShowAllFiles -boolean true;killall Finder
```
3. **第三步：** 回车，重新打开`finder`,大功告成

