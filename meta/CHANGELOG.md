# Timeline of PMGH

- **PIXI Ages**: `9/21/19 - 3/25/20`
  - During these times, `PIXI.game` was a thing. However, Prodigy hacks were not well known.
- **Phaser Day**: `3/25/20 - 3/26/20`
  - On this day, we used `Phaser.GAMES[0]`, only for it to be patched the day after.
- **Login.gameObj** Day: `3/26/20 - 3/27/20`
  - An alternative method was found. However, it only supported the player object. It was also patched after a day.
- **CanvasPool Days**: `3/27/20 - 3/30/20`
  - This method worked for longer. However, it was also quickly patched.
- **Cheat Dashboard Day**: `3/30/20 - 3/30/20`
  - A cheat dashboard was developed. However, it was not very good, which caused it to be unsupported the day after.
- **Dark Ages**: `4/1/20 - 4/7/20`
  - The first week of April was a sad week for Prodigy hacking. All known hacking methods were patched.
- **EnableDebug Breakthrough**: `4/07/20 - 4/09/20`
  - A way to enable debug mode was found, and worked for two days. However, debug was removed by Prodigy quickly after.
- **Prodigy Console Prevention**: `4/10/20`
  - On this day, Prodigy added the devtool disabler, which would cause a 404 on devtool open.
- **Debugger Scope Ages**: `4/12/20 - 4/15/20`
  - On these days, multiple variables were used to obtain the Prodigy's scopes, and access the `instance` objects.
- **Redirector Ages**: `4/15/20 - around 11/13/20`
  - After many days, the Redirector hack was created, which would use a modified version of prodigy's game files. This would not be patched for a very long time. It was suceeded by the extension
- **Content Security Patch**: `6/10/20`
  - On June 10th, Prodigy added content security headers. This caused the addition of another extension to help with hacks.
- **`hack.instance.prodigy.player` Patch**: `7/5/20 - 7/5/20`
  - On July 5th, Prodigy implemented a patch for `hack.instance.prodigy.player`. This was unpatched by ProdigyMathGameHacking about 3 hours later.
- **Script based hacks return**: `8/25/20`
  - On August 20th, we found a way to access the Prodigy API, and use hacks without the Redirector extension.
- **`_.instance.prodigy.player` Patch**: `9/17/20 - CURRENT`
  - On September 18th, Prodigy patched the `hack` variable by redirecting to a 404 page if the `hack` variable was detected. To unpatch this, we renamed the variable to `_`. Prodigy already uses `_`, so they can't delete it.
- **Chrome Extension Releases**: `10/21/20 - 11/11/20`
  - On October 21st, Google accepted the ProdigyMathGameHacking extension submission to the Chrome Web Store. The extension works exacatly the same as the Redirector Hack, but is much easier as you only have to install our extension without importing the JSON file into Redirector.
- **Chrome Extension Taken down**: `11/11/20`
  - On November 11th, Prodigy removed the PMGH Chrome extension via DMCA takedown.

- **Prodigy adds SHA256 Integrity Checks**: `11/13/20 - CURRENT`
  - On November 13th, Prodigy added extra security via integrity checking with sha256. This broke the hacks.

- **SHA256 Sumchecks bypassed**: `11/13/20 - 11/19/20`
  - On November 19th, Natsumi bypassed the SHA256 sumcheck, which fixed the hacks.
