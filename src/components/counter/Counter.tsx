
interface Props {
    count: number;
    total: number;
    increment: (value: number) => void;
    decrement: (value: number) => void;
}

export const Counter = ({ count, total, increment, decrement }: Props) => {
//   const { count, total, increment, decrement } = counterStore; при импорте снстанса
  return (
    <>
      <button onClick={() => increment(1)}>+</button>
      <span>{count}</span>
      <button onClick={() => decrement(1)}>-</button>
      <span>{total}</span>
    </>
  );
};
