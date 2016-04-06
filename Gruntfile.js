module.exports = function(grunt) {
    
//    grunt.loadNpmTasks("grunt-autoprefixer");
//    grunt.loadNpmTasks("grunt-contrib-cssmin");
    
    require("load-grunt-tasks")(grunt);
    
    grunt.initConfig({
        autoprefixer:  {
            options: {
                browsers: ["last 2 version","ie 10"]
            },
            style: {
                src: "css/style.css"
            }
        },
        cssmin: {
            style: {
                files: {
                    "css/style.min.css": ["css/style.css"]
                }
            }
        }
    });
    
    grunt.registerTask("build", [
        "autoprefixer",
        "cssmin"
    ]);
};