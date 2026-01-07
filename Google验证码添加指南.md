# ✅ Google验证码添加指南

---

## 📋 您的Google验证码

```
70zK_DTbwyOh7iPY_L1jp6drMWF4NQNFRUELAlTdW5M
```

---

## 🎯 添加到网站（2分钟）

### 步骤1：打开 index.html 编辑

1. 访问 GitHub 仓库：https://github.com/kosok88/hainan-solana-website-v2
2. 点击 **index.html** 文件
3. 点击右上角 **✏️ 编辑按钮**

---

### 步骤2：找到验证码位置

按 **Ctrl+F** 搜索：

```
GOOGLE_VERIFICATION_CODE_PLACEHOLDER
```

应该在第 20 行左右，会看到：

```html
<meta name="google-site-verification" content="GOOGLE_VERIFICATION_CODE_PLACEHOLDER" />
```

---

### 步骤3：替换验证码

把整行替换为：

```html
<meta name="google-site-verification" content="70zK_DTbwyOh7iPY_L1jp6drMWF4NQNFRUELAlTdW5M" />
```

**或者，只替换中间的部分：**

把 `GOOGLE_VERIFICATION_CODE_PLACEHOLDER` 替换成 `70zK_DTbwyOh7iPY_L1jp6drMWF4NQNFRUELAlTdW5M`

---

### 步骤4：保存并提交

1. 滚动到页面底部
2. 提交说明填写：`添加Google验证码`
3. 点击绿色按钮 **"Commit changes"**

---

### 步骤5：等待部署

⏰ 等待 **1-2 分钟**（GitHub Pages 自动部署）

---

### 步骤6：完成验证

1. 回到 Google Search Console
2. 点击 **"验证"** 按钮
3. 看到 ✅ **"所有权验证成功"**

---

### 步骤7：提交 Sitemap

验证成功后：
1. 左侧菜单找到 **"站点地图"**
2. 输入：`sitemap.xml`
3. 点击 **"提交"**
4. 完成！

---

## 🎉 完成后的效果

- ✅ Google 开始爬取您的网站
- ✅ 1-2周后搜索 `site:solana-hainan.com` 能看到结果
- ✅ 1-2个月后自然流量开始增长

---

## 📞 遇到问题？

如果验证失败：
1. 确认验证码正确替换
2. 等待2分钟确保网站已部署
3. 清除浏览器缓存
4. 再次点击"验证"

---

## ⚠️ 如果找不到 PLACEHOLDER

如果您的 index.html 里没有 `GOOGLE_VERIFICATION_CODE_PLACEHOLDER`，
那就直接在第 20 行左右（在其他 meta 标签附近）添加这一行：

```html
<meta name="google-site-verification" content="70zK_DTbwyOh7iPY_L1jp6drMWF4NQNFRUELAlTdW5M" />
```

添加在这些标签附近都可以：
```html
<meta name="googlebot" content="index, follow">
<meta name="baiduspider" content="index, follow">
👇 在这里添加 Google 验证码 👇
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5">
```

---

**开始操作吧！添加完成后告诉我！** 🚀
