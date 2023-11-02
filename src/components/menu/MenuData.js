import React from 'react';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import CakeIcon from '@mui/icons-material/Cake';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import HomeIcon from '@mui/icons-material/Home';

export const MenuData=[
    {
        title:'All',
        path:'/home',
        icon: <HomeIcon/>,
        cName: 'nav-text'

    },
    {
        title:'Main dishes',
        path:'/main-dishes',
        icon: <TakeoutDiningIcon/>,
        cName: 'nav-text'

    },
    {
        title:'Sweets',
        path:'/sweets',
        icon: <CakeIcon/>,
        cName: 'nav-text'

    },
    {
        title:'Breakfasts',
        path:'/breakfasts',
        icon: <BreakfastDiningIcon/>,
        cName: 'nav-text'

    },
    {
        title:'Baking',
        path:'/baking',
        icon: <BakeryDiningIcon/>,
        cName: 'nav-text'

    },
]
