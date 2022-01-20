import "./app2.css"
import $ from "jquery"

const $tarBar = $("#app2 .tab-bar")
const $tabContent = $("#app2 .tab-content")

$tarBar.on("click", "li", e=>{
    const $li = $(e.currentTarget)
    $li.addClass('selected')
        .siblings().removeClass('selected')
    const index = $li.index()
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})

$tarBar.children().eq(0).trigger('click')