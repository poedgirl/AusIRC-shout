var os = require('os');
var fs = require('fs-extra');

module.exports = function (grunt) {
    grunt.registerTask("deletedebug", function () { //delete debugging files for Atom
        shellAppDir = "./atom-shell/";
        if (os.type() == "Darwin") {
            //delete everything except the .app file
            var executableName = grunt.config.get("build-atom-shell.projectName") + ".app";
            var shellExePath = shellAppDir + executableName;
            fs.renameSync(shellExePath, "./" + executableName);

            fs.deleteSync(shellAppDir);
            fs.mkdirpSync(shellAppDir);

            fs.renameSync("./" + executableName, shellExePath);
        } else if (os.type() == "Linux") {

        } else {
            //files that are not needed for a binary release on Windows
            fs.deleteSync(shellAppDir + ".ninja_deps");
            fs.deleteSync(shellAppDir + ".ninja_log");
            fs.deleteSync(shellAppDir + "build.ninja");
            fs.deleteSync(shellAppDir + "environment.x64");
            fs.deleteSync(shellAppDir + "environment.x86");
            fs.deleteSync(shellAppDir + "gyp-win-tool");
            fs.deleteSync(shellAppDir + "node.lib");
            fs.deleteSync(shellAppDir + "shout.exe.assert.manifest");
            fs.deleteSync(shellAppDir + "shout.exe.manifest");
            fs.deleteSync(shellAppDir + "shout.exe.manifest.rc");
            fs.deleteSync(shellAppDir + "shout.exe.manifest.res");
            fs.deleteSync(shellAppDir + "shout.exe.pdb");
            fs.deleteSync(shellAppDir + "shout.exp");
            fs.deleteSync(shellAppDir + "shout.ilk");
            fs.deleteSync(shellAppDir + "shout.lib");
        
            fs.deleteSync(shellAppDir + "gen");
            fs.deleteSync(shellAppDir + "obj");
        }
        

    });
};