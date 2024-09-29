import { useEffect, useState } from "react";

export default function Show({
  count,
  target,
  title,
}: {
  count: number;
  target: number;
  title: string;
}) {
  const [currentNumber, setCurrentNumber] = useState(count);

  useEffect(() => {
    if (currentNumber < target) {
      const timer = setInterval(() => {
        setCurrentNumber((prevCount) => Math.min(prevCount + 1, target));
      }, 0);
      return () => clearInterval(timer);
    }
  }, [count, target]);

  return (
    <div className="flex flex-col w-full items-center gap-3">
      <span className=" font-bold text-4xl text-green-700">
        {currentNumber.toLocaleString("en-US")}
      </span>
      <h4 className="text-gray-800 text-sm">{title}</h4>
    </div>
  );
}
