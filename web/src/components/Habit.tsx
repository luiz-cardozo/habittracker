interface HAbitProps {
  completed: number;
}

export function Habit(props: HAbitProps) {
  return (
    <div className="bg-zinc-900 w-10 text-white rounded m-s flex items-center justify-center">
      {props.completed}
    </div>
  );
}
