function activityRouter(to, from, next) {
    if (innerWidth > 1200) {
        next('/')
    } else {
        next();
    }
}

export default activityRouter;