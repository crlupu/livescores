import React from "react";

interface NavbarProps {
    selectedOption: string;
    onSelectOption: (buttonId: string) => void;
}

export default function Navbar({selectedOption, onSelectOption} : NavbarProps) {
    const menuOptions = ['matches', 'videos', 'news'];
    return (
        <div className="flex justify-center items-center gap-8">
            {menuOptions.map(option =>
                <div
                    key={option}
                    id={option}
                    onClick={() => onSelectOption(option)}
                    className={option === selectedOption ? "bg-slate-400" : ""}>{option}</div>)}
        </div>
    )
}