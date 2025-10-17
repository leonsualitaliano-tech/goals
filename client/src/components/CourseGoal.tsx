import { type PropsWithChildren } from "react";

import { useDelete } from "../hooks/useDelete.tsx";

interface Goal {
  _id: string;
  goal: string;
  summary: string
}

type CourseGoalProps = PropsWithChildren<{
  title: string;
  goal: Goal;
  onDelete: (_id: string) => void;
}>;

export default function CourseGoal({
  title,
  goal,
  children,
  onDelete,
}: CourseGoalProps) {
  const { deleteGoal, loading, error } = useDelete();

  const handleDelete = async () => {
    const ok = await deleteGoal(goal._id);
    if (ok) onDelete(goal._id)
  };

  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={handleDelete} disabled={loading}>{loading ? 'Eliminando' : 'Elimina'}</button>
      {error && <p>{error}</p>}
    </article>
  );
}