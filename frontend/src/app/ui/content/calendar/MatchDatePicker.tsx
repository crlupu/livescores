import Image from "next/image";
import {
    Button,
    Calendar,
    DateValue,
    Dropdown, DropdownItem, DropdownMenu,
    DropdownTrigger, Pagination,
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@nextui-org/react";
import {useState} from "react";
import Icon from "@/app/ui/Icon";
import months from "@/app/util/constants";

interface MatchDatePickerProps {
    selectedDate?: DateValue,
    setSelectedDate?: (value: (((prevState: DateValue) => DateValue) | DateValue)) => void
}

export default function MatchDatePicker({selectedDate, setSelectedDate}: MatchDatePickerProps) {
    const calendarIcon = "/calendar.svg";
    const closeIcon = "/close.svg";
    const [isOpen, setIsOpen] = useState(false);

    function updateSelectedDate(date: DateValue) {
        if (setSelectedDate) {
            setSelectedDate(date);
            setIsOpen(false);
        }
    }

    return (
        <>
            <Pagination showControls total={10} initialPage={1} dotsJump={0}/>
            <div className="flex items-center justify-end gap-6 w-full">
                <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)} placement="bottom-end"
                         containerPadding={0} backdrop='blur'>
                    <PopoverTrigger>
                        <Button isIconOnly color='primary' aria-label='calendar' size='lg'>
                            <Icon
                                source={calendarIcon}
                                description="calendar icon"
                            />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className='p-0'>
                        <Calendar
                            value={selectedDate}
                            onChange={updateSelectedDate}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </>
    )
}