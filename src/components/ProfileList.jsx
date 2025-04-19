import { profile1, profile2, profile3 } from "../assets/images";
import { Profile } from "./Profile";

export const ProfileList = () => {

    const profiles = [
        {
            name: "Mazen Chaouch",
            location: "Tunis, Tunisia",
            img: profile1,
        },
        {
            name: "Sarah Ben Ali",
            location: "Sfax, Tunisia",
            img: profile2,
        },
        {
            name: "Youssef Hammami",
            location: "Sousse, Tunisia",
            img: profile3,
        },
    ];

    return (
        <div className="ProfileList flex gap-2" >
            {profiles.map((profile, i) => {
                return (
                    <Profile
                        key={i}
                        name={profile.name}
                        address={profile.location}
                        avatar={profile.img}
                        text={profile.hello}
                    />
                );
            })
            }
        </div >
    )
}