export interface DropdownOption{
    label: string;
    value: string;
}

export interface DropdownProps{
    items: React.ReactNode;// DropdownOption[];
    disabled?: boolean;
}