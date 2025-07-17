# Dependency Injection

---

## 🧠 What is it ?

`Dependency Injection` is a design pattern that deals with how components get their dependencies (services, modules, etc.), instead of creating them directly.

```
Instead of a class/module creating the things it depends on, they are provided (injected) from the outside.
```

---

## 🧠 Why use Dependency Injection?

**_Without DI:_**

```
class UserService {
  constructor() {
    this.db = new Database(); // tightly coupled
  }
}
```

**_With DI:_**

```
class UserService {
  constructor(database) {
    this.db = database; // injected
  }
}
```

✅ Easier to test (mock dependencies)

✅ More modular and flexible

✅ Loose coupling between components

---
