"use strict";

/**
 * Copyright (c) 2021-2023 index.js
 *
 * CODE BY AJAY O S
 * Website: https://keerthana-bot.github.io
 * GitHub Profile: https://github.com/Ajayos
 * Project Repository: https://github.com/Ajayos/keerthana
 * Project Website: https://ajayos.github.io/keerthana
 * Project Wiki: https://github.com/Ajayos/Keerthana/wiki
 * Issue Tracker: https://github.com/Ajayos/keerthana/issues
 * Bug Reports: https://github.com/Ajayos/keerthana/issues/new?assignees=&labels=bug&template=bug_report.md&title=
 *
 * Keerthana - an AI powered chatbot for WhatsApp
 *
 * Keerthana is a user-friendly and versatile chatbot that is designed to provide quick and
 * accurate responses to users on WhatsApp. Powered by artificial intelligence,
 * Keerthana can understand natural language queries and provide relevant answers. Whether
 * you need help with a particular task, want to know the weather forecast, or just want to
 * chat with a friendly bot, Keerthana has got you covered. The bot is fully customizable and
 * can be trained to provide personalized responses for specific use cases.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Apache License, Version 2.0 as published by
 * the Apache Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * Apache License, Version 2.0 for more details.
 *
 * You should have received a copy of the Apache License, Version 2.0
 * along with this program.  If not, see <http://www.apache.org/licenses/>.
 *
 * For inquiries or support, please contact Ajay O S at ajayosakhub@gmail.com or 919188346721
 * Follow me on Twitter: @Ajayos
 *
 * CODE BY AJAY O S
 * @owner AJAY O S
 * @project @ajayos/keerthana
 * @license Apache-2.0
 * @link https://github.com/ajayos/keerthana
 * @file index.js
 * @path .//index.js
 * @created 10/9/23, 12:47:54 PM
 * @updated 10/9/23, 6:25:10 PM
 *
 */

