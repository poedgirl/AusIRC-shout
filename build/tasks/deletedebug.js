
module.exports = function (grunt) {
    grunt.registerTask("deletedebug", function () { //delete debugging files for Atom
        var fs = require('fs-extra');
        shellAppDir = "./atom-shell/";
        
        //files that are not needed for a binary release
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
    });
};