#!/usr/bin/env bash
npm config get registry
npm config set registry = http://registry.npmjs.org
echo '请进行登录操作:'
npm log # 登录
echo "-------publishing------"
npm publish # 发布
npm config set registry=https://registry.npm.taobao.org
echo "发布成功"
exit
