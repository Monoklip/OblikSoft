import List from './Components/List/List';
import SearchBox from './Components/SearchBox/SearchBox';
import SideBar from './Components/SideBar/SideBar';
import Workspace from './Components/Workspace/Workspace';
import './app.scss';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [id, setId] = useState(0);
  const [edit, setEdit] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [search, setSearch] = useState([])

  const notificationsFromStorage = JSON.parse(localStorage.getItem('Notifications')) || [];
  const [notifications, setNotifications] = useState(notificationsFromStorage);

  const updateNotificationsList = (newNotifications) => {
    setNotifications([...notifications, newNotifications]);
    localStorage.setItem('Notifications', JSON.stringify([...notifications, newNotifications]));
  };

  return (
    <div className="App">
      <SideBar 
        updateNotificationsList={updateNotificationsList} 
        setEdit={setEdit} 
        disabledBtn={disabledBtn} 
        id={id} 
        notifications={notifications} 
        setNotifications={setNotifications} 
      />
      <SearchBox 
        notifications={notifications} 
        setSearch={setSearch} 
        search={search} 
        setNotifications={setNotifications} 
      />
      <List 
        notifications={notifications} 
        setId={setId} 
        setText={setText} 
        setDisabledBtn={setDisabledBtn} 
        id={id} 
        setEdit={setEdit} 
        search={search} 
      />
      <Workspace 
        text={text} 
        notifications={notifications} 
        id={id} 
        setNotifications={setNotifications} 
        edit={edit} 
      />
    </div>
  );
}

export default App;