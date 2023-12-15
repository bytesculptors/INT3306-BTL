import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

export const SideBarData = [
    {
        title: "Tạo tài khoản",
        icon: <CreateIcon/>,
        link: '/truongdiemtapket/create'
    },
    {
        title: "Thống kê tài khoản",
        icon: <StackedLineChartIcon/>,
        link: '/truongdiemtapket/statistic'
    },
    {
        title: "Thống kê đơn hàng",
        icon: <StackedLineChartIcon/>,
        link: '/truongdiemtapket/statistic2'
    }
    
]

