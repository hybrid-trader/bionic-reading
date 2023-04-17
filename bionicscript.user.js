// ==UserScript==
// @name         Bionic Reading Script
// @namespace    https://github.com/hybrid-trader/bionic-reading
// @downloadURL  https://github.com/hybrid-trader/bionic-reading/raw/main/bionicscript.user.js
// @updateURL    https://github.com/hybrid-trader/bionic-reading/raw/main/bionicscript.user.js
// @version      0.1
// @description  An attempt at creating an ADHD-friendly adjustment of text on screens.
// @author       Chris Harrison
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';
    var pTags = document.getElementsByTagName("p");
    for(var i=0; i<pTags.length; i++){
        //bold the first 50% of the letters.
        var trimmedText = pTags[i].innerText.replace(/[.”“’,\?'\"\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        var originalText = pTags[i].innerHTML;
        const arrWords = trimmedText.split(" ");
        var bionicText = '';
        for(var iw=0; iw<arrWords.length; iw++){
            if(arrWords[iw].length>2){
                var toBold = Math.ceil(arrWords[iw].length / 2);
                bionicText = "<span style='font-weight:bold;'>" + arrWords[iw].substring(0,toBold) + "</span>" + arrWords[iw].substring(toBold);
                originalText = originalText.replace(arrWords[iw],bionicText);
            }
        }
        pTags[i].innerHTML = originalText;
    }
})();
