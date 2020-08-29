//META{"name":"Message Previews"}*//

class ExampleLibraryPlugin {
    getName() {return "Message Previews";}
    getDescription() {return "Shows previews with message links";}
    getVersion() {return "0.1a";}
    getAuthor() {return "Wing";}

    start() {
        if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing",`The library plugin needed for ${this.getName()} is missing.<br /><br /> <a href="https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">Click here to download the library!</a>`);
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), "https://raw.githubusercontent.com/WingOnJS/MessagePreviews/master/messagepreview.plugin.js");
    }

    stop() {

	}
}