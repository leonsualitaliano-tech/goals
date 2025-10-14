import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({onAddGoal}: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = goal.current!.value;

    e.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }

  return <form onSubmit={handleSubmit}>
    <p>
      <label htmlFor="goal" >Your Goal</label>
      <input id='goal' type="text" ref={goal}/>
    </p>
    <p>
      <label htmlFor="summary" >Your Summary</label>
      <input id='summary' type="text" ref={summary}/>
    </p>
    <button>Add Goal</button>
  </form>
}