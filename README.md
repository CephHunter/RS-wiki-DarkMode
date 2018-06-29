## RS-wiki-DarkMode
This is a dark theme for the [Runescape wiki](http://runescape.wikia.com/wiki/RuneScape_Wiki).

## Preview
![preview](Images/Preview.png)
More images: https://imgur.com/a/Ka7sp

## Installing
### Installing as userstyle:
#### Step 1: StyleManager
* Stylus - get the addon for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), [Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) and [Opera](https://addons.opera.com/en-gb/extensions/details/stylus/).
* Stylish - get the addon for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/2108/), [Chrome](https://chrome.google.com/extensions/detail/fjnbnpbmkenffdnngjfgmeleoegfcffe), [Opera](https://addons.opera.com/en/extensions/details/stylish/) and [Safari](http://sobolev.us/stylish/).
#### Step 2: UserStyle
* Install from [userstyles.org](https://userstyles.org/styles/150266/runescape-wiki-darkmode).
* or, add it [manually](https://raw.githubusercontent.com/CephHunter/RS-wiki-DarkMode/master/Darkmode.css) into the editor.

### Installing as a userscript
#### Step 1: ScriptManager
* ![firefox](images/firefox.png) [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/)
* ![chrome](images/chrome.png) [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* ![opera](images/opera.png) [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* ![safari](images/safari.png) [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* ![edge](images/msedge.png) [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
#### Step 2: UserScript
* [install](https://raw.githubusercontent.com/CephHunter/RS-wiki-DarkMode/master/Darkmode.user.js) from *Github.com*
* [install](https://userstyles.org/styles/userjs/150266/runescape-wiki-darkmode.user.js) from *userstyles.org*

### Installing with a wikia account
* Advantages: You don't need to install any extensions.
* Disadvantages: You need to manually update, and the only way to easily disable the style is by loggin out.
#### Step 1: Wikia account
You can create an account under the "My account" dropdown at the top of any page on the [Runescape wiki](http://runescape.wikia.com/wiki/RuneScape_Wiki). When your account is created make sure you are logged in.
#### Step 2: Installing the style
* Go to https://runescape.wikia.com/wiki/Special:MyPage/common.css
* Click on create page
* Add `@import "https://cdn.rawgit.com/CephHunter/RS-wiki-DarkMode/d23a90c3/Darkmode.min.css";` to the top of the page and save.
* If you want to update to the latest version replace `d23a90c3` with the latest commit hash found [here](https://github.com/CephHunter/RS-wiki-DarkMode/commits/master/Darkmode.min.css).

### Updating
If a recent change by Wikia broke the style, chances are that I already fixed it. Make sure to reinstall from [userstyles.org](https://userstyles.org/styles/150266/runescape-wiki-darkmode) or [GitHub](https://raw.githubusercontent.com/CephHunter/RS-wiki-DarkMode/master/Darkmode.css) before opening an issue. 

## Contributing/reporting issues
Help is always appreciated, the Runescape wiki site is huge and always changing and I may not always notice when stuff gets broken. So if you find any problems you can always [open an issue on github](https://github.com/CephHunter/RS-wiki-DarkMode/issues) or leave a message on [this Runescape wiki talkpage](http://runescape.wikia.com/wiki/User_talk:CephHunter/Dark_mode_issues) or message me on Discord `@ceph hunter#6854`, I frequently hang out in the [Runscape wiki Discord](http://runescape.wikia.com/wiki/RuneScape:Off-site/Discord).

If you would like to contribute to the stylesheet head over to [.less#readme](.less#readme) for more information.
