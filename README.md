# AusIRC Shout

__What is it?__  
AusIRC Shout is a fork of [Shout](https://github.com/erming/shout).
This version is designed for a desktop environment instead of web-based.
It uses the [Atom-Shell](https://github.com/atom/atom-shell) project as
a desktop backend. It also has several improvements from the base Shout
code that I thought were needed.

## Binaries
Prebuilt binaries will be available at the [AusIRC Website](https://ausirc.org)
when the application is ready.

## Build/Install
### Prerequisites (Windows)

* Windows 7 / Server 2008 R2 or higher
* Visual Studio 2013 - [download VS 2013 Community Edition for
  free](http://www.visualstudio.com/products/visual-studio-community-vs)
* [Python 2.7](http://www.python.org/download/releases/2.7/)
* 32bit [node.js](http://nodejs.org/download/)
* [git](http://git-scm.com)

### Prerequisites (Mac)

* OS X >= 10.8
* [Xcode](https://developer.apple.com/technologies/tools/) >= 5.1
* [node.js](http://nodejs.org) (external).

### Build procedure
```
npm install
grunt buildexe
```

## Usage

When the install and build are complete, simply open the shout.exe/shout.app file in the atom-shell folder.

For more information, read the original Shout [documentation](http://shout-irc.com/docs/).

## License

Available under [the MIT license](http://mths.be/mit).
