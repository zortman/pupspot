# 🐾 PupSpot

A cozy logic puzzle game for Android. The board is split into colored **yards** — place exactly one pup in each, with no two pups sharing a row, a column, or touching (even diagonally). Deduce every spot, collect pups from themed crates, and chase a daily streak.

> A dog-themed take on the "one star per region" (Star Battle) puzzle, blending Sudoku-style logic with a Minesweeper-style hunt.

## 📥 Download & install

1. Go to the [**Releases**](https://github.com/zortman/PupSpot/releases/latest) page.
2. Download **`PupSpot-release.apk`**.
3. On your Android phone, open the file and allow "install from this source" when asked.
4. Install and play. It works **fully offline**.

The app checks this repo for new versions on launch and will prompt you to grab the latest APK from Releases when one is out. Installing a new APK over the old one keeps your progress.

## ✨ Features

- Hand-free logic puzzles with increasing board sizes (5×5 → 8×8)
- Earn **coins**, open **themed crates** (Park, Royal, Spooky, Cosmic) with a CS:GO-style roll
- 30+ collectible pups across rarities, including **0.1% secret** pups with aura effects
- Each equipped pup can re-skin the whole game with its own **theme** (devil, galaxy, …)
- **Daily Puzzle** (same for everyone each day) + day streaks
- Star ratings, quests with a 2× coin boost, sound + music + haptics, tutorial

## 🛠️ Building from source

Requires Node 18+, JDK 17, and the Android SDK (platform 34, build-tools 34).

```bash
npm install
npx cap sync android
cd android
./gradlew assembleDebug        # unsigned debug APK (no keystore needed)
```

The game itself is a single file: [`www/index.html`](www/index.html) (no build step — open it in a browser to play on desktop).

A **signed release** build additionally needs your own keystore and an `android/keystore.properties` (not included — signing keys are secret). See the project owner's `KEYSTORE-INFO.txt`.

## 📄 License

Game code © the author. Bundled fonts (Fredoka, Nunito) are under the SIL Open Font License.
