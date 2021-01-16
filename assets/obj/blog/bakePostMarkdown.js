const remarkable = new Remarkable();
const domParser = new DOMParser();

function mdBake() {
    const htmlString = remarkable.render(postMarkdownData);
    const elements = domParser.parseFromString(htmlString, 'text/html').children[0].children[1].children;
    console.log(elements);
    for (var i=0; i<elements.length; i++) {
        body.appendChild(elements[i]);
    }
}

setTimeout(function () {console.log(postMarkdownData);}, 100);
setTimeout(mdBake, 100);