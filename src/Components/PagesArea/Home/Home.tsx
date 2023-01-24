import { useEffect, useState } from "react";
import "./Home.css";
import webApi from "../../../Services/WebApi";
import { Item } from "../../../Models/Beans";
import notify from "../../../Services/NotificationService";
import Card from "../../SharedArea/Card/Card";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";
import store from "../../../Redux/Store";
import { addedSearchResult } from "../../../Redux/SearchResultAppState";

function Home(): JSX.Element {
    const [items, setItems] = useState<Item[]>([]);
    const [message, setMessage] = useState<string>('');
    const [updated, setUpdated] = useState<string>(message);

    useEffect(() => {
        if (updated) {
            store.dispatch(addedSearchResult(updated));
            webApi.searchBooks(updated)
                .then(res => {
                    console.log(res.data.items);
                    setItems(res.data.items);
                })
                .catch(err => { notify.error(err) });
        }
    }, [updated]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };



    const handleClick = () => {
        setUpdated(message);

    };
    return (
        <div className="Home">
            <div className="row">

                <input
                    placeholder="search book"
                    type="text"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={message}
                />

                <button onClick={handleClick}>Update</button>


            </div>
            <div className="displayCards">
                {
                    (updated && items) ?
                        <>
                            {<>{items.map(itm => <Card key={itm.id} item={itm} />)}</>}
                        </>
                        : <EmptyView />
                }
            </div>
        </div>
    );
}

export default Home;
