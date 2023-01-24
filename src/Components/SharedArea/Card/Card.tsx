import { Item } from "../../../Models/Beans";
import "./Card.css";
interface CardProps {
    item: Item;
}
function Card(props: CardProps): JSX.Element {
    return (
        <div className="Card">
            <div className="card">
                <img src={props.item.volumeInfo?.imageLinks?.thumbnail || 'https://picsum.photos/200' } alt="Avatar" />
                <div className="container">
                    <h4><b>{props.item.volumeInfo?.title}</b></h4>
                    <p>{props.item.volumeInfo?.authors}</p>
                    <p>{props.item.volumeInfo?.publishedDate}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
