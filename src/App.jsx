import { ProfileList } from "./components/ProfileList";
import "./app.css";
import { Counter } from "./components/counter";

const App = () => {
    return (
        <div className="App m-6">
            <h1 className="text-5xl text-sky-600 text-center font-bold my-8">Title</h1>
            <ProfileList />
            <Counter />
        </div>
    );
};

export default App;
