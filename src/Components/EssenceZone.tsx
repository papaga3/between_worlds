import { useAtom } from "jotai"
import { essenceAtom, themeAtom, worldAtom } from "../jotai/atoms";
import { World } from "../constance";

const EssenceZone: React.FC = () => {
    const [essence, setEssence] = useAtom(essenceAtom);
    const [world, setWorld] = useAtom(worldAtom);
    const [, setTheme] = useAtom(themeAtom);
    return (
        <div>
            <h1 className="bold"> Welcome to the { world } </h1>
            <h2> Click the zone to generate essence </h2>
            { essence[world] }
            <button onClick={() => { 
                if(world === World.Overworld) {
                    setWorld(World.Underworld);
                    setTheme('dark');
                } else {
                    setWorld(World.Overworld);
                    setTheme('base');
                }
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