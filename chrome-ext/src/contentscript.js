function hijackDataLinks () {
    $('a[href^="data"]')
        .each(function (_, a) {
            a.href = "http://people.ischool.berkeley.edu/~nick/data-uri-info.html"
        })
            return
}

hijackDataLinks()
setInterval(hijackDataLinks, 500)
