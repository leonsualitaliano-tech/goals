import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import NewGoal from "./components/NewGoal.tsx";

function App() {

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your course goals!</h1>
      </Header>
      <NewGoal/>
      <CourseGoalList/>
    </main>
  );
}

export default App;
