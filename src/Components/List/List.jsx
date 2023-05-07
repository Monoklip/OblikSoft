import ListItem from "./ListItem/ListItem";
import './list.scss';

const List = ({notifications, setId, setText, setDisabledBtn, id, setEdit, search}) => {

    if(search.length){
        return(
            <div className="list">
                {search.map(elem=>{
                    return <ListItem elem={elem} key={elem.id} setId={setId} setText={setText} id={id} setDisabledBtn={setDisabledBtn} setEdit={setEdit}/>
                })}
            </div>
        )
    }

    return(
        <div className="list">
            {notifications.map(elem=>{
                return <ListItem elem={elem} key={elem.id} setId={setId} setText={setText} id={id} setDisabledBtn={setDisabledBtn} setEdit={setEdit}/>
            })}
        </div>
    )
};

export default List;