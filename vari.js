document.head.innerHTML += `<script src="/VariStyler/jquery.min.js">`
document.head.innerHTML += `<link rel="stylesheet" href="VariStyler/templates/system/index.css">`

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
   if (xhr.readyState !== 4) return;
   if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
    var a = JSON.parse(xhr.responseText);
    if (a["template"] !== "system"){
        document.head.innerHTML += `<link rel="stylesheet" href="${"templates/" + a["template"] + "/index.css"}">`
    }
}
};
xhr.open('GET', '/VariStyler/config.json', true);
xhr.send(null);
