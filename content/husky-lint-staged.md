---
title: "Huskyとlint-stagedの設定手順"
description: "2024年3月26日時点のHuskyとlint-stagedの設定手順についてまとめる。"
icon: "&#129529;"
createdAt: "2024-3-26"
updatedAt: "2024-3-26"
---

## パッケージ情報

| パッケージ名 | バージョン |
| ---- | ---- |
| [Husky](https://github.com/typicode/husky) | 9.0.11 |
| [lint-staged](https://github.com/lint-staged/lint-staged) | 15.2.2 |

## Huskyとlint-stagedをインストールする

Huskyとlint-stagedを開発環境で使用するため、devDependenciesにパッケージをインストールします。

```
npm install -D husky lint-staged
```

## Huskyの初期化

huskyを初期化します。

```
npx husky init
```

## pre-commitの追加

pre-commitでlint-stagedが実行されるようにコマンドを.husky/pre-commitに追加します。

```
echo "npx lint-staged" > .husky/pre-commit
```

## package.jsonを修正

package.jsonにlint-stagedの設定を追記します。

```json
{
  "scripts": {
    "prepare": "husky"
  },
  "lint-staged": {
    "*": "npm run xxxx"
  },
}
```
