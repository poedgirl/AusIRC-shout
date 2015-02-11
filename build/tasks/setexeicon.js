
module.exports = function (grunt) {
    grunt.registerTask("setexeicon", function () { 
        done = this.async();
        
        shellAppDir = "./atom-shell";
        executableName = grunt.config.get("build-atom-shell.projectName") + ".exe";
        shellExePath = shellAppDir + "/" + executableName;
        iconPath = 'resources/win/app.ico';
        
        rcedit = require('rcedit');
        rcedit(shellExePath, { 'icon': iconPath }, done);
    });
};