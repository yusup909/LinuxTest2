function handler(m) {
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Ucup Ganteng;;;FN:Elyas Ganteng\nORG:Ucup Ganteng;\nTEL;type=CELL;type=VOICE;waid=6283897390164:+62 838-9739-0164\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.sendContact(m.chat, '6283897390164', 'YusupKakuu', m)
m.reply(m.chat,'*No Spam / Block?*\n*Chat jika PENTING*', q)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
