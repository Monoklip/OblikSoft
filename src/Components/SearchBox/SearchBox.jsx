import './search-box.scss';

const SearchBox = ({notifications, setSearch}) => {
    const filters = (e) => {
        const q  = [];
        const audit = [];

        for(let i = 0; i < notifications.length; i++){
            const a = notifications[i].text.toLowerCase();

            if(a.includes(e.target.value.toLowerCase())){

                const some = q.some(elem => elem.text === notifications[i].text);
                if(some === false ){
                    audit.push(notifications[i]);
                    setSearch(audit)
                }
            }
        }
    };

    return(
        <div className="search-box">
            <div className="search-box_input">
                <input type="text" placeholder='🔎 Search' onChange={filters}/>
            </div>
        </div>
    )
};

export default SearchBox;