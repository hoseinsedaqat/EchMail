import ClockOutlineIcon from "vue-material-design-icons/ClockOutline.vue";

import StarOutlineIcon from "vue-material-design-icons/StarOutline.vue";

import SendOutlineIcon from "vue-material-design-icons/SendOutline.vue";

import FileOutlineIcon from "vue-material-design-icons/FileOutline.vue";

import CalendarToday from "vue-material-design-icons/CalendarToday.vue";

import CogOutline from "vue-material-design-icons/CogOutline.vue";

import GoogleKeep from "vue-material-design-icons/GoogleKeep.vue";

import AccountBox from "vue-material-design-icons/AccountBox.vue";

import InboxIcon from "vue-material-design-icons/Inbox.vue";


export const side_bar_components = [
    {
        components_icon: <InboxIcon />,
        title: 'Inbox',
        details: true,
        link: '/'
    },
    {
        components_icon: <StarOutlineIcon />,
        title: 'Starred',
        link: '/starred'
    },
    {
        components_icon: <ClockOutlineIcon />,
        title: 'Snoozed',
        link: '/'
    },
    {
        components_icon: <SendOutlineIcon />,
        title: 'Sent',
        link: '/sent'
    },
    {
        components_icon: <FileOutlineIcon />,
        title: 'Drafts',
        link: '/'
    },
]

export const side_bar_components_sm = [
    {
        components_icon: <InboxIcon />,
        title: 'Inbox',
        link: '/'

    },
    {
        components_icon: <StarOutlineIcon />,
        title: 'Starred',
        link: '/starred'
    },
    {
        components_icon: <ClockOutlineIcon />,
        title: 'Snoozed',
        link: '/'
    },
    {
        components_icon: <SendOutlineIcon />,
        title: 'Sent',
        link: '/sent'
    },
    {
        components_icon: <FileOutlineIcon />,
        title: 'Drafts',
        link: '/'
    },
]


export const side_bar_components_mobile = [
    {
        components_icon: <InboxIcon />,
        title: 'Inbox',
        details: true,
        link: '/'
    },
    {
        components_icon: <StarOutlineIcon />,
        title: 'Starred',
        link: '/starred'
    },
    {
        components_icon: <ClockOutlineIcon />,
        title: 'Snoozed',
        link: '/'
    },
    {
        components_icon: <SendOutlineIcon />,
        title: 'Sent',
        link: '/sent'
    },
    {
        components_icon: <FileOutlineIcon />,
        title: 'Drafts',
        link: '/'
    },
    {
        components_icon: <CalendarToday />,
        title: 'Calendar',
        link: '/calendar'
    },
    {
        components_icon: <AccountBox />,
        title: 'Contacts',
        link: '/contacts'
    },
    {
        components_icon: <GoogleKeep />,
        title: 'Keeps',
        link: '/keep'
    },
    {
        components_icon: <CogOutline />,
        title: 'Setting',
        link: '/user/setting'
    },
]