const TaskCounter = ({tasks}) => {
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <section>
      <div>
        <h2>Tasks</h2>
        <p>Active: {count.active}</p>
        <p>Completed: {count.completed}</p>
      </div>
    </section>
  );
};

export default TaskCounter;
