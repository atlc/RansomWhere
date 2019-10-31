// Thanks be to https://unicode-table.com/en/

const aSubs = [...'AaªÀÁÂÃÄÅàáâãäåĀāĂăĄąǍǎǞǟǠǡǺǻȀȁȂȃȦȧȺΆΆαАаӐӑӒӓᶐḀḁἀἁἂἃἄἅἆἇἈἉἊἋἌἍἎἏᾰᾱᾲᾳᾴᾶᾷᾸᾹᾺΆᾼ₳Å∀ⱥⲀⲁ']
const bSubs = [...'BbßƀƁƂƃƄƅɃɓʙΒβϦБВЪЬвѢѣҔҕხᛔᴃḂḃḄḅḆḇⲂⲃⴂ']
const cSubs = [...'CcÇçĆćĈĉĊċČčƇȻȼʗͼϹϾСсҀҁҪҫᏟᑕᑖᑡᑢᑣᑤᑥᑪᥴᴄḈḉℂ℃ℭⅭⅽↅ⊂⊄⊈⊊⊏⊑⋐⍧']
const dSubs = [...'DdÐĎďĐđƉƊɗ႕ძᎠᴅᴆᴰᵭḊḋḌḍḎḏḐḑḒḓↁⱰ']
const eSubs = [...'EeÈÉÊËèéêëĒēĔĕĖėĘęĚěȨɆӖӗӘәӚӛᎬᴇḔḕḖḗḘḙḚḛḜḝẸẹẺẻẼẽẾếỀềỂểỄễỆệἘἙἚἛἜἝⴹ']
const fSubs = [...'FfƑƒᵮḞḟḞḟ']
const gSubs = [...'GgĜĝĞğĠġĢģƓʛḠḡ']
const hSubs = [...'HhĤĥĦħǶȞȟΉΗɦɧḢḣḤḥḦḧḨḩḪḫἨἩἪἫἬἭἮἯ']
const iSubs = [...'IiÌÍÎÏĨĩĪīĬĭĮįȈȉȊȋ']
const jSubs = [...'JjĴĵȷɈɉʝ']
const kSubs = [...'KkĶķĸʞƘƙҠḰḱḲḳḴḵ']
const lSubs = [...'LlĹĺĻļĽľĿŀŁłḶḷḸḹḺḻḼ']
const mSubs = [...'MmɱʩʍΜМӍḾḿṀṁṂṃ']
const nSubs = [...'NnŃńŅņŇňŉŊŋǸǹṄṅṆṇṈṉṊṋ']
const oSubs = [...'OoÒÓÔÕÖØŐȌȍȎȏőŌōŎŏǾǿ']
const pSubs = [...'PpƤРҎҏρṔṕṖṗ']
const qSubs = [...'QqԚԛǪǫǬǭɊɋ']
const rSubs = [...'RrЯɌɍŔŕŖŗŘřṚṛṜṝṞṟ']
const sSubs = [...'SsŚśŜŝŞşŠšṠṡṢṣṤṥṦṧṨṩ']
const tSubs = [...'TtŢţŤťŦŧṪṫṬṭṮṯṰṱ']
const uSubs = [...'UuŨũᏌŪūŬŭŮůŰűŲųμṲṳṴṵṶṷṸṹṺṻỤụỦủỨứỪừỬửỮữỰự']
const vSubs = [...'VνvᏙᏤᐯṼṽṾṿ']
const wSubs = [...'WwŴŵᏔᎳẀẁẂẃẄẅẆẇẈẉ']
const xSubs = [...'XxΧϪϫẊẋẌẍႿϰ']
const ySubs = [...'YyŶŷɎɏᎩŸƳƴẎẏỲỳỴỵỶỷỸỹ']
const zSubs = [...'ZzŹźŻżŽƵƶžẐẑẒẓẔẕ']

const alphabet = [aSubs, bSubs, cSubs, dSubs, eSubs, fSubs, gSubs, hSubs, iSubs, jSubs, kSubs, lSubs, mSubs, nSubs, oSubs, pSubs, qSubs, rSubs, sSubs, tSubs, uSubs, vSubs, wSubs, xSubs, ySubs, zSubs]

function ransomWhere(selection) {
    selection = selection.toLowerCase().split('').map(function(char) {
        alphIndex = char.charCodeAt(0) - 97
        if ((alphIndex >= 0) && (alphIndex <= 26)) {
            letterArr = alphabet[alphIndex]
            char = letterArr[Math.floor(Math.random() * letterArr.length)]
        }
        return char
    }).join('');

    if (confirm(`Copy to clipboard?\n\n${selection}`)) {
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
        title: "Ransom where? ɌȂǹṦŐṃ ἭḜŕề!",
        contexts:["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "ransom-where-menu") {
        ransomWhere(info.selectionText);
    }
});