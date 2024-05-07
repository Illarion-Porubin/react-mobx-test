import { makeAutoObservable } from "mobx";

class CounterStore {
  count = 0;

  get total() {
    return this.count * 2;
  }

  constructor() {
    // makeObservable(this, {
    //     count: observable, // следит за count
    //     increment: action, // помечаем increment как action
    //     decrement: action, // помечаем decrement как action
    //     total: computed, // помечаем total как вычисляемое свойство computed
    // })
    // makeObservable нужен для ручного отслеживания
    makeAutoObservable(this);
    // makeAutoObservable будет остслеживать изменения стора автоматически
  }

  increment = (value: number) => {
    this.count += value;
  };

  decrement = (value: number) => {
    this.count -= value;
  };
}

// export default new CounterStore();
// экспортируем интсанс класса, так называемый сингл тон, объект созданый в единственном экземпляер

export default CounterStore
