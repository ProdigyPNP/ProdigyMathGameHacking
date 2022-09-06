---
name: "Disable Math"
---

This hack disables math in PvP, PvE, some boss battles, mostly everywhere. However, it doesn't work in some new places like the Floatling Town.


```typescript
_.constants.constants["GameConstants.Debug.EDUCATION_ENABLED"] = true;
```