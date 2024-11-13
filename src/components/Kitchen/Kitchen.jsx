import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = () => {
    return (
    <div className="kitchen-container">

        <h1> Kitchen </h1>

        <Oven />

        <Sink />

    </div>
    );
};

export default Kitchen;