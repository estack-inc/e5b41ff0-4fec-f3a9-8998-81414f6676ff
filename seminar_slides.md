# AIエージェントによる開発のススメ
## Claude Code で変わる開発体験

---

## 本日のアジェンダ

1. **イントロダクション** (5分)
2. **Claude Code 環境構築** (10分)
3. **サンプルプログラム改修** (10分)
4. **Claude Code でできること** (5分)
5. **ハンズオン** (2時間30分)

<div style="color: #F29702; font-weight: bold;">
合計：3時間
</div>

---

## 第1部：イントロダクション

### AI エージェント開発の現在地

- **従来の開発**
  - コードを自分で書く
  - Stack Overflow で検索
  - ドキュメントを読む
  - 試行錯誤の繰り返し

- **AI エージェント開発**
  - 自然言語で指示
  - コードの自動生成
  - リアルタイムのデバッグ支援
  - ベストプラクティスの提案

---

### Claude Code とは？

**Anthropic 社が提供する AI 開発アシスタント**

#### 特徴
- 🎯 高精度なコード生成
- 🔍 コンテキストの深い理解
- 🛠️ ファイル操作・実行が可能
- 💬 自然な対話形式

#### 他の AI ツールとの違い
- GitHub Copilot：コード補完特化
- ChatGPT：対話のみ（ファイル操作不可）
- **Claude Code**：ファイル操作 + 実行 + 対話

---

### 本日のゴール

<div style="background: linear-gradient(135deg, #F29702 0%, #FFA500 100%); padding: 20px; border-radius: 10px; color: white;">

### 🎯 体験していただくこと

1. **Claude Code の基本操作**を習得
2. **既存コードの改修**を体験
3. **ゼロから Web アプリ**を完成
4. AI エージェント開発の**可能性**を実感

</div>

---

## 第2部：Claude Code 環境構築

### 必要なもの

- ✅ Mac (macOS 10.15 以降)
- ✅ インターネット接続
- ✅ Anthropic アカウント
- ✅ Claude Pro サブスクリプション

---

### Step 1: Homebrew のインストール

```bash
# Homebrew がインストールされているか確認
brew --version

# インストールされていない場合
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

---

### Step 2: Claude CLI のインストール

```bash
# Claude CLI をインストール
brew install claude

# インストール確認
claude --version
```

<div style="background: #fff3cd; padding: 10px; border-left: 4px solid #F29702; margin: 10px 0;">
⚠️ <strong>注意</strong>: 最新版であることを確認してください
</div>

---

### Step 3: API キーの設定

1. [Claude Console](https://console.anthropic.com) にアクセス
2. API Keys セクションから新規キー作成
3. ターミナルで設定

```bash
# API キーを設定
claude auth set-key

# プロンプトが表示されたら API キーを貼り付け
# Enter your API key: sk-ant-xxxxxxxxxxxxx
```

---

### Step 4: 動作確認

```bash
# 簡単な質問で動作確認
claude chat "こんにちは、今日は良い天気ですね"

# プロジェクトモードで起動
claude
```

成功すると Claude Code のインタラクティブモードが起動します！

---

### 補足：VSCode 拡張機能

VSCode をお使いの方は拡張機能版も利用可能

1. VSCode の拡張機能メニューを開く
2. "Claude" で検索
3. Anthropic 公式の拡張機能をインストール
4. API キーを設定

<div style="color: #F29702;">
💡 CLI 版の方が高機能なため、今回は CLI を使用します
</div>

---

## 第3部：サンプルプログラム改修

### デモ：カウンターアプリの改修

既存の JavaScript プログラムを Claude Code で改修します

#### 改修内容
1. 🐛 バグ修正（カウントが増えない）
2. ➕ 機能追加（リセットボタン）
3. 🎨 デザイン改善（スタイリング）

---

### Claude Code での改修手順

```bash
# プロジェクトディレクトリに移動
cd sample_project

# Claude Code を起動
claude

# 自然言語で指示
"index.html と script.js を読んで、カウンターが動かないバグを修正してください"
```

---

### 改修のポイント

#### 1. コンテキストの理解
```
"このプロジェクトの構造を教えてください"
```

#### 2. バグの特定と修正
```
"カウンターが増えない原因を調査して修正してください"
```

#### 3. 機能追加
```
"リセットボタンを追加して、カウントを0に戻せるようにしてください"
```

---

## 第4部：Claude Code でできること

### 主要機能

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">

<div style="border: 2px solid #F29702; padding: 15px; border-radius: 8px;">

#### 🔨 コード生成
- 関数・クラスの実装
- API エンドポイント作成
- UI コンポーネント生成

</div>

<div style="border: 2px solid #F29702; padding: 15px; border-radius: 8px;">

#### 🔧 リファクタリング
- コードの最適化
- 可読性の向上
- パフォーマンス改善

</div>

<div style="border: 2px solid #F29702; padding: 15px; border-radius: 8px;">

#### 🧪 テスト作成
- ユニットテスト
- 統合テスト
- E2E テスト

</div>

<div style="border: 2px solid #F29702; padding: 15px; border-radius: 8px;">

#### 📝 ドキュメント生成
- README 作成
- API ドキュメント
- コメント追加

</div>

</div>

---

### 実用例

#### バックエンド開発
```javascript
"Express.js で REST API を作成してください。
 ユーザーの CRUD 操作ができるようにして、
 JWT 認証も実装してください"
