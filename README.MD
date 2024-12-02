# Design Patterns in Node.js

## What Are Design Patterns?

Design patterns are **proven solutions to common problems** in software design. They represent best practices that help developers write reusable, maintainable, and scalable code. Each design pattern provides a structured approach to solving a specific problem, making code easier to understand and extend.

Design patterns are not code but templates or blueprints for solving recurring issues in software architecture. By using them, developers can avoid reinventing the wheel and leverage time-tested techniques.

---

## Why Use Design Patterns?

- **Code Reusability**: Promotes the reuse of solutions across different projects.
- **Scalability**: Ensures the software can handle increasing demands without major rework.
- **Maintainability**: Simplifies the understanding, debugging, and extension of code.
- **Team Collaboration**: Provides a shared vocabulary for discussing solutions with other developers.

---

## Categories of Design Patterns

Design patterns are commonly divided into **three main categories** based on their purpose:

### 1. **Creational Patterns**
   Focus on the process of object creation, ensuring that objects are created in a controlled and efficient manner. These patterns abstract the instantiation process, making the system more flexible.

   - **Examples**: Singleton, Factory Method, Abstract Factory, Builder, Prototype

### 2. **Structural Patterns**
   Deal with object composition and the relationships between entities, ensuring that the system's structure is flexible and optimized for reuse.

   - **Examples**: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy

### 3. **Behavioral Patterns**
   Concerned with how objects interact and communicate with one another, defining the responsibilities and algorithms for collaboration.

   - **Examples**: Strategy, Observer, Command, State, Template Method, Visitor, Chain of Responsibility, Mediator

---

## Focus: The Strategy Pattern

### What Is the Strategy Pattern?

The **Strategy Pattern** is a **behavioral design pattern** that allows you to define a family of algorithms, encapsulate each one, and make them interchangeable. This pattern enables a client to choose an algorithm dynamically at runtime without modifying the client code.

### Key Concepts

1. **Encapsulation of Behavior**: Each algorithm or behavior is encapsulated in its own class.
2. **Interchangeability**: Algorithms can be swapped in and out without altering the client that uses them.
3. **Open/Closed Principle**: The system is open for extension but closed for modification. New behaviors can be added by creating new strategies.

### Real-World Analogy

Imagine an **e-commerce platform** where customers can choose their preferred payment method (Credit Card, PayPal, Crypto Wallet). The platform must handle different payment methods without hardcoding them. By using the Strategy pattern, each payment method is implemented as a separate strategy, and the platform dynamically selects the appropriate one at runtime.

### Components of the Strategy Pattern

1. **Strategy Interface**: Defines a common interface that all strategies must implement.
2. **Concrete Strategies**: Provide specific implementations of the strategy interface.
3. **Context**: Maintains a reference to a strategy and delegates algorithm execution to it.

---

## Example: Payment Processing System

Here’s an example implementation of the Strategy pattern in Node.js:

### File Structure

```plaintext
src/
├── design-patterns/
│   └── behavioral/
│       └── strategy/
│           ├── index.ts                # Entry point and client code
│           ├── Context.ts              # Context class
│           ├── PaymentStrategy.ts      # Strategy interface
│           ├── CreditCardPayment.ts    # Concrete strategy (Credit Card)
│           ├── PayPalPayment.ts        # Concrete strategy (PayPal)
│           ├── CryptoWalletPayment.ts  # Concrete strategy (Crypto Wallet)
│           └── example.test.ts         # Tests


---

## Focus: Singleton Pattern

### What Is the Singleton Pattern?

The **Singleton Pattern** is a **creational design pattern** that ensures a class has only **one instance** throughout the lifecycle of an application and provides a **global access point** to that instance.

This is particularly useful when exactly one object is needed to coordinate actions across the system, such as a logging service or a database connection pool.

---

### Characteristics of the Singleton Pattern

1. **Single Instance**: Guarantees that only one instance of the class exists.
2. **Global Access**: Provides a way to access the instance globally without exposing how it is created.
3. **Lazy Initialization**: The instance is created only when it is first accessed, optimizing resource usage.

---

### Real-World Analogy

Imagine a **printer spooler** in an office. Regardless of how many people send print jobs, there should only be **one printer spooler** to avoid conflicts and manage the queue efficiently. The Singleton Pattern ensures this shared resource is only created once and accessed by all.

---

### Disadvantages of the Singleton Pattern

- **Testing Challenges**: Introduces difficulties in unit testing due to global state.
- **Tight Coupling**: Encourages reliance on a global instance, leading to tightly coupled code.
- **Concurrency Issues**: In multi-threaded environments, care must be taken to avoid race conditions when creating the instance.
- **Potential for Overuse**: Misuse can lead to anti-patterns, especially if multiple singletons are used unnecessarily.

