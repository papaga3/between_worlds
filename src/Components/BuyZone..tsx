import { useAtomValue } from "jotai";
import { upgrades } from "../constance";
import { essenceAtom, worldAtom } from "../jotai/atoms";
import { Upgrade } from "../commonTypes";

const BuyZone: React.FC = () => {
    const buyButtonClasses = 'm-auto border block my-4';
    const world = useAtomValue(worldAtom);
    const essence = useAtomValue(essenceAtom);
    const curUpgrades = upgrades[world];

    const buyOnClick = (upgrade: Upgrade) => {
        if(essence[world] < upgrade.price) {
            console.log("Do not have enough money");
        } else {
            console.log("Bought");
        }
    }

    return (
        <div className="w-full h-full m-auto my-10">
            {
                Object.keys(curUpgrades).map((item) => {
                    return(
                        <button className={`${buyButtonClasses}`} onClick={() => buyOnClick(curUpgrades[item])}>
                            {curUpgrades[item].name}
                        </button>                    
                    );
                })
            }
        </div>
    );
}

export default BuyZone;