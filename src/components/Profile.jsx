import "./profile.css"
export const Profile = (props) => {
    return (
        <div className="card">
            <img src={props.avatar} alt="avatar" className="card-img" />
            <h1 className="card-name">{props.name}</h1>
            <p className="card-address">{props.address}</p>
            <div className="card-buttons">
                <button className="follow-btn">Follow</button>
                <button className="message-btn">Message</button>
            </div>
        </div>
    );
};
