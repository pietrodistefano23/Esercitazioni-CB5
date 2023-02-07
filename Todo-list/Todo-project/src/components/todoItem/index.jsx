import { useContext } from "react";
import { ApplicationCtx } from "../../store/state";
import styles from "./index.module.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";

const TodoItem = ({ data }) => {
  const { state, dispatch } = useContext(ApplicationCtx);

//   const onHandleClick = (e) => {
//     dispatch({
//       type: "REMOVE_TODO_FROM_LIST",
//       payload: data.id,
//     });
//   };

const onClick = (e) => {
    e.target.id
    dispatch({
               type: "REMOVE_TODO_FROM_LIST",
               payload: data.status,
            }
            );
            
}

  return (
    <div
      className={`${styles.TodoItem} ${data.status && styles.statusDone}`}
      onClick ={() => onClick}  
      //   onClick={onHandleClick}
    >
      <p id={data.id}>{data.content}</p>
      {/* <button onClick={onBtnClick}><AiOutlineCheckCircle/></button> */}
    </div>
  );
};

export default TodoItem;