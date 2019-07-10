// ==UserScript==
// @name         CurseForge Downloader
// @namespace    https://www.yesterday17.cn/
// @version      1.0.1
// @description  Download files from curseforge directly instead of launching Twitch.
// @author       Yesterday17
// @include      *://www.curseforge.com/*
// @run-at       document-end
// ==/UserScript==

"use strict";
(function() {
  const elements = document.querySelectorAll(
    '.icon.icon-margin use[*|href="/Content/2-0-7122-35480/Skins/CurseForge/images/twitch/Logo/Glitch.svg#Logo/Glitch"]'
  );
  Array.from(elements)
    .map(item => {
      let button = item;
      while (item.nodeName !== "A") {
        item = item.parentElement;
      }
      return item;
    })
    .forEach((download, index) => {
      // change link
      let link = download.getAttribute("href").replace(/\?client=y/g, "");
      if (/(?:\/[^\/])*?\/download\/\d+/.test(link)) {
        link += "/file";
      }
      download.setAttribute("href", link);

      // change icon
      elements[index].parentElement.setAttribute("viewBox", "0 0 20 20");
      elements[index].setAttribute(
        "xlink:href",
        "/Content/2-0-7122-35480/Skins/CurseForge/images/twitch/Action/Download.svg#Action/Download"
      );
    });
})();
