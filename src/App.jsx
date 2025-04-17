import { Profile } from "./components/profile"
import profile1 from "./assets/profile1.jpg"
import profile2 from "./assets/profile2.jpg"
import profile3 from "./assets/profile3.jpg"
import "./app.css"
const App = () => {
    const profiles = [
        {
            name: "Mazen Chaouch",
            location: "Tunis, Tunisia",
            img: profile1
        },
        {
            name: "Sarah Ben Ali",
            location: "Sfax, Tunisia",
            img: profile2
        },
        {
            name: "Youssef Hammami",
            location: "Sousse, Tunisia",
            img: profile3
        }
    ];
    return (
        <div className="app">
            {profiles.map((profile, index) => {
                return <Profile key={index} name={profile.name} address={profile.location} avatar={profile.img} />
            })}
        </div>
    )
}

export default App