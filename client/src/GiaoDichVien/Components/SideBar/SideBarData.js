import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneIcon from '@mui/icons-material/Done';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const SideBarData = (username, locationName) => [
    {
        title: "Tạo đơn hàng",
        icon: <CreateIcon/>,
        link: `/giao-dich-vien/${username}/${locationName}/create`
    },
    {
        title: "Đơn hàng đang chờ",
        icon: <AccessTimeIcon/>,
        link: `/giao-dich-vien/${username}/${locationName}/waiting`
    }, 
    {
        title: "Đơn hàng đến nơi",
        icon: <LocalShippingIcon/>,
        link: `/giao-dich-vien/${username}/${locationName}/delivered`
    },
    {
        title: "Đơn hàng hoàn thành",
        icon: <DoneIcon/>,
        link: `/giao-dich-vien/${username}/${locationName}/successful`
    }
]

