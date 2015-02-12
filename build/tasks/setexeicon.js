var os = require('os');
var fs = require('fs-extra');
var plist = require("plist");
var rcedit = require('rcedit');

module.exports = function (grunt) {
    grunt.registerTask("setexeicon", function () {
        done = this.async();
        shellAppDir = "./atom-shell";
        if (os.type() == "Darwin") {
            executableName = grunt.config.get("build-atom-shell.projectName") + ".app";
            shellExePath = shellAppDir + "/" + executableName;
            iconPath = './resources/mac/app.icns';

            fs.copySync(iconPath, shellExePath + "/Contents/Resources/shout.icns");
            fs.deleteSync(shellExePath + "/Contents/Resources/atom.icns");

            var plFile = plist.parse(fs.readFileSync(shellExePath + "/Contents/Info.plist", 'utf8'));
            var packJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
            plFile.CFBundleIconFile = "shout.icns";
            plFile.CFBundleIdentifier = "com.poedgirl.shout.desktop";
            plFile.CFBundleVersion = packJson.version;
            
            var fd = fs.openSync(shellExePath + "/Contents/Info.plist", "w");
            fs.writeSync(fd, plist.build(plFile));
            fs.closeSync(fd);
        } else if (os.type() == "Linux") {

        } else {
            executableName = grunt.config.get("build-atom-shell.projectName") + ".exe";
            shellExePath = shellAppDir + "/" + executableName;
            iconPath = 'resources/win/app.ico';
            rcedit(shellExePath, { 'icon': iconPath }, done);
        }
    });
};