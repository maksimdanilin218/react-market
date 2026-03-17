export const sidebarData = [
    {
        id: 1,
        icon: "./SidebarIcon/homeIcon.png",
        title: "Главная",
        path: "/"
    },
    {
        id: 2,
        icon: "./SidebarIcon/electronicIcon.png",
        title: "Электроника",
        path: "/electronics",
        children: [
            {
                id: 21,
                icon: "./SidebarIcon/smartphoneIcon.png",
                title: "Смартфоны",
                path: "/electronics/smartphones",
                children: [
                    { id: 211, title: "Apple", count: 25, price: "79.999", icon: "/SidebarIcon/ChildrenIcon/appleIcon.png", path: "/electronics/smartphones/apple" },
                    { id: 212, title: "Samsung", count: 25, price: "69.999", icon: "/SidebarIcon/ChildrenIcon/samsungIcon.png", path: "/electronics/smartphones/samsung" },
                    { id: 213, title: "Xiaomi", count: 25, price: "29.999", icon: "/SidebarIcon/ChildrenIcon/xiaomiIcon.png", path: "/electronics/smartphones/xiaomi" },
                    { id: 214, title: "Realme", count: 25, price: "19.999", icon: "/SidebarIcon/ChildrenIcon/realmeIcon.png", path: "/electronics/smartphones/realme" },
                ]
            },
            {
                id: 22, title: "Ноутбуки", count: 8, icon: "./SidebarIcon/laptopIcon.png", path: "/electronics/laptop",
                children: [
                    { id: 211, title: "Apple", count: 25, price: "79.999", icon: "/SidebarIcon/ChildrenIcon/appleIcon.png", path: "/electronics/laptop/apple" },
                    { id: 213, title: "Xiaomi", count: 25, price: "29.999", icon: "/SidebarIcon/ChildrenIcon/xiaomiIcon.png", path: "/electronics/laptop/xiaomi" },
                ]
            },
            { id: 23, title: "Телевизоры", count: 12, icon: "./SidebarIcon/tvIcon.png", path: "/electronics/tv" },
            { id: 24, title: "Наушники", count: 19, icon: "./SidebarIcon/headphoneIcon.png", path: "/electronics/headphones" },
            { id: 25, title: "Часы", count: 14, icon: "./SidebarIcon/smartwatchIcon.png", path: "/electronics/smartwatch" },
        ]
    },
    {
        id: 3,
        icon: "./SidebarIcon/householdIcon.png",
        title: "Бытовая техника",
        path: "/household",
    },
    {
        id: 4,
        icon: "./SidebarIcon/accessoryIcon.png",
        title: "Аксессуары",
        path: "/accessories",
    }
];