import ClockOutlineIcon from "vue-material-design-icons/ClockOutline.vue";

import StarOutlineIcon from "vue-material-design-icons/StarOutline.vue";

import SendOutlineIcon from "vue-material-design-icons/SendOutline.vue";

import FileOutlineIcon from "vue-material-design-icons/FileOutline.vue";

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