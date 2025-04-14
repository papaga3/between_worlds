import { useAtom } from "jotai";
import { worldAtom } from "../jotai/atoms";
import { World } from "../constance";

const Worlds: React.FC = () => {
    const [world, setWorld] = useAtom(worldAtom);
    return (
        <div>
            {world}
            <button onClick={() => {
                if(world === World.Overworld) { 
                        setWorld(World.Underworld);
                    }
                else { setWorld(World.Overworld) }
            }}> Set World </button>
        </div>
    );
}

export default Worlds;