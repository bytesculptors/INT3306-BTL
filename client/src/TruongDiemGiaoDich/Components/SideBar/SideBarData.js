import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

export const SideBarData = [
    {
        title: "Tạo tài khoản",
        icon: <CreateIcon/>,
        link: '/truongdiemgiaodich/create'
    },
    {
        title: "Thống kê",
        icon: <StackedLineChartIcon/>,
        link: '/truongdiemgiaodich/statistic'
    },
    {
        title: "Thống kê đơn hàng",
        icon: <StackedLineChartIcon/>,
        link: '/truongdiemgiaodich/statistic2'
    }
    
]

