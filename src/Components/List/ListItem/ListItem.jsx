import './list-item.scss';

const ListItem = ({elem, setId, setText, setDisabledBtn, setEdit}) => {

    const clickItem = () => {
        setEdit(false);
        setId(elem.id);
        setText(elem.text);
        setDisabledBtn(false);
    };

    const title = () => {
        if(elem.text.length > 17){
           return elem.text.slice(0,16).concat('...')
        }
        return elem.text
    }

    if(!elem.text){
        return(
            <div className='listItem empty' onClick={clickItem}>
                <h1 className='listItem_text'>Пусто</h1>
                <h1 className='listItem_date'>{elem.date}</h1>
            </div>
        )
    }

    return(
        <div className='listItem' onClick={clickItem}>
            <h1 className='listItem_text' >{title()}</h1>
            <h1 className='listItem_date'>{elem.date}</h1>
        </div>
    )
};

export default ListItem;