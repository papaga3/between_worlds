import { useAtom } from "jotai"
import { essenceAtom, worldAtom } from "../jotai/atoms";
import { header1, header2,  World } from "../constance";

const EssenceZone: React.FC = () => {
    const [essence, setEssence] = useAtom(essenceAtom);
    const [world, setWorld] = useAtom(worldAtom);
    return (
        <div>
            <h1 className={`${header1}`}> Welcome to the { world } </h1>
            <h2 className={`${header2}`}> Click the zone to generate essence </h2>
            <h2 className={`${header2}`}> Current World Essence: {essence[world]} </h2>

            <div onClick={() => {
                    const clone = Object.assign({}, essence);
                    clone[world]++;
                    setEssence(clone);
                }}
                className="block w-60 h-60 m-auto mt-4 border"
            >
            </div>


            <button onClick={() => { 
                    if(world === World.Overworld) {
                        setWorld(World.Underworld);
                    } else {
                        setWorld(World.Overworld);
                    }
                }}
                className="block m-auto m-4 mt-4 border"
            >
                Change World
            </button>
        </div>
    );
}

export default EssenceZone;