import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

export const SideBarData = (username, locationName) => [
    {
        title: "Tạo tài khoản",
        icon: <CreateIcon/>,
        link: `/truong-diem-giao-dich/${username}/${locationName}/create`
    },
    {
        title: "Thống kê hàng",
        icon: <StackedLineChartIcon/>,
        link: `/truong-diem-giao-dich/${username}/${locationName}/statistic`
    }
]

