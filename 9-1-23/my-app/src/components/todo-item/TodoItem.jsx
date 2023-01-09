
export function TodoItem(props){
    const { children , Done , changeStatus , index } = props;

    const clickHendler= () => {
        changeStatus(index,Done)
        }
     

    return <li>
        {Done ? '👍' : '❌'}
        <span>{children}</span>
        <button onClick={clickHendler}>{Done ? 'Un-done': 'Done'}</button>
    </li>

}