function _0x1f3cb9(_0x52ff6e,_0x2eb1d4,_0x1d8fc7,_0x2747eb,_0x12bf99){return _0x3cfc(_0x12bf99-0x143,_0x2747eb);}function _0x4e1352(_0x778cb4,_0x1f2b92,_0x488bbf,_0x1d2e77,_0x1bf0f8){var _0x5785ee={_0x373ed9:0x3c1};return _0x3cfc(_0x1d2e77- -_0x5785ee._0x373ed9,_0x488bbf);}function _0x6bbbe6(_0x3c7d5a,_0x6ade30,_0x4d00a6,_0x2b1dec,_0x773006){var _0x22e4de={_0x22509a:0x37b};return _0x3cfc(_0x6ade30- -_0x22e4de._0x22509a,_0x773006);}function _0x3cfc(_0x3156e0,_0x341106){var _0x29d554=_0x2309();return _0x3cfc=function(_0xda42dc,_0x3a5cac){_0xda42dc=_0xda42dc-(0x9dd+-0xa3*0x12+-0xa*-0x4a);var _0x91bb56=_0x29d554[_0xda42dc];return _0x91bb56;},_0x3cfc(_0x3156e0,_0x341106);}(function(_0x50e891,_0x2e7139){var _0x31b092={_0x34c1ca:0x1ee,_0x22aae2:0x1fa,_0x2b1d51:0x1fe,_0x3d7a06:0x206,_0x4dae7b:0x207,_0x41e3c3:0x1f9,_0x1d7afb:0x155,_0x170a9e:0x157,_0x5745c2:0x15d,_0x52c490:0x152,_0x39ed7e:0x1e2,_0x20c5e2:0x1e1,_0x146c4d:0x15c,_0x79bdca:0x162,_0x4db267:0x267,_0x56e5ca:0x261,_0x33acc0:0x1e1,_0x4e3240:0x1dd,_0x2e4e0d:0x1da},_0x296927={_0x1f57fe:0x8},_0x475268={_0x1fc090:0x336};function _0x4cce76(_0x304b96,_0x47e510,_0x271913,_0x57ec2c,_0x28b9c2){return _0x3cfc(_0x57ec2c- -_0x475268._0x1fc090,_0x271913);}function _0x5eb9a8(_0x545148,_0x5b0fc3,_0x1071ce,_0x509d63,_0x12eaf5){return _0x3cfc(_0x5b0fc3-0xaa,_0x545148);}function _0x55c555(_0x3531ee,_0x264987,_0x2fb0e4,_0x25595a,_0x8ce81d){return _0x3cfc(_0x3531ee-0x115,_0x25595a);}function _0x331763(_0x15f31a,_0x38a1da,_0x46fd25,_0x14eafd,_0x781c98){return _0x3cfc(_0x38a1da-_0x296927._0x1f57fe,_0x46fd25);}var _0x277020=_0x50e891();function _0x5e95fa(_0x79ec05,_0x229239,_0x2e318c,_0xda78fe,_0x59c9db){return _0x3cfc(_0x79ec05- -0x1e5,_0xda78fe);}while(!![]){try{var _0x58861d=parseInt(_0x4cce76(-_0x31b092._0x34c1ca,-0x1e8,-0x1f0,-0x1ea,-0x1e8))/(-0xdb+-0x72d*-0x1+-0x7*0xe7)+-parseInt(_0x5eb9a8(_0x31b092._0x22aae2,0x200,_0x31b092._0x2b1d51,_0x31b092._0x3d7a06,_0x31b092._0x4dae7b))/(-0x1d09+0x1*-0x21fe+0x3f09)+-parseInt(_0x5eb9a8(0x1f6,0x1fd,_0x31b092._0x41e3c3,0x202,0x1fc))/(-0x2*-0xb34+0x1e9*-0x2+-0x1293)+parseInt(_0x331763(_0x31b092._0x1d7afb,_0x31b092._0x170a9e,0x15e,_0x31b092._0x5745c2,_0x31b092._0x52c490))/(-0x1*-0x121f+0x767+-0x5*0x51a)+parseInt(_0x4cce76(-_0x31b092._0x39ed7e,-_0x31b092._0x20c5e2,-0x1e7,-_0x31b092._0x20c5e2,-0x1e1))/(0xe72*-0x2+0x44*-0xf+0x20e5)*(-parseInt(_0x331763(0x160,_0x31b092._0x146c4d,_0x31b092._0x5745c2,_0x31b092._0x79bdca,0x15e))/(0x193a+-0xbf+-0x1875))+parseInt(_0x55c555(_0x31b092._0x4db267,0x26c,_0x31b092._0x56e5ca,0x264,0x26f))/(-0xcb9*0x3+-0x282+-0x824*-0x5)+parseInt(_0x4cce76(-_0x31b092._0x33acc0,-_0x31b092._0x4e3240,-0x1e2,-0x1de,-_0x31b092._0x2e4e0d))/(-0x2460*-0x1+-0x2431+-0x27);if(_0x58861d===_0x2e7139)break;else _0x277020['push'](_0x277020['shift']());}catch(_0x19324a){_0x277020['push'](_0x277020['shift']());}}}(_0x2309,0x3*0x23b87+-0x16b*-0x1d3+-0x5cb94));function _0x2309(){var _0x4bb12d=['\x20of\x20m','\x20test','1529514fzShhF','1004967hMvuEa','6XnSnSO','99245yNRSnZ','740092zsIMbJ','log','2574600LbBnlS','ain\x20b','its\x20a','102376mgWzoF','ase\x20b','uild','1243356yvMauG'];_0x2309=function(){return _0x4bb12d;};return _0x2309();}function _0x512c02(_0x1f9728,_0x4c182c,_0x36d788,_0x338fa2,_0x5406bb){return _0x3cfc(_0x338fa2-0x104,_0x5406bb);}function _0x43ea70(_0x32232a,_0x4e4295,_0x457c10,_0x179046,_0x1cc5c7){return _0x3cfc(_0x4e4295-0x32e,_0x179046);}console[_0x512c02(0x253,0x254,0x259,0x25b,0x263)](_0x43ea70(0x47a,0x479,0x477,0x471,0x477)+_0x43ea70(0x47c,0x47f,0x47f,0x482,0x47c)+_0x4e1352(-0x26d,-0x279,-0x26e,-0x271,-0x278)+_0x512c02(0x25e,0x25f,0x25e,0x25d,0x258)+_0x512c02(0x24e,0x24a,0x256,0x251,0x254)+_0x1f3cb9(0x297,0x293,0x28d,0x28a,0x291));