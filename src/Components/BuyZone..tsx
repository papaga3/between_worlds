import { useAtomValue } from "jotai";
import { upgrades } from "../constance";
import { worldAtom } from "../jotai/atoms";

const BuyZone: React.FC = () => {
    const buyButtonClasses = 'm-auto border block my-4';
    const world = useAtomValue(worldAtom);
    const curUpgrades = upgrades[world];
    return (
        <div className="w-full h-full m-auto my-10">
            {
                Object.keys(curUpgrades).map((item) => {
                    return(
                        <button className={`${buyButtonClasses}`}> {curUpgrades[item].name} </button>
                    );
                })
            }
        </div>
    );
}

export default BuyZone;