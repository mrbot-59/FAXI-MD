let { smd, prefix, Config } = require(lib_dir);

const statrp = {
key: {
participant: `0@s.whatsapp.net`,
...(citel.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `ᴛᴀɪʀᴀ ᴍᴀᴋɪɴᴏ`
}
}
}

smd({
    pattern: "statrp",
    desc: "Test Status reply Message",
    category: "bugTest",
    filename: __filename
}, async(taira) => {
  await taira.sendMessage(taira.chat, { text: `┃➢ FAXI-MD ` }, { quoted: statrp})
}) 
