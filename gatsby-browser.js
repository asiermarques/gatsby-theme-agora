exports.shouldUpdateScroll = ({
                                  routerProps: { location },
                                  getSavedScrollPosition
                              }) => {
    if(!window.location.hash)
       window.scrollTo({ top: 0, behavior: 'smooth' });
    return false
}