function main() {
    function foldCode() {
        console.log("folding code");
        // find 1st dom table element with class "js-file-line-container"
        let table = document.querySelector(".js-file-line-container");
        console.log(table);
        let dom_tbody = table.getElementsByTagName("tbody")[0];
        console.log(dom_tbody);
        
    }

    function hasLeftCurlyBracelet(text) {
        if (text.match()) {}
    }

    console.log(document.URL);
    let url_words = document.URL.split("/");
    let url_last_word = url_words[url_words.length - 1];
    let file_extention = url_last_word.split(".")[1];
    console.log(file_extention);
    if (file_extention == "c" || 
        file_extention == "cpp" || 
        file_extention == "h" || 
        file_extention == "hpp") {
        foldCode();
    }
}

chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes("github.com")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: main
        });
    }
});