function loadNewPage(pageName) {
    $.ajax({
        url: "php/getPage.php",
        type: "POST",
        data: "file_path=" + "../pages/" + pageName + ".html",
        dataType: "text",
        success: function (html) {
            document.getElementsByTagName("body")[0].innerHTML = html;
            loadJavascriptFile("/js/front/" + pageName + ".js");
        },
        error: function (html) {
            console.log("Load error");
            console.log(html)
        }
    });//ajax()
}

var loadJavascriptFile = function (filePath) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    script.src = filePath;
    document.getElementsByTagName("body")[0].appendChild(script);
}