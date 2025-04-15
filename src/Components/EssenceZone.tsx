import { useAtom } from "jotai"
import { essenceAtom, worldAtom } from "../jotai/atoms";
import { World } from "../constance";

const EssenceZone: React.FC = () => {
    const [essence, setEssence] = useAtom(essenceAtom);
    const [world, setWorld] = useAtom(worldAtom);
    return (
        <div>
            <h1> { world } </h1>
            { essence[world] }
            <button onClick={() => { 
                if(world === World.Overworld) { setWorld(World.Underworld) }
                else { setWorld(World.Overworld) }
            }}>
                Change World
            </button>

            <button onClick={() => {
                const clone = Object.assign({}, essence);
                clone[world]++;
                setEssence(clone);
            }}>
                increase essence
            </button>
        </div>
    );
}

export default EssenceZone;