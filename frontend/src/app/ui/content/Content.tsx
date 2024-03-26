import Matches from "./matches/Matches";
import News from "./News";
import Videos from "./Videos";

export default function Content({selectedView}) {
    return (
        <div className="row-span-7">
            {selectedView === 'matches' && <Matches />}
            {selectedView === 'videos' && <Videos />}
            {selectedView === 'news' && <News />}
        </div>
    )
}