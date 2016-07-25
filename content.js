var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType === 3) {
        nodeArr = node.split(" ");
        for (i = 0; i < nodeArr.length; i++){
            
                var text = node.nodeValue;
                if (text.includes("Millennial")) {
                    replacedText = text.replace(text, "Snake People");
                    element.replaceChild(document.createTextNode(replacedText), node);

                }
            }
        }
    }
}