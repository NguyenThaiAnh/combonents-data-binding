export class CounterService {
  activeToInactiveCounter = 0;
  InactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.incrementActiveToInactive());
  }

  incrementInactiveToActive() {
    this.InactiveToActiveCounter++;
    console.log("Inactive to active" + this.incrementInactiveToActive());
  }
}
