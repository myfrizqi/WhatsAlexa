let { newCommand } = require('../events');
let WhatsAlexa = require('../events');
let Config = require('../config');
let fs = require('fs');
let {MessageType} = require('@adiwajshing/baileys');
let Language = require('../language');
let Lang = Language.getString('list');
let td = Config.WORKTYPE == 'public' ? false : true

var LOADING = ''
var warning = ''
var anti_link = ''
var auto_bio = ''
var language = ''
var MSG = ''
var FMSG = ''
if (Config.ANTILINK == 'true') anti_link = 'On'
if (Config.ANTILINK == 'false') anti_link = 'Off'
if (Config.AUTOBIO == 'true') auto_bio = 'On'
if (Config.AUTOBIO == 'false') auto_bio = 'Off'
if (Config.LANG == 'EN') warning = 'We are not responsible for any consequences that may arise from use or misuse of Bot, You are responsible for all consequences also the responsibility of sharing Images, Videos, Stickers, Audios etc.. are yours!', language = 'English', FMSG = 'Have a Nice Day 💖\n\n```Git:``` *'+Config.GIT+'*\n\n```Thank You For using WhatsAlexa 💕```\n*© WhatsAlexa, Made By Toxic Devil*\n\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n   *⦁◊═⦁ Whats 👸 Alexa ⦁═◊⦁*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*',  MSG = '*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n   *⦁◊═⦁ Whats 👸 Alexa ⦁═◊⦁*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n\nHi user,\n*'+warning+'*\n\n*◆ BOT INFO ◆*\n\n```▣ Developer:``` *TOXIC DEVIL*\n```▣ Owner:``` *'+Config.OWNER+'*\n```▣ Contact Owner:``` *wa.me/'+Config.OWNERNUM+'*\n```▣ Version:``` *'+Config.VERSION+'*\n```▣ Branch:``` *'+Config.BRANCH+'*\n```▣ Language:``` *'+language+'*\n```▣ Auto Bio:``` *'+auto_bio+'*\n```▣ Antilink:``` *'+anti_link+'*\n```▣ Work Type:``` *'+Config.WORKTYPE+'*\n\n∎ ⇓ *Commands* ⇓ ∎\n\n'
if (Config.LANG == 'ML') warning = 'ബോട്ടിന്റെ ഉപയോഗത്തിൽ നിന്നോ ദുരുപയോഗത്തിൽ നിന്നോ ഉണ്ടാകുന്ന അനന്തരഫലങ്ങൾക്ക് ഞങ്ങൾ ഉത്തരവാദികളല്ല, ചിത്രങ്ങൾ, വീഡിയോകൾ, സ്റ്റിക്കറുകൾ, ഓഡിയോകൾ മുതലായവ പങ്കിടുന്നതിന്റെ ഉത്തരവാദിത്തവും നിങ്ങളാണ്.', language = 'മലയാളം', FMSG = 'ഒരു നല്ല ദിനം ആശംസിക്കുന്നു 💖\n\n```ഗിറ്റ്:``` *'+Config.GIT+'*\n\n```WhatsAlexa ഉപയോഗിച്ചതിന് നന്ദി 💕```\n*© WhatsAlexa, ഉണ്ടാക്കിയത് Toxic Devil*\n\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n   *⦁◊═⦁ Whats 👸 Alexa ⦁═◊⦁*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*', MSG = '*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n   *⦁◊═⦁ Whats 👸 Alexa ⦁═◊⦁*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n\nനമസ്കാരം user,\n*'+warning+'*\n\n*◆ ബോട്ട് വിവരം ◆*\n\n```▣ ഡെവലപ്പർ:``` *TOXIC DEVIL*\n```▣ ഉടമ:``` *'+Config.OWNER+'*\n```▣ ഉടമയുമായി ബന്ധപ്പെടുക:``` *wa.me/'+Config.OWNERNUM+'*\n```▣ Version:``` *'+Config.VERSION+'*\n```▣ Branch:``` *'+Config.BRANCH+'*\n```▣ ഭാഷ:``` *'+language+'*\n```▣ ഓട്ടോ ബയോ:``` *'+auto_bio+'*\n```▣ ആന്റി ലിങ്ക്:``` *'+anti_link+'*\n```▣ വര്‍ക്ക്‌ തരം:``` *'+Config.WORKTYPE+'*\n\n∎ ⇓ *കമാൻഡുകൾ* ⇓ ∎\n\n'
if (Config.LANG == 'ID') warning = 'Kami tidak bertanggung jawab atas segala akibat yang mungkin timbul dari penggunaan atau penyalahgunaan Bot, Anda bertanggung jawab atas semua konsekuensi juga tanggung jawab berbagi Gambar, Video, Stiker, Audio dll. adalah milik Anda!', language = 'Indonasian', FMSG = 'Semoga harimu menyenangkan 💖\n\n```Git:``` *'+Config.GIT+'*\n\n```Terima kasih telah menggunakan WhatsAlexa 💕```\n*© WhatsAlexa, Dibuat oleh Toxic Devil*\n\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n   *⦁◊═⦁ Whats 👸 Alexa ⦁═◊⦁*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*', MSG = '*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n   *⦁◊═⦁ Whats 👸 Alexa ⦁═◊⦁*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*\n\nHai user,\n*'+warning+'*\n\n*◆ INFORMASI BOT ◆*\n\n```▣ Pengembang:``` *TOXIC DEVIL*\n```▣ Pemilik:``` *'+Config.OWNER+'*\n```▣ Version:``` *'+Config.VERSION+'*\n```▣ Branch:``` *'+Config.BRANCH+'*\n```▣ Hubungi Pemilik:``` *wa.me/'+Config.OWNERNUM+'*\n```▣ Bahasa:``` *'+language+'*\n```▣ Bio otomatis:``` *'+auto_bio+'*\n```▣ Anti Tautan:``` *'+anti_link+'*\n```▣ Jenis Pekerjaan:``` *'+Config.WORKTYPE+'*\n\n∎ ⇓ *Perintah* ⇓ ∎\n\n'

    newCommand(
             {cmd: 'list ?(.*)',
              fromMe: td,
              dontAddCommandList: true},
              (async (message, match) => {
       
        var CMD_HELP = '';
        if (match[1] === '') {
            WhatsAlexa.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.cmd === undefined) return;
                    try {
                        var match = command.cmd.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var match = [command.cmd];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                    if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                    if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            );
            
          await message.client.sendMessage(
                message.jid, MSG + CMD_HELP + FMSG, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        } else {

            var CMD_HELP = '';
            WhatsAlexa.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.cmd === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var cmatch = [command.cmd];
                    }
                
                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                        if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                        if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;            
            await message.client.sendMessage(
                message.jid, MSG + CMD_HELP + FMSG, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        }
    }));

    newCommand(
             {cmd: 'menu ?(.*)',
              fromMe: td,
              dontAddCommandList: true},
              (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            WhatsAlexa.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.cmd === undefined) return;
                    try {
                        var match = command.cmd.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var match = [command.cmd];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                    if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                    if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            );
            
          await message.client.sendMessage(
                message.jid, MSG + CMD_HELP + FMSG, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        } else {

            var CMD_HELP = '';
            WhatsAlexa.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.cmd === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var cmatch = [command.cmd];
                    }
                
                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                        if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                        if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;            
            await message.client.sendMessage(
                message.jid, MSG + CMD_HELP + FMSG, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        }
    }));

    newCommand(
             {cmd: 'help ?(.*)',
              fromMe: td,
              dontAddCommandList: true},
              (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            WhatsAlexa.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.cmd === undefined) return;
                    try {
                        var match = command.cmd.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var match = [command.cmd];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                    if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                    if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            );
            
          await message.client.sendMessage(
                message.jid, MSG + CMD_HELP + FMSG, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        } else {

            var CMD_HELP = '';
            WhatsAlexa.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.cmd === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var cmatch = [command.cmd];
                    }
                
                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                        if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                        if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;            
            await message.client.sendMessage(
                message.jid, MSG + CMD_HELP + FMSG, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        }
    }));

    newCommand(
             {cmd: 'cmd ?(.*)',
              fromMe: td,
              dontAddCommandList: true},
              (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            WhatsAlexa.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.cmd === undefined) return;
                    try {
                        var match = command.cmd.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var match = [command.cmd];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                    if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                    if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            );
            
          await message.client.sendMessage(
                message.jid, MSG + CMD_HELP + FMSG, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        } else {

            var CMD_HELP = '';
            WhatsAlexa.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.cmd === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var cmatch = [command.cmd];
                    }
                
                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += '*🎯 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                        if (command.desc !== '') CMD_HELP += '*📝 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                        if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;            
            await message.client.sendMessage(
                message.jid, MSG + CMD_HELP + FMSG, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        }
    }));
