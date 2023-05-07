import './work-space.scss';

const Workspace = ({text, notifications, id, setNotifications, edit}) => {

    const newTextHandleChange = e => {        
        notifications.map(elem => {
            return elem.id === id ? elem.text = e.target.value : elem;
        });

        localStorage.setItem('Notifications', JSON.stringify(notifications));
        setNotifications(JSON.parse(localStorage.getItem('Notifications')) || []);
    };

    return(
        <div className="Workspace">
            {edit === false && 
                <div className="Workspace__text">
                    <p>{text}</p>
                </div>
            }
            {edit && 
                <textarea defaultValue={text} onChange={newTextHandleChange}></textarea>
            }
        </div>
    )
};

export default Workspace;