import { v4 as uuidv4 } from 'uuid';
import moment from 'moment/moment';

export const InboxMessages = [
    {
        id: uuidv4(),
        to: '77hosein88@gmail.com',
        subject: 'This is Test',
        message: 'Test Gamil Clone Successfully ✌',
        time: moment().format('MMMM D h:mm a'),
        check: false,
        starred: false
    },
    {
        id: uuidv4(),
        to: 'justin_rezaei@gmail.com',
        subject: 'this is test',
        message: 'gmail clone',
        time: 'Feb 25 10:11 am',
        check: false,
        starred: false
    },
    {
        id: uuidv4(),
        to: 'brad_traversy@gmail.com',
        subject: 'vue_3_course',
        message: 'Hello Hosein We are Record New Vue Course Do you wanna to Join Sir ?',
        time: 'Mar 10 3:11 am',
        check: false,
        starred: false
    },
    {
        id: uuidv4(),
        to: 'john_week_devs@gmail.com',
        subject: 'New Awesome Project',
        message: 'Heyyy yooooo check out my new Project is Awesome dude 🍕😎',
        time: 'Sep 12 6:11 pm',
        check: false,
        starred: false
    },
    {
        id: uuidv4(),
        to: 'evanyoooooouuuxxx@gmail.com',
        subject: 'new release',
        message: 'we are resolve the bug asap i will tell in next days',
        time: 'Aug 6 9:11 am',
        check: false,
        starred: false
    },
]