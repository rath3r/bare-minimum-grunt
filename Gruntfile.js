module.exports = function(grunt) {

    grunt.initConfig({
        settings: {
            assets: 'assets',
            dist: 'dist',
            templates: 'templates',
            temp: '.tmp'
        },
        banner: '/*!\n' +
        '* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '*/\n',
        clean: {
            build: ["<%= settings.dist %>/css"]
        },
        less: {
            build: {
                options: {
                    paths: [
                        "<%= settings.assets %>/less"
                    ]
                },
                files: {
                    "<%= settings.dist %>/styles/main.css": "<%= settings.assets %>/less/main.less"
                }
            },
        },
        copy: {
            fonts: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= settings.assets %>/fonts/',
                        src: ['**'],
                        dest: '<%= settings.dist %>/fonts/'
                    },
                ],
            },
        },
        watch: {
            less: {
                files: ['<%= settings.assets %>/less/**/*.less'],
                tasks: ['less'],
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', [
        'clean',
        'less',
        'copy'
    ]);


};