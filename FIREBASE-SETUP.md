# Firebase setup for Google login + cloud save

To add "Sign in with Google" and cloud-synced progress, PupSpot needs a Firebase
project that **you** own. Follow these once, then send me the two things at the
bottom and I'll wire the login + sync into the app and ship v1.1.

## Your app's details (you'll need these in the console)

- **Android package name:** `com.pupspot.game`
- **Release SHA-1:** `5D:3E:28:11:D9:05:25:4F:EF:21:92:63:35:D8:F4:16:93:C9:8F:65`
- **Debug SHA-1:**   `6A:21:DD:5C:76:96:EE:63:4E:8E:6C:DD:8A:FA:97:87:88:FC:F9:AA`

## Steps

1. Go to https://console.firebase.google.com and click **Add project** (name it e.g. "PupSpot"). Google Analytics is optional.
2. In the project, click the **Android** icon to add an Android app:
   - Android package name: `com.pupspot.game`
   - Add BOTH SHA-1 fingerprints above (click "Add fingerprint" twice).
   - Download **`google-services.json`**.
3. Also add a **Web** app (the `</>` icon) in the same project — this gives the web
   config the game needs for Firestore. Copy the `firebaseConfig = { ... }` object it shows.
4. Left menu → **Build → Authentication → Get started → Sign-in method →** enable **Google**.
5. Left menu → **Build → Firestore Database → Create database** (Production mode is fine;
   I'll provide security rules so each player can only read/write their own save).

## Send me

- The **`google-services.json`** file, and
- The **`firebaseConfig`** object (apiKey, authDomain, projectId, appId, etc.) from step 3.

Then I'll:
- add `@capacitor-firebase/authentication` + the Firebase web SDK,
- put a **Sign in with Google** button in Settings,
- back up / restore your coins, pups, crates, level and streak to the cloud per account
  (with merge so you never lose local progress),
- rebuild, bump to v1.1, and publish a new Release (the in-app update checker will tell
  existing players to grab it).

> Keep `google-services.json` private-ish (it's not a hard secret, but no need to post it publicly).
