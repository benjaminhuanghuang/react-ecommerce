// Browser router
window.location.href = "http://google.com"
history.back();

// Hash router
window.location = "#hash";
window.onhashchange = () => {
    console.log('current hash', window.location.hash);
}

// H5 router
history.pushState('name', 'title', '/path');
history.replaceState('name', 'title', '/path');
window.onpopstate = () => {
    console.log('current hash', window.location.href);
    console.log('current hash', window.location.pathname);
    console.log('current hash', window.location.hash);
    console.log('current hash', window.location.search);
}

