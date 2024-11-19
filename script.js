console.log('Hello!');
class CounterApp {
  constructor(min, max) {
    this.min = min; // Minimum value
    this.max = max; // Maximum value
    this.value = 0; // Current counter value

    // Bind UI elements
    this.counterLabel = document.getElementById('counter-label');
    this.incrementButton = document.getElementById('increment-btn');
    this.decrementButton = document.getElementById('decrement-btn');
    this.resetButton = document.getElementById('reset-btn');

    // Attach event listeners
    this.addEventListeners();
  }

  updateLabel() {
    this.counterLabel.textContent = this.value;
  }

  increment() {
    if (this.value < this.max) {
      this.value++;
      this.updateLabel();
    } else {
      alert(`Cannot increment beyond ${this.max}.`);
    }
  }

  decrement() {
    if (this.value > this.min) {
      this.value--;
      this.updateLabel();
    } else {
      alert(`Cannot decrement below ${this.min}.`);
    }
  }

  reset() {
    this.value = this.min;
    this.updateLabel();
  }

  addEventListeners() {
    this.incrementButton.addEventListener('click', () => this.increment());
    this.decrementButton.addEventListener('click', () => this.decrement());
    this.resetButton.addEventListener('click', () => this.reset());
  }
}

// Initialize the counter application with a minimum of 0 and a maximum of 5
document.addEventListener('DOMContentLoaded', () => {
  new CounterApp(0, 5);
});
