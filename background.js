const aSubs = [...'AaªÀÁÂÃÄÅàáâãäåĀāĂăĄąǍǎǞǟǠǡǺǻȀȁȂȃȦȧȺΆΆαАаӐӑӒӓᶐḀḁἀἁἂἃἄἅἆἇἈἉἊἋἌἍἎἏᾰᾱᾲᾳᾴᾶᾷᾸᾹᾺΆᾼ₳Å∀ⱥⲀⲁ']
const bSubs = [...'BbßƀƁƂƃƄƅɃɓʙΒβϦБВЪЬвѢѣҔҕხᛔᴃḂḃḄḅḆḇⲂⲃⴂ']
const cSubs = [...'CcÇçĆćĈĉĊċČčƇȻȼʗͼϹϾСсҀҁҪҫᏟᑕᑖᑡᑢᑣᑤᑥᑪᥴᴄḈḉℂ℃ℭⅭⅽↃↄↅ⊂⊄⊈⊊⊏⊑⋐⍧']
const alphabet = [aSubs, bSubs, cSubs, dSubs, eSubs, fSubs, gSubs, hSubs, iSubs, jSubs, kSubs, lSubs, mSubs, nSubs, oSubs, pSubs, qSubs, rSubs, sSubs, tSubs, uSubs, vSubs, wSubs, xSubs, ySubs, zSubs]


function ransomWhere(selection) {
    selection = selection.split('').map(function(char) {

    }).join('');

    if (confirm(`Copy to clipboard?\n\n${pasta}`)) {
        copyToClipboard(selection);
    }
}

function copyToClipboard(text) {
    let tempElement = document.createElement("textarea");
    document.body.appendChild(tempElement);
    tempElement.value = text;
    tempElement.select();
    document.execCommand("copy");
    tempElement.parentNode.removeChild(tempElement);
}

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "ransom-where-menu",
        title: "Ransom where? Ransom here!",
        contexts:["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "ransom-where-menu") {
        ransomWhere(info.selectionText);
    }
});