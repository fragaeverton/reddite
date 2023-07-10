import Card from "../../components/Card/Card";
import './Subreddits.css';

const Subreddits = () => {
    return (
        <Card className="subreddit-card">
            <h2>Subreditts</h2>
            <ul className="subreddits-list">
                <li>
                    <button type="button">
                        <img />
                    </button>
                </li>
            </ul>
        </Card>
    )
}

export default Subreddits;