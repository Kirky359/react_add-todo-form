import { TodoInfo } from '../TodoInfo';
import { Todo } from '../types/Todo';

type Props = {
  todosFromServer: Todo[];
};

export const TodoList: React.FC<Props> = ({ todosFromServer }) => {
  return (
    <section className="TodoList">
      {todosFromServer.map(todo => (
        <TodoInfo todo={todo} key={todo.id} />
      ))}
    </section>
  );
};
