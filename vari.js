// 定义Vari文件夹位置 如果没有定义默认使用此路径
if (typeof(vari_main_folder) === "undefined"){
    var vari_main_folder = "/VariStyler";
}

// 判断是否有定义
if (document.getElementById("vari_main_folder")){
    // 设置文件夹为定义的路径
    vari_main_folder = document.getElementById("vari_main_folder").innerText;
    // 删除定义标签
    document.getElementById("vari_main_folder").remove();
}

// 添加主要库
document.head.innerHTML += `<script src="${vari_main_folder}/jquery.min.js">`
document.head.innerHTML += `<link rel="stylesheet" href="${vari_main_folder}/templates/system/index.css">`

// 获取config.json
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
   if (xhr.readyState !== 4) return;
   if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
    var a = JSON.parse(xhr.responseText);
    // 如果用户选择了默认主题就跳过设置
    if (a["template"] !== "system"){
        document.head.innerHTML += `<link rel="stylesheet" href="${vari_main_folder}/${"templates/" + a["template"] + "/index.css"}">`
    }
}
};
// 开始请求
xhr.open('GET', `${vari_main_folder}/config.json`, true);
xhr.send(null);
