const remarkable = new Remarkable();
const domParser = new DOMParser();

function mdBake() {
    var htmlString
    try {
        htmlString = remarkable.render(postMarkdownData);
    } catch(err) {
        htmlString = remarkable.render(markdownNotFoundData);
    }
    //const htmlString = remarkable.render(postMarkdownData);
    const elements = domParser.parseFromString(htmlString, 'text/html').children[0].children[1].children;
    const container = document.getElementById('content-plain');
    //console.log(elements);
    for (var i=0; i<elements.length; i++) {
        container.appendChild(elements[i]);
    }
}

setTimeout(mdBake, 100);