```

#### フロントエンド開発
```javascript
"React でダッシュボードコンポーネントを作成してください。
 グラフ表示と、データのフィルタリング機能を含めてください"
```

#### デバッグ
```javascript
"このエラーメッセージの原因を調査して修正してください：
 TypeError: Cannot read property 'map' of undefined"
```

---

### Claude Code の強み

1. **ファイル操作が可能**
   - 直接ファイルを作成・編集
   - ディレクトリ構造の操作

2. **コマンド実行**
   - npm/yarn コマンドの実行
   - Git 操作
   - テスト実行

3. **プロジェクト全体の理解**
   - 依存関係の把握
   - アーキテクチャの理解
   - ベストプラクティスの適用

---

## 第5部：ハンズオン準備

### 本日作成するアプリ

<div style="background: #F29702; color: white; padding: 20px; border-radius: 10px; text-align: center;">

## 🍅 ポモドーロタイマー Web アプリ

生産性向上のための時間管理ツール

</div>

---

### ポモドーロテクニックとは？

**25分作業 → 5分休憩** を繰り返す時間管理術

#### メリット
- 🎯 集中力の維持
- 💪 疲労の軽減
- 📈 生産性の向上
- ⏰ 時間感覚の改善

---

### 実装する機能

#### 基本機能
- ⏱️ **タイマー機能**（25分/5分）
- ▶️ **開始・停止・リセット**
- 🔔 **通知機能**（音声・視覚）

#### 追加機能（時間があれば）
- 📝 **タスクリスト**
- 📊 **統計表示**（完了ポモドーロ数）
- 🎨 **テーマ切り替え**
- 💾 **データ保存**（LocalStorage）

---

### ハンズオンの進め方

#### Phase 1: プロジェクトセットアップ（15分）
```bash
"ポモドーロタイマーの Web アプリを作成します。
 HTML、CSS、JavaScript でシンプルな構成にしてください"
```

#### Phase 2: 基本機能実装（30分）
```bash
"25分のタイマーを実装してください。
 スタート、ストップ、リセットボタンを追加してください"
```

#### Phase 3: UI/UX 改善（15分）
```bash
"デザインを改善してください。
 モダンで使いやすいUIにしてください"
```

---

### Claude Code 活用のコツ

#### 1. 段階的な指示
❌ 悪い例：
```
"ポモドーロタイマーを作って"
```

✅ 良い例：
```
"まず HTML で基本的なタイマーのUIを作成してください。
 時間表示とボタンを配置してください"
```

---

#### 2. 具体的な要求
❌ 悪い例：
```
"もっと良くして"
```

✅ 良い例：
```
"タイマーの文字を大きくして、
 中央に配置してください。
 フォントは見やすいものを選んでください"
```

---

#### 3. エラー時の対処
```bash
# エラーメッセージをそのまま伝える
"このエラーを修正してください：
 [エラーメッセージをペースト]"

# 原因を調査してもらう
"なぜこのエラーが発生しているか調査してください"

# 代替案を求める
"別の方法で実装できますか？"
```

---

### トラブルシューティング

#### よくある問題と対処法

| 問題 | 対処法 |
|------|--------|
| Claude Code が応答しない | API キーを再確認 |
| ファイルが作成されない | 権限を確認 (`chmod`) |
| JavaScript が動作しない | ブラウザのコンソールを確認 |
| デザインが崩れる | CSS のリセットを追加 |

---

## ハンズオン開始！

### 準備はいいですか？

1. ✅ Claude Code が起動できる
2. ✅ 作業ディレクトリを作成済み
3. ✅ ブラウザを準備（Chrome/Safari推奨）

<div style="background: #F29702; color: white; padding: 20px; border-radius: 10px; text-align: center; margin: 20px 0;">

### 🚀 Let's Start!

```bash
cd ~/Desktop
mkdir pomodoro-timer
cd pomodoro-timer
claude
```

</div>

---

## 参考リンク

### Claude 関連
- [Claude Documentation](https://docs.anthropic.com)
- [Claude API Reference](https://docs.anthropic.com/claude/reference)
- [Claude Console](https://console.anthropic.com)

### 学習リソース
- [MDN Web Docs](https://developer.mozilla.org)
- [JavaScript.info](https://javascript.info)
- [CSS-Tricks](https://css-tricks.com)

### ポモドーロ関連
- [Pomodoro Technique](https://francescocirillo.com/products/the-pomodoro-technique)
- [Time Management Tips](https://todoist.com/productivity-methods)

---

## アンケート

セミナー終了後、以下の点についてフィードバックをお願いします：

1. Claude Code の使いやすさ（5段階評価）
2. 最も役立った機能
3. 改善してほしい点
4. 実際の業務で使ってみたいか
5. その他のご意見・ご感想

<div style="color: #F29702; font-weight: bold; text-align: center; margin-top: 20px;">
📧 フィードバックフォーム URL は後日送付します
</div>

---

## Q&A

### ご質問をどうぞ！

- Claude Code の機能について
- 実装で困ったこと
- 業務での活用方法
- その他なんでも

<div style="background: #F29702; color: white; padding: 20px; border-radius: 10px; text-align: center; margin-top: 30px;">

### 本日はありがとうございました！

AI エージェントと共に、より効率的な開発を！

</div>