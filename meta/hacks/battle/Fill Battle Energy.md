---
name: "Fill Battle Energy"
---

Fills your battle energy (used for All Out Attack, Relic Spells, Wand Spells, etc.), if you're in PvP, PvE, most battles.


```typescript
_.instance.state.getCurrentState().teams[0].setEnergy(99);
```