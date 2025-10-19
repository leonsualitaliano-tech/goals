import { useEffect, useState, type ReactNode } from "react";
import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";
import { useFetch } from "../hooks/useFetch.tsx";
import { type Goal } from "../types/Goal.tsx";
import NewGoal from "./NewGoal.tsx";

export default function CourseGoalList() {
  const { data: goals, loading, error } = useFetch<Goal[]>("http://localhost:8080/api/goals");
  const [goalsState, setGoalsState] = useState<Goal[]>([]);

  useEffect(() => {
    if (goals) {
      setGoalsState(goals);
    }
  }, [goals]);

  if (loading) return <InfoBox mode="hint">Loading goals...</InfoBox>;
  if (error) return <InfoBox mode="warning" severity="low">Error: {error}</InfoBox>;

  let warningBox: ReactNode;

  if (goalsState.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="low">
        You're collecting a lot of goals. Don't put too much on your plate.
      </InfoBox>
    );
  }

  const handleOnDelete = (id: string) => {
    setGoalsState(prev => prev.filter(goal => goal._id !== id));
  };

  const handleNewGoal = (newGoal: Goal) =>  {
    setGoalsState((prev) => [...prev, newGoal])
  }

  if (goalsState.length > 0) {
    return (
      <>
      <NewGoal onNewGoal={handleNewGoal}/>
        {warningBox}
        <ul>
          {goalsState.map(goal => (
            <li key={goal._id}>
              <CourseGoal goal={goal} title={goal.goal} onDeleteGoal={handleOnDelete}>
                <p>{goal.summary}</p>
              </CourseGoal>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return <InfoBox mode="hint">You have no course yet. Start adding some!</InfoBox>;
}
