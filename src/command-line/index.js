var program = require("commander");
var pkg = require("../../package.json");
var fs = require("fs");
var mkdirp = require("mkdirp");
var Helper = require("../helper");
var _ = require("lodash");
var ClientManager = new require("../clientManager");
var shout = require("../server");

program.version(pkg.version, "-v, --version");
program.option("");
program.option("    --home <path>" , "home path");

require("./start");
require("./config");
require("./list");
require("./add");
require("./remove");
require("./reset");
require("./edit");

var argv = program.parseOptions(process.argv);
if (program.home) {
	Helper.HOME = program.home;
}

var config = Helper.HOME + "/config.js";
if (!fs.existsSync(config)) {
	mkdirp.sync(Helper.HOME);
	fs.writeFileSync(
		config,
		fs.readFileSync(__dirname + "/../../defaults/config.js")
	);
	console.log("Config created:");
	console.log(config);
}

program.parse(argv.args);

if (!program.args.length) {
	var users = new ClientManager().getUsers();
	var config = Helper.getConfig();
	var mode = config.public;
	if (program.public) {
		mode = true;
	} else if (program.private) {
		mode = false;
	}
	if (!mode && !users.length) {
		console.log("");
		console.log("No users found!");
		console.log("Create a new user with 'shout add <name>'.");
		console.log("");
	} else {
		shout({
			host: program.host || process.env.IP   || config.host,
			port: program.port || process.env.PORT || config.port,
			bind: program.bind || config.bind,
			public: mode
		});
	}
}
