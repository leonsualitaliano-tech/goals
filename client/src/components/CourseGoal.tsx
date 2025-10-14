//Option using ReactNode
// import { type ReactNode } from "react";

// type CourseGoalProps = {
//   title: string;
//   children: ReactNode
// };

// export default function CourseGoal({
//   title,
//   children,
// }: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>delete</button>
//     </article>
//   );
// }

//Option using PropsWithChildren
import { type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({
  title,
  id,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>delete</button>
    </article>
  );
}

//alternativa con arrow function

// import { type FC, type PropsWithChildren } from "react";

// type CourseGoalPropsArrow = PropsWithChildren<{
//   id: number;
//   title: string;
//   onDelete: (id: number) => void;
// }>;

// const CourseGoalArrow: FC<CourseGoalPropsArrow> = ({id, title, children, onDelete}) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button onClick={() => onDelete(id)}>delete</button>
//     </article>
//   );
// }

// export default CourseGoalArrow;
