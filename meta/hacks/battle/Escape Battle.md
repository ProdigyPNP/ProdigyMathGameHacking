---
name: "Escape Battle"
---

Instantly teleports you out of a battle that you're in.

```typescript
Object.fromEntries(_.instance.game.state.states)[currentState].runAwayCallback();
```