exports.shouldUpdateScroll = ({
                                  routerProps: { location },
                                  getSavedScrollPosition
                              }) => {
    if(!window.location.hash) {
        setTimeout(() => window.scrollTo({top: 0, behavior: "smooth"}), 300);
    }
    return false
}