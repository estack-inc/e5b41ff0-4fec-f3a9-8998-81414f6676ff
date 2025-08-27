# AI エージェントによる開発のススメ - Claude Code セミナー

## 概要

本セミナーでは、Anthropic 社の AI 開発アシスタント「Claude Code」を使用した効率的な開発手法を学びます。
自然言語での指示によるコード生成、デバッグ支援、リファクタリングなど、AI エージェントを活用した新しい開発体験を実践的に体験いただけます。

## セミナー情報

- **時間**: 3時間
- **対象者**: プログラミング基礎知識がある開発者
- **必要環境**: Mac (macOS 10.15 以降)、Claude Pro サブスクリプション
- **形式**: ハンズオン形式

## タイムテーブル

| 時間 | 内容 | 詳細 |
|------|------|------|
| 5分 | イントロダクション | AI エージェント開発の現在地と Claude Code の紹介 |
| 10分 | 環境構築 | Claude CLI のインストールと初期設定 |
| 10分 | サンプルプログラム改修 | 既存コードのバグ修正と機能追加をデモ |
| 5分 | Claude Code でできること | 主要機能と活用例の紹介 |
| 10分 | 既存プロジェクトへの活用 | claude init による CLAUDE.md 活用方法 |
| 2時間20分 | ハンズオン | ポモドーロタイマー Web アプリの開発 |

## 学習目標

### 基本スキル
- Claude Code の基本操作を習得
- 自然言語での効果的な指示方法を理解
- AI アシスタントとの協働開発フローを体験

### 実践スキル
- 既存コードの改修とデバッグ
- ゼロから Web アプリケーションを構築
- エラー対処とトラブルシューティング

## ハンズオン内容

### ポモドーロタイマー Web アプリ開発

25分作業・5分休憩を繰り返す時間管理ツールを Claude Code と共に開発します。

#### 実装機能
- タイマー機能（カウントダウン表示）
- 開始・停止・リセット機能
- 作業/休憩モードの切り替え
- 完了通知（音声・視覚）
- タスクリスト管理（オプション）
- 統計表示（オプション）

## ディレクトリ構成

```
study/
├── README.md                 # このファイル
├── seminar_slides.md         # セミナースライド（Markdown形式）
├── sample_project/           # デモ用サンプルプロジェクト
│   ├── index.html           # カウンターアプリ HTML
│   └── script.js            # カウンターアプリ JavaScript（バグあり）
└── handson_project/          # ハンズオン用ワークスペース
    └── README.md            # ハンズオンガイド
```

## 事前準備

### 1. Homebrew のインストール確認
```bash
brew --version
```

インストールされていない場合：
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. Claude CLI のインストール
```bash
brew install claude-code
claude --version
```

### 3. Claude Console アカウント作成と API キーの取得

#### アカウント作成
1. <a href="https://console.anthropic.com" target="_blank">Claude Console</a> にアクセス
2. 「Continue with Google」をクリック
3. **弊社 Google Workspace アカウント**でログイン
   - 事前に IT 管理者から招待を受けてください
   - メールアドレス: yourname@company.com
4. 利用規約に同意して続行

#### API キーの生成
1. Claude Console にログイン後、「API Keys」セクションへ
2. 「Create Key」ボタンをクリック
3. キーの名前を入力（例: "seminar-dev"）
4. 生成された API キー（sk-ant-xxx...）を安全な場所に保存
   - **注意**: API キーは一度しか表示されません

## セミナー当日の流れ

### 環境セットアップ
1. API キーの設定
   ```bash
   claude auth set-key
   ```
2. 動作確認
   ```bash
   claude chat "こんにちは"
   ```

### デモセッション
sample_project ディレクトリのカウンターアプリを使用して、Claude Code の基本操作を実演します。

### ハンズオンセッション
handson_project ディレクトリで実際にポモドーロタイマーを開発します。

## Claude Code 活用のコツ

### 効果的な指示の出し方

#### ✅ 良い例
- 具体的で明確な要求
- 段階的な指示
- エラーメッセージの共有

```
"25分のカウントダウンタイマーを実装してください。
MM:SS 形式で表示し、0になったら通知音を鳴らしてください"
```

#### ❌ 避けるべき例
- 曖昧な指示
- 複数タスクの同時要求
- 抽象的な表現

```
"もっと良くして"
"全部作って"
```

### トラブルシューティング

| 問題 | 対処法 |
|------|--------|
| Claude が応答しない | API キーと接続を確認 |
| ファイルが作成されない | ディレクトリの権限を確認 |
| コードが動作しない | エラーメッセージを Claude に共有 |
| 期待と異なる結果 | より具体的な指示で再依頼 |

## 参考リソース

### Claude 関連
- [Claude Documentation](https://docs.anthropic.com)
- [Claude API Reference](https://docs.anthropic.com/claude/reference)
- [Claude Console](https://console.anthropic.com)

### Web 開発
- [MDN Web Docs](https://developer.mozilla.org)
- [JavaScript.info](https://javascript.info)
- [CSS-Tricks](https://css-tricks.com)

### ポモドーロテクニック
- [Pomodoro Technique 公式](https://francescocirillo.com/products/the-pomodoro-technique)
- [生産性向上メソッド](https://todoist.com/productivity-methods)

## サポート

セミナー中に問題が発生した場合は、講師またはアシスタントにお声がけください。

## ライセンス

本セミナー資料は教育目的での利用を前提としています。