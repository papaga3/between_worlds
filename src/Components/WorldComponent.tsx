import BuyZone from "./BuyZone.";
import EssenceZone from "./EssenceZone";

const Worlds: React.FC = () => {
    const colourClasses: string =
        'bg-neutral-200 dark:bg-neutral-900 dark:text-sky-100';
    const layoutClasses: string = 'grid md:grid-cols-4 grid-cols-1 h-[32rem] w-[90rem] m-auto mt-2';
    return (
        <div className={`${layoutClasses} ${colourClasses}`}>
            <div className="border h-full block">
                <EssenceZone />
            </div>

            <div className="border col-span-2 h-full block">

            </div>

            <div className="border h-full block">
                <BuyZone />
            </div>
        </div>
    );
}

export default Worlds;