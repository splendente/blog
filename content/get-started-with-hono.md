---
title: "Honoに入門してみる"
description: "Honoについての個人的なメモ。"
icon: "&#128293;"
createdAt: "2024-4-11"
updatedAt: "2024-4-11"
tags: ['Hono']
---

- [公式サイト](https://hono.dev/)

HonoはCDNのエッジで動く高速なWebフレームワーク。  
Cloudflareだけでなく、FastlyやAWS Lambda、Vercelなどでも動くらしい。  

## Honoのインストール

npmを使用してインストールする場合、下記のコマンドを実行する。  

```shell
npm create hono@latest my-app
```

プロジェクトを作成することができたら下記のコマンドを実行し、アプリを起動する。  

```shell
npm run dev
```

[http://localhost:8787](http://localhost:8787)にアクセスし、「Hello Hono!」と表示されることを確認。  
