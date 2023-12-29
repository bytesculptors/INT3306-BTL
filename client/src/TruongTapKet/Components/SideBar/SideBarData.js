import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

export const SideBarData = (username, locationName) => [
    {
        title: "Tạo tài khoản",
        icon: <CreateIcon/>,
        link: `/truong-diem-tap-ket/${username}/${locationName}/create`
    },
    {
        title: "Thống kê đơn hàng",
        icon: <StackedLineChartIcon/>,
        link: `/truong-diem-tap-ket/${username}/${locationName}/statistic`
    }
]
