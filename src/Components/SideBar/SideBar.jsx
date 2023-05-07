import { useState } from 'react';
import './side-bar.scss';

const SideBar = ({updateNotificationsList, setEdit, disabledBtn, id, notifications, setNotifications}) => {

    const [date, setDate] = useState(new Date().toLocaleString());

    const [display400, setDisplay400] = useState(false);
    const [display700, setDisplay700] = useState('flex');

    const createBeer = (event) => {
        event.preventDefault();

        updateNotificationsList({
            title: '',
            text: '',
            date: date,
            id: Math.floor(Math.random()*10000)
        });
    };

    const editNotificatoin = () => {
        setEdit(true);
    };

    const deleteNotification = () => {

        const newNotifications = notifications.filter(elem =>{
            if(elem.id !== id){
                return elem
            }
            else{
                
            }
        });

        localStorage.setItem('Notifications', JSON.stringify(newNotifications));
        setNotifications(JSON.parse(localStorage.getItem('Notifications')) || []);
    };

    const displayMenu = () => {
        setDisplay400();
        setDisplay700('none');
    };

    return(
        <div className="side-bar">
            <div className="side-bar__menu" >
                <button className="side-bar__menu_btn" onClick={createBeer}>
                    <img src="https://img.icons8.com/?size=512&id=62888&format=png" alt="" />
                </button>
                <button className="side-bar__menu_btn" disabled={disabledBtn} onClick={deleteNotification}>
                    <img src="https://img.icons8.com/?size=512&id=BsNkc7jnuBPU&format=png" alt="" />
                </button>
                <button className="side-bar__menu_btn" disabled={disabledBtn} onClick={editNotificatoin}>
                    <img src="https://img.icons8.com/?size=512&id=RgcsUF7ERmty&format=png" alt="" />
                </button>
            </div>
            <div className="side-bar__icon-menu" onClick={displayMenu}>
                <img src="https://img.icons8.com/?size=512&id=8113&format=png" alt="" />
            </div>
        </div>
    )
};

export default SideBar;