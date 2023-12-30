import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

export const SideBarData = (username, locationName) => [
    {
        title: "Tạo tài khoản",
        icon: <CreateIcon/>,
        link: `/truong-diem-tap-ket/${username}/${locationName}/create`
    },
    {
        title: "Thống kê hàng đến",
        icon: <StackedLineChartIcon/>,
        link: `/truong-diem-tap-ket/${username}/${locationName}/arrive`
    },
    {
        title: "Thống kê hàng đi",
        icon: <StackedLineChartIcon/>,
        link: `/truong-diem-tap-ket/${username}/${locationName}/go`
    },
    {
        title: "Nhân viên",
        icon: <EmojiPeopleIcon/>,
        link: `/truong-diem-tap-ket/${username}/${locationName}/employee`
    }
]
