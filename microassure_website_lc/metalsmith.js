var Metalsmith = require("metalsmith");
var layouts = require("metalsmith-layouts");
var watch = require("metalsmith-watch");
var path = require("metalsmith-path");

Metalsmith(__dirname)
    .clean(true)
    // .metadata({ siteUrl: "http://localhost:3001" })
    .source("./src")
    .destination("./docs")

.use(
        layouts({
            engine: "handlebars",
            partials: "partials"
        })
    )
    .use(path({}))
    .use(
        watch({
            paths: {
                "${source}/**/*": true,
                "layouts/**/*": true,
                "partials/**/*": true
            }
        })
    )
    .build(function(err) {
        if (err) throw err;
    });