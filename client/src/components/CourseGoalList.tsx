import { type ReactNode } from "react";

import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";

import { useFetch } from "../hoooks/useFetch.tsx";
import { type Goal } from "../types/Goal.tsx";

export default function CourseGoalList() {
  const {
    data: goals,
    loading,
    error,
  } = useFetch<Goal[]>("http://localhost:8080/api/goals");
  console.log(
    "Rendering GoalList. Loading:",
    loading,
    "Error:",
    error,
    "Goals:",
    goals
  );
  
  if (loading) {
    return <div>Loading goals...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  let warningBox: ReactNode;

  if (goals!.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="low">
        You're collecting a lot of goals. Don't put to much on your plate.
      </InfoBox>
    );
  }

  if (goals && goals.length > 0) {
    return (
      <>
        {warningBox}
        <ul>
          {goals.map((goal) => (
            <li key={goal._id}>
              <CourseGoal id={goal._id} title={goal.goal} onDelete={() => {}}>
                <p>{goal.summary}</p>
              </CourseGoal>
            </li>
          ))}
        </ul>
      </>
    );
  }
  return (
    <InfoBox mode="hint">You have no course yet. Start adding some!</InfoBox>
  );
}
