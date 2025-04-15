import EssenceZone from "./EssenceZone";

const Worlds: React.FC = () => {
   
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 h-[32rem] w-[90rem] m-auto mt-2">
            <div className="border h-full block">
                <EssenceZone />
            </div>

            <div className="border col-span-2 h-full block">

            </div>

            <div className="border h-full block">

            </div>
        </div>
    );
}

export default Worlds;