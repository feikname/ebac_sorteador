module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    "dev/styles/main.css": "src/styles/main.less"
                }
            },
            production: {
                files: {
                    "dist/styles/main.min.css": "src/styles/main.less"
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development'],
            },
        },
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-watch')

    grunt.registerTask("default", ["watch"])
    grunt.registerTask("build", ["less:production"])
}
