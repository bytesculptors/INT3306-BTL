import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

export const SideBarData = (username, locationName) => [
    {
        title: "Tạo đơn hàng",
        icon: <CreateIcon/>,
        link: `/giaodichvien/${username}/${locationName}/create`
    },
    {
        title: "Thống kê",
        icon: <StackedLineChartIcon/>,
        link: `/giaodichvien/${username}/${locationName}/statistic`
    }
]

