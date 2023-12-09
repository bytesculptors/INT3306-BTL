import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

export const SideBarData = [
    {
        title: "Tạo đơn hàng",
        icon: <CreateIcon/>,
        link: '/tapketvien/create'
    },
    {
        title: "Thống kê",
        icon: <StackedLineChartIcon/>,
        link: '/tapketvien/statistic'
    }
]

