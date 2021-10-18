// F12 Developer tools -> auf das + drücken -> Sources -> Snippets -> New Snippet -> und dann per rechtsklick ausführen
// oder als Bookmarklet.

var e1 = document.getElementById("ToggleMenuB")
if (e1 != null)
{
    e1.remove();
}

var e2 = document.getElementById("ToggleWidescreenB")
if (e2 != null)
{
    e2.remove();
}
var menu = document.getElementById("page-navigation-col");
var buttons = menu.firstElementChild;
function toggleSidebar()
{
    var el = document.getElementById("sidebar-wrapper");
    if (el.style.visibility == "" || el.style.visibility == "visible")
    {
        el.style.visibility="hidden"
    }
    else
    {
        el.style.visibility="visible"
    }
}

function toggleWidescreen()
{
    var el = document.getElementById("mw-content-text");
    if (el.style.width == "" || el.style.width == "100%")
    {
        var container2 = document.getElementById("content-inner-wrapper");
        container2.style.width = "98vw"

        el.style.width = "80vw"
        var container = document.getElementById("page-container");
        container.style.marginLeft = "initial"
        container.style.marginRight = "initial"
        
    }
    else
    {
        var container2 = document.getElementById("content-inner-wrapper");
        container2.style.width = ""
        
        el.style.width = "100%"
        var container = document.getElementById("page-container");
        container.style.marginLeft = "auto"
        container.style.marginRight = "auto"
        
    }
}


buttons.insertAdjacentHTML('beforeend', "<a id='ToggleMenuB' class='nav-btn' href=\"javascript:toggleSidebar();\"> Toggle menu </a>");
buttons.insertAdjacentHTML('beforeend', "<a id='ToggleWidescreenB' href=\"javascript:toggleWidescreen();\"> Toggle widescreen </a>");

