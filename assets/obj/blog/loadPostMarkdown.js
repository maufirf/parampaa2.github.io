//https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file
/*function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}*/

const body = document.children[0].children[1];

const fileName = location.search.split('post=')[1]
const filePath = `../assets/obj/blog/mds/${fileName}.js`;
const newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = filePath;
newScript.id = "postMarkdown";
body.appendChild(newScript);

//const htmlString = remarkable.render(postMarkdown);
//const elements = domParser.parseFromString(htmlString, 'text/html').children[0].children[1].children;
//console.log(elements);
//for (var i=0; i<elements.length; i++) {
//    body.appendChild(elements[i]);
//}