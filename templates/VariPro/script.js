document.head.innerHTML += `
    <style>
        :root {
            --theme-background-color: ${get_theme_setting("VariPro", "theme_background_color")};
            --theme-background-color-hover: #3b9aff;
            --theme-background-color-active: #005bbc;
            --theme-border-color: #b5b5b5;
            --theme-text-white-color: #0c0c0c;
            --theme-border-radius: 5px;
        }
    </style>
`