import React from 'react'
// import CreateIcon from '@mui/icons-material/Create';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

export const SideBarData = (username, locationName) => [
    // {
    //     title: "Tạo đơn hàng",
    //     icon: <CreateIcon/>,
    //     link: '/tapketvien/create'
    // },
    {
        title: "Hàng mới",
        icon: <StackedLineChartIcon/>,
        link: `/tap-ket-vien/${username}/${locationName}/new`
    },
    {
        title: "Hàng đã chuyển",
        icon: <StackedLineChartIcon/>,
        link: `/tap-ket-vien/${username}/${locationName}/delivered`
    }
]
