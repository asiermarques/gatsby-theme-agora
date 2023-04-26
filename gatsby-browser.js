exports.shouldUpdateScroll = ({ routerProps }) => {
    const isHash = routerProps.location.hash;
    const gatsbyWrapper = document.getElementById('gatsby-focus-wrapper');
    gatsbyWrapper && (gatsbyWrapper.scrollTop = 0);

    return isHash && isHash.replace('#', '');
};