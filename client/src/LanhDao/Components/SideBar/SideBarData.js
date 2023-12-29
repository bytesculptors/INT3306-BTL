import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

export const SideBarData = (username) => [
    {
        title: "Tạo tài khoản",
        icon: <CreateIcon/>,
        link: `/lanh-dao/${username}/create`
    },
    {
        title: "Thống kê trưởng điểm",
        icon: <StackedLineChartIcon/>,
        link: `/lanh-dao/${username}/leader`
    }
]
