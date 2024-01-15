import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userRelated/userSlice';
// import { studentReducer } from './studentRelated/studentSlice';
import { noticeReducer } from './noticeRelated/noticeSlice';
import { eventReducer } from './eventRelated/eventSlice';
// import { sclassReducer } from './sclassRelated/sclassSlice';
// import { teacherReducer } from './teacherRelated/teacherSlice';
import { complainReducer } from './complainRelated/complainSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        // student: studentReducer,
        // teacher: teacherReducer,
        notice: noticeReducer,
        event: eventReducer,
        complain: complainReducer,
        // sclass: sclassReducer
    },
});

export default store;
