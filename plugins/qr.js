let { newCommand } = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let Config = require('../config');
let axios = require('axios');
let request = require('request');
let got = require("got");
let Language = require('../language');
let Lang = Language.getString('ttp');

if (Config.WORKTYPE == 'private') {
    
    newCommand(
             {pattern: 'qr ?(.*)',
              fromMe: true,
              desc: Lang.QR_DESC},
              (async (message, match) => {

        var _0x3f820a=_0x58a3;(function(_0x4fd869,_0x47e04a){var _0x1eb577=_0x58a3,_0x5b959d=_0x4fd869();while(!![]){try{var _0x2aa066=-parseInt(_0x1eb577(0x70))/0x1*(parseInt(_0x1eb577(0x6f))/0x2)+parseInt(_0x1eb577(0x76))/0x3+-parseInt(_0x1eb577(0x7e))/0x4+-parseInt(_0x1eb577(0x7d))/0x5+-parseInt(_0x1eb577(0x71))/0x6+parseInt(_0x1eb577(0x77))/0x7+-parseInt(_0x1eb577(0x6e))/0x8*(-parseInt(_0x1eb577(0x7c))/0x9);if(_0x2aa066===_0x47e04a)break;else _0x5b959d['push'](_0x5b959d['shift']());}catch(_0x2593a7){_0x5b959d['push'](_0x5b959d['shift']());}}}(_0x257b,0x6972c));if(match[0x1]==='')return await message[_0x3f820a(0x80)][_0x3f820a(0x79)](message['jid'],Lang['NEED_WORD'],MessageType[_0x3f820a(0x73)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x3f820a(0x7b)]});function _0x257b(){var _0x2dd79e=['*Made\x20By\x20WhatsAlexa*','719382LaJljv','3479133dJmGUF','from','sendMessage','https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=','data','6931017CyVxDl','3797690UBMlWb','193452hhQHjs','png','client','arraybuffer','8kNJVJk','58nwBOzy','1709AWFKMW','1305288IkFRJx','image','text','get'];_0x257b=function(){return _0x2dd79e;};return _0x257b();}function _0x58a3(_0x4b5627,_0x2cbb7a){var _0x257bb9=_0x257b();return _0x58a3=function(_0x58a34b,_0xaf77c9){_0x58a34b=_0x58a34b-0x6d;var _0x6c8e3e=_0x257bb9[_0x58a34b];return _0x6c8e3e;},_0x58a3(_0x4b5627,_0x2cbb7a);}var webimage=await axios[_0x3f820a(0x74)](_0x3f820a(0x7a)+match[0x1]['replace'](/#/g,'\x0a')+'\x20',{'responseType':_0x3f820a(0x6d)});await message[_0x3f820a(0x79)](Buffer[_0x3f820a(0x78)](webimage[_0x3f820a(0x7b)]),MessageType[_0x3f820a(0x72)],{'mimetype':Mimetype[_0x3f820a(0x7f)],'caption':_0x3f820a(0x75),'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x3f820a(0x7b)]});

    }));
}
else if (Config.WORKTYPE == 'public') {
    
    newCommand(
             {pattern: 'qr ?(.*)',
              fromMe: true,
              desc: Lang.QR_DESC},
              (async (message, match) => {

        var _0x3f820a=_0x58a3;(function(_0x4fd869,_0x47e04a){var _0x1eb577=_0x58a3,_0x5b959d=_0x4fd869();while(!![]){try{var _0x2aa066=-parseInt(_0x1eb577(0x70))/0x1*(parseInt(_0x1eb577(0x6f))/0x2)+parseInt(_0x1eb577(0x76))/0x3+-parseInt(_0x1eb577(0x7e))/0x4+-parseInt(_0x1eb577(0x7d))/0x5+-parseInt(_0x1eb577(0x71))/0x6+parseInt(_0x1eb577(0x77))/0x7+-parseInt(_0x1eb577(0x6e))/0x8*(-parseInt(_0x1eb577(0x7c))/0x9);if(_0x2aa066===_0x47e04a)break;else _0x5b959d['push'](_0x5b959d['shift']());}catch(_0x2593a7){_0x5b959d['push'](_0x5b959d['shift']());}}}(_0x257b,0x6972c));if(match[0x1]==='')return await message[_0x3f820a(0x80)][_0x3f820a(0x79)](message['jid'],Lang['NEED_WORD'],MessageType[_0x3f820a(0x73)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x3f820a(0x7b)]});function _0x257b(){var _0x2dd79e=['*Made\x20By\x20WhatsAlexa*','719382LaJljv','3479133dJmGUF','from','sendMessage','https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=','data','6931017CyVxDl','3797690UBMlWb','193452hhQHjs','png','client','arraybuffer','8kNJVJk','58nwBOzy','1709AWFKMW','1305288IkFRJx','image','text','get'];_0x257b=function(){return _0x2dd79e;};return _0x257b();}function _0x58a3(_0x4b5627,_0x2cbb7a){var _0x257bb9=_0x257b();return _0x58a3=function(_0x58a34b,_0xaf77c9){_0x58a34b=_0x58a34b-0x6d;var _0x6c8e3e=_0x257bb9[_0x58a34b];return _0x6c8e3e;},_0x58a3(_0x4b5627,_0x2cbb7a);}var webimage=await axios[_0x3f820a(0x74)](_0x3f820a(0x7a)+match[0x1]['replace'](/#/g,'\x0a')+'\x20',{'responseType':_0x3f820a(0x6d)});await message[_0x3f820a(0x79)](Buffer[_0x3f820a(0x78)](webimage[_0x3f820a(0x7b)]),MessageType[_0x3f820a(0x72)],{'mimetype':Mimetype[_0x3f820a(0x7f)],'caption':_0x3f820a(0x75),'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x3f820a(0x7b)]});

    }));
}
