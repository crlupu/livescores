export default function Navbar({selectedOption, onSelectOption}) {
    const menuOptions = ['matches', 'videos', 'news'];
    return (
        <div className="flex justify-center items-center gap-8">
            {menuOptions.map(option => <div key={option} id={option} onClick={onSelectOption}>{option}</div>)}
        </div>
    )
}