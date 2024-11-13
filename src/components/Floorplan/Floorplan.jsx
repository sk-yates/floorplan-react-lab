import Bedroom1 from "../Bedroom/Bedroom";
import Bedroom2 from "../Bedroom/Bedroom2";
import Bedroom3 from "../Bedroom/Bedroom3";
import HalfBath from "../Bath/HalfBath";
import FullBath from "../Bath/FullBath";
import LivingRoom from "../LivingRoom/LivingRoom";
import Kitchen from "../Kitchen/Kitchen";

const FloorPlan = () => {
    return (
        <div className="FloorPlan-container">
            <h1> Floorplan </h1>

            <Bedroom1 />

            <Kitchen />

            <FullBath />

            <Bedroom2 />

            <LivingRoom />

            <HalfBath />

            <Bedroom3 />

        </div>
    );
};

export default FloorPlan;