# Contributing

Hacking Prodigy used to be as easy as `PIXI.game.prodigy.player.gold=999`, but now we need a whole team!

If you'd like to join as an official collaborator, you can message us on [our official Discord server](https://dsc.gg/ProdigyPNP)!

Additionally, please read our [Code of Conduct](https://github.com/ProdigyPNP/ProdigyMathGameHacking/blob/master/.github/CODE_OF_CONDUCT.md) before continuing.

---

## The Goal of [ProdigyPNP](https://github.com/ProdigyPNP/ProdigyMathGameHacking)

Our main goal in this repository is to bring Prodigy's attention to their game's architecture.

Most of the data stuff is handled on the client side, so hacking is as easy as changing a variable. No pwn needed!

Since we've started this repository, Prodigy's security has improved by leaps and bounds, but the main issue is still the same;
once you get to the player variable, you can easily change anything you want.

Ideally everything would be handled server side. For example, arena points are already handled properly. The only way to increment arena points is by sending a "win" event, which is rate limited to once per minute.

## Tasks

There are lots of things to do! (Ranked from easiest to hardest)

### Research

As the name indicates, research. Research includes:

- Looking for new endpoints to mess around with
- Reading the Prodigy source extensively
- Reporting broken hacks
- Suggesting new hack ideas

Requirements:

- Basic coding skills, mainly in JavaScript and TypeScript
- Basic understanding of what an API is (the bar is super low huh)
- Reading skills ;p

Anybody can do this! If you want to help with any of these, you can post your findings in [Discussions](https://github.com/ProdigyPNP/ProdigyMathGameHacking/discussions), or [our official Discord](https://dsc.gg/ProdigyPNP).

### Typings

Basically just typescript definitions for Prodigy objects. An understanding of how to implement the types is also necessary.

Requirements:

- lots of spare time

If you make a PR with Typings, [Will](https://github.com/MelnCat) will will you into his Will will. <3




### [The Hack GUI](https://github.com/Prodigy-Hacking/ProdigyMathGameHacking/tree/master/willsCheatMenu)

[The Hack GUI](https://github.com/Prodigy-Hacking/ProdigyMathGameHacking/tree/master/willsCheatMenu)! Written in Typescript, it gives a visual cheat menu, with tons of handy dandy hacks in one place. No more copy pasting required!

Requirements:

- Javascript/Typescript knowledge
- Basic knowledge of how to use the command line
- Basic knowledge of Node.js/npm syntax
- A good personality

you can build it from `./willsCheatMenu` with `webpack`.

### [Browser Extension](https://chrome.google.com/webstore/detail/prodigy-hacking-extension/gjabpajagbgoifbkflgojeojmnlmioea)

We used to rely on the Chrome extension "Redirector", and "Anti-CSP", but due to some extra anti-cheats from Prodigy, we've decided to roll our own extension.

The extension does a few things (only on Prodigy domains):

- disable CSP, so we can inject our scripts
- disable Prodigy's official game files, and load our hacked files
- hehehehehehe

We usually don't need help with this, it almost never changes, When it does change, we usually need
*extremely skilled* researchers to figure out the problem, and fix it.

#### [P-NP](https://github.com/ProdigyPNP/P-NP) (aka Redirector)

Redirector was made by [Will](https://github.com/MelnCat). Thanks, [Will](https://github.com/MelnCat)!

It just edits the game's script so we can bypass any clientside anti-cheats, and expose the special sauce objects we desire.

[Redirector]((https://github.com/ProdigyPNP/P-NP)) is written in Typescript. It also comes in its own repository!

To build:

```cmd
npm tsc
```

We usually don't require help with [Redirector](https://github.com/Prodigy-Hacking/P-NP), but it's pretty important to know it exists.

Because we can edit the game script, we can also import external scripts, such as the [Cheat GUI](https://github.com/ProdigyPNP/ProdigyMathGameHacking/tree/master/willsCheatMenu).

## Your contributions are licensed under the [MPL 2.0 software license](https://github.com/ProdigyPNP/ProdigyMathGameHacking/blob/master/LICENSE.txt)

When you submit anything here, your contributions will be licensed under [the MPL 2.0 license](https://www.mozilla.org/en-US/MPL/2.0/). Contact a collaborator if this is an issue to you.

## We Develop with [GitHub](https://github.com)

We use [GitHub](https://github.com) to host code, track [issues](https://github.com/ProdigyPNP/ProdigyMathGameHacking/issues) and feature requests, and provide you with this work.
