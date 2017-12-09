# webextension-typescript-template

## これは何？

Webextensionsでいつも使ってるVisual Studio Code用のTypescriptテンプレート。

実験的なコードのために毎回manifest.jsonを書くのが面倒だったので。

## 構成

- Typescriptと一緒にSASSもビルドする
- gulpでビルドする
- ローカライズする（_locales/ja/messages.json）
- サイドバーあり
- ポップアップあり

## 使い方

srcフォルダの中の.tsファイルおよび.scssファイルがdistフォルダに展開される。gulpfile.js参照。

## チェックリスト

- [ ] manifest.json の書き換え
- [ ] package.json の書き換え
- [ ] _locales/ja/messages.json の書き換え。ローカライズが不要な場合は _locales を削除
- [ ] フォルダ名を変える
- [ ] .git を削除
- [ ] `yarn install`

## 実行

1. `gulp`で.tsファイルや.scssファイルをビルドする
2. Firefox のアドレスバーに`about:debugging`を入力
3. 「一時的なアドオンを読み込む」ボタンをクリックする
4. manifest.json を選択する