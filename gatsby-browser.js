exports.shouldUpdateScroll = ({
                                  routerProps: { location },
                                  getSavedScrollPosition
                              }) => {
    const currentPosition = getSavedScrollPosition(location)
    const queriedPosition = getSavedScrollPosition({ pathname: `/random` })

    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false
}