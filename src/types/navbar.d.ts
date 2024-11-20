export type MegaMenu = {
    sectionName: string;
    data: { name: string; href: string; isNew?: boolean }[];
}

export type NavItem = {
    name: string;
    href: string;
    hasMega?: boolean;
    isNew?: boolean;
}