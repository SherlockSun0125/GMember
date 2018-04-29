!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Chatroom = t() : e.Chatroom = t()
}(this, function () {
    return webpackJsonp_NIM_Web_SDK_v2_8_0([0], [function (e, t, o) {
        o(1), o(2), o(3).polyfill();
        var r = o(8);
        r.platform = o(18), r.xhr = o(66), r.io = o(34), r.naturalSort = o(11), r.deepAccess = o(12), r.db = o(73), r.util = o(10), r.support = o(74), r.blob = o(26), e.exports = r
    }, , , , , , , , function (e, t, o) {
        function r(e) {
            var t = this;
            return e.Protocol = n, e.Message = s, e.constructor = r, t.init(e)
        }

        var a = o(9), n = o(30), m = o(21), i = o(46), s = o(52), c = o(10), u = c.verifyOptions, p = c.verifyParamType;
        r.name = "Chatroom", r.setDebug = a.setDebug, r.getInstance = a.getInstance, r.genInstanceName = function (e) {
            return c.verifyOptions(e, "chatroomId"), r.name + "-account-" + e.account + "-chatroomId-" + e.chatroomId
        };
        var d = r.fn = r.prototype = Object.create(a.prototype);
        r.info = d.info = m.info, d.getChatroom = function (e) {
            var t = this;
            t.processCallback(e), t.sendCmd("getChatroom", e)
        }, d.updateChatroom = function (e) {
            u(e, "chatroom needNotify"), p("needNotify", e.needNotify, "boolean"), this.processCustom(e), this.processCallback(e), e.chatroom = new i(e.chatroom), this.sendCmd("updateChatroom", e)
        }, d.closeChatroom = function (e) {
            var t = this;
            t.processCustom(e), t.processCallback(e), t.sendCmd("closeChatroom", e)
        }, e.exports = r, o(64), o(65)
    }, , , , , , , , , , , , , , , , , , , , , , function (e, t, o) {
        function r(e) {
            var t = this;
            n.verifyOptions(e, "appKey account token chatroomId chatroomAddresses"), n.verifyParamType("chatroomAddresses", e.chatroomAddresses, "array"), n.verifyCallback(e, "onconnect onerror onwillreconnect ondisconnect onmsg onmsgs"), a.call(t, e)
        }

        var a = o(31), n = o(10), m = n.undef, i = n.notundef, s = o(21), c = o(41), u = o(42), p = o(44), d = o(45),
            h = c.getInstance({type: "Chatroom", configMap: u, serializeMap: p, unserializeMap: d}), l = o(46),
            f = o(47), y = a.fn, g = r.fn = r.prototype = Object.create(y);
        g.init = function () {
            var e = this;
            y.init.call(e), e.parser = h, e.syncResult = {}, e.timetags = {}, e.msgBuffer = []
        }, g.reset = function () {
            var e = this;
            y.reset.call(e);
            var t = e.options;
            m(t.msgBufferInterval) && (t.msgBufferInterval = 300), n.verifyParamType("msgBufferInterval", t.msgBufferInterval, "number"), m(t.msgBufferSize) && (t.msgBufferSize = 500), n.verifyParamType("msgBufferSize", t.msgBufferSize, "number"), i(t.chatroomAddresses) && (e.socketUrls = t.chatroomAddresses.map(s.formatSocketUrl), e.socketUrlsBackup = e.socketUrls.slice(0))
        }, g.processChatroom = function (e) {
            var t = this;
            switch (e.cmd) {
                case"login":
                    e.error || (e.obj = {
                        chatroom: l.reverse(e.content.chatroom),
                        member: f.reverse(e.content.chatroomMember)
                    });
                    break;
                case"kicked":
                    t.onKicked(e);
                    break;
                case"logout":
                    break;
                case"sendMsg":
                    t.onSendMsg(e);
                    break;
                case"msg":
                    t.onMsg(e);
                    break;
                case"getChatroomMembers":
                    t.onChatroomMembers(e);
                    break;
                case"getHistoryMsgs":
                    t.onHistoryMsgs(e);
                    break;
                case"markChatroomMember":
                    t.onMarkChatroomMember(e);
                    break;
                case"closeChatroom":
                    break;
                case"getChatroom":
                    t.onChatroom(e);
                    break;
                case"updateChatroom":
                    break;
                case"updateMyChatroomMemberInfo":
                    delete e.obj.chatroomMember;
                    break;
                case"getChatroomMembersInfo":
                    t.onChatroomMembersInfo(e);
                    break;
                case"kickChatroomMember":
                    break;
                case"updateChatroomMemberTempMute":
            }
        }, g.onChatroom = function (e) {
            e.error || (e.obj.chatroom = l.reverse(e.content.chatroom))
        }, e.exports = r, o(48), o(49), o(50), o(51)
    }, , , , , , , , , , , , function (e, t, o) {
        var r = o(10), a = o(43), n = r.merge({}, a.idMap, {
            chatroom: {
                id: 13,
                login: 2,
                kicked: 3,
                logout: 4,
                sendMsg: 6,
                msg: 7,
                getChatroomMembers: 8,
                getHistoryMsgs: 9,
                markChatroomMember: 11,
                closeChatroom: 12,
                getChatroom: 13,
                updateChatroom: 14,
                updateMyChatroomMemberInfo: 15,
                getChatroomMembersInfo: 16,
                kickChatroomMember: 17,
                updateChatroomMemberTempMute: 19
            }
        }), m = r.merge({}, a.cmdConfig, {
            login: {
                sid: n.chatroom.id,
                cid: n.chatroom.login,
                params: [{type: "byte", name: "type"}, {type: "Property", name: "login"}, {
                    type: "Property",
                    name: "imLogin"
                }]
            },
            logout: {sid: n.chatroom.id, cid: n.chatroom.logout},
            sendMsg: {sid: n.chatroom.id, cid: n.chatroom.sendMsg, params: [{type: "Property", name: "msg"}]},
            getChatroomMembers: {
                sid: n.chatroom.id,
                cid: n.chatroom.getChatroomMembers,
                params: [{type: "byte", name: "type"}, {type: "long", name: "time"}, {type: "int", name: "limit"}]
            },
            getHistoryMsgs: {
                sid: n.chatroom.id,
                cid: n.chatroom.getHistoryMsgs,
                params: [{type: "long", name: "timetag"}, {type: "int", name: "limit"}]
            },
            markChatroomMember: {
                sid: n.chatroom.id,
                cid: n.chatroom.markChatroomMember,
                params: [{type: "string", name: "account"}, {type: "int", name: "type"}, {
                    type: "bool",
                    name: "isAdd"
                }, {type: "int", name: "level"}, {type: "string", name: "custom"}]
            },
            closeChatroom: {
                sid: n.chatroom.id,
                cid: n.chatroom.closeChatroom,
                params: [{type: "string", name: "custom"}]
            },
            getChatroom: {sid: n.chatroom.id, cid: n.chatroom.getChatroom},
            updateChatroom: {
                sid: n.chatroom.id,
                cid: n.chatroom.updateChatroom,
                params: [{type: "Property", name: "chatroom"}, {type: "boolean", name: "needNotify"}, {
                    type: "String",
                    name: "custom"
                }]
            },
            updateMyChatroomMemberInfo: {
                sid: n.chatroom.id,
                cid: n.chatroom.updateMyChatroomMemberInfo,
                params: [{type: "Property", name: "chatroomMember"}, {
                    type: "boolean",
                    name: "needNotify"
                }, {type: "String", name: "custom"}]
            },
            getChatroomMembersInfo: {
                sid: n.chatroom.id,
                cid: n.chatroom.getChatroomMembersInfo,
                params: [{type: "StrArray", name: "accounts"}]
            },
            kickChatroomMember: {
                sid: n.chatroom.id,
                cid: n.chatroom.kickChatroomMember,
                params: [{type: "string", name: "account"}, {type: "string", name: "custom"}]
            },
            updateChatroomMemberTempMute: {
                sid: n.chatroom.id,
                cid: n.chatroom.updateChatroomMemberTempMute,
                params: [{type: "String", name: "account"}, {type: "long", name: "duration"}, {
                    type: "boolean",
                    name: "needNotify"
                }, {type: "String", name: "custom"}]
            }
        }), i = "chatroom", s = r.merge({}, a.packetConfig, {
            "4_10": {service: "notify"},
            "4_11": {service: "notify"},
            "13_2": {
                service: i,
                cmd: "login",
                response: [{type: "Property", name: "chatroom"}, {type: "Property", name: "chatroomMember"}]
            },
            "13_3": {
                service: i,
                cmd: "kicked",
                response: [{type: "Number", name: "reason"}, {type: "String", name: "custom"}]
            },
            "13_4": {service: i, cmd: "logout"},
            "13_6": {service: i, cmd: "sendMsg", response: [{type: "Property", name: "msg"}]},
            "13_7": {service: i, cmd: "msg", response: [{type: "Property", name: "msg"}]},
            "13_8": {
                service: i,
                cmd: "getChatroomMembers",
                response: [{type: "PropertyArray", name: "members", entity: "chatroomMember"}]
            },
            "13_9": {
                service: i,
                cmd: "getHistoryMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "13_11": {service: i, cmd: "markChatroomMember", response: [{type: "Property", name: "chatroomMember"}]},
            "13_12": {service: i, cmd: "closeChatroom"},
            "13_13": {service: i, cmd: "getChatroom", response: [{type: "Property", name: "chatroom"}]},
            "13_14": {service: i, cmd: "updateChatroom"},
            "13_15": {service: i, cmd: "updateMyChatroomMemberInfo"},
            "13_16": {
                service: i,
                cmd: "getChatroomMembersInfo",
                response: [{type: "PropertyArray", name: "members", entity: "chatroomMember"}]
            },
            "13_17": {service: i, cmd: "kickChatroomMember"},
            "13_19": {service: i, cmd: "updateChatroomMemberTempMute"}
        });
        e.exports = {idMap: n, cmdConfig: m, packetConfig: s}
    }, , function (e, t) {
        e.exports = {
            imLogin: {
                os: 4,
                sdkVersion: 6,
                protocolVersion: 9,
                deviceId: 13,
                appKey: 18,
                account: 19,
                browser: 24,
                session: 26,
                token: 1e3
            },
            nosToken: {objectName: 1, token: 2, bucket: 3, expireTime: 4},
            audioToText: {url: 2},
            imageOp: {
                type: 0,
                stripmeta: 1,
                typeType: 2,
                blurRadius: 3,
                blurSigma: 4,
                qualityQuality: 5,
                cropX: 6,
                cropY: 7,
                cropWidth: 8,
                cropHeight: 9,
                rotateAngle: 10,
                pixelPixel: 11,
                thumbnailMode: 12,
                thumbnailWidth: 13,
                thumbnailHeight: 14,
                thumbnailAxisX: 15,
                thumbnailAxisY: 16,
                thumbnailCenterX: 17,
                thumbnailCenterY: 18,
                thumbnailEnlarge: 19,
                thumbnailToStatic: 20,
                watermarkType: 21,
                watermarkGravity: 22,
                watermarkDissolve: 23,
                watermarkDx: 24,
                watermarkDy: 25,
                watermarkImage: 26,
                watermarkText: 27,
                watermarkFont: 28,
                watermarkFontSize: 29,
                watermarkFontColor: 30,
                interlace: 31
            },
            login: {
                appKey: 1,
                account: 2,
                deviceId: 3,
                chatroomId: 5,
                chatroomNick: 20,
                chatroomAvatar: 21,
                chatroomCustom: 22,
                chatroomEnterCustom: 23,
                session: 26
            },
            chatroom: {
                id: 1,
                name: 3,
                announcement: 4,
                broadcastUrl: 5,
                custom: 12,
                createTime: 14,
                updateTime: 15,
                creator: 100,
                onlineMemberNum: 101
            },
            msg: {
                idClient: 1,
                type: 2,
                attach: 3,
                custom: 4,
                resend: 5,
                userUpdateTime: 6,
                fromNick: 7,
                fromAvatar: 8,
                fromCustom: 9,
                time: 20,
                from: 21,
                chatroomId: 22,
                fromClientType: 23
            },
            chatroomMember: {
                chatroomId: 1,
                account: 2,
                type: 3,
                level: 4,
                nick: 5,
                avatar: 6,
                custom: 7,
                online: 8,
                guest: 9,
                enterTime: 10,
                blacked: 12,
                gaged: 13,
                valid: 14,
                updateTime: 15,
                tempMuted: 16,
                tempMuteDuration: 17
            }
        }
    }, function (e, t) {
        e.exports = {
            imLogin: {
                4: "os",
                6: "sdkVersion",
                9: "protocolVersion",
                13: "deviceId",
                18: "appKey",
                19: "account",
                24: "browser",
                26: "session",
                1000: "token"
            },
            nosToken: {1: "objectName", 2: "token", 3: "bucket", 4: "expireTime"},
            audioToText: {2: "url"},
            imageOp: {
                0: "type",
                1: "stripmeta",
                2: "typeType",
                3: "blurRadius",
                4: "blurSigma",
                5: "qualityQuality",
                6: "cropX",
                7: "cropY",
                8: "cropWidth",
                9: "cropHeight",
                10: "rotateAngle",
                11: "pixelPixel",
                12: "thumbnailMode",
                13: "thumbnailWidth",
                14: "thumbnailHeight",
                15: "thumbnailAxisX",
                16: "thumbnailAxisY",
                17: "thumbnailCenterX",
                18: "thumbnailCenterY",
                19: "thumbnailEnlarge",
                20: "thumbnailToStatic",
                21: "watermarkType",
                22: "watermarkGravity",
                23: "watermarkDissolve",
                24: "watermarkDx",
                25: "watermarkDy",
                26: "watermarkImage",
                27: "watermarkText",
                28: "watermarkFont",
                29: "watermarkFontSize",
                30: "watermarkFontColor",
                31: "interlace"
            },
            login: {
                1: "appKey",
                2: "account",
                3: "deviceId",
                5: "chatroomId",
                20: "chatroomNick",
                21: "chatroomAvatar",
                22: "chatroomCustom",
                23: "chatroomEnterCustom",
                26: "session"
            },
            chatroom: {
                1: "id",
                3: "name",
                4: "announcement",
                5: "broadcastUrl",
                12: "custom",
                14: "createTime",
                15: "updateTime",
                100: "creator",
                101: "onlineMemberNum"
            },
            msg: {
                1: "idClient",
                2: "type",
                3: "attach",
                4: "custom",
                5: "resend",
                6: "userUpdateTime",
                7: "fromNick",
                8: "fromAvatar",
                9: "fromCustom",
                20: "time",
                21: "from",
                22: "chatroomId",
                23: "fromClientType"
            },
            chatroomMember: {
                1: "chatroomId",
                2: "account",
                3: "type",
                4: "level",
                5: "nick",
                6: "avatar",
                7: "custom",
                8: "online",
                9: "guest",
                10: "enterTime",
                12: "blacked",
                13: "gaged",
                14: "valid",
                15: "updateTime",
                16: "tempMuted",
                17: "tempMuteDuration"
            }
        }
    }, function (e, t, o) {
        function r(e) {
            var t = this;
            n(e.name) && (t.name = "" + e.name), n(e.announcement) && (t.announcement = "" + e.announcement), n(e.broadcastUrl) && (t.broadcastUrl = "" + e.broadcastUrl), n(e.custom) && (t.custom = "" + e.custom)
        }

        var a = o(10), n = a.notundef, m = a.undef;
        r.reverse = function (e) {
            var t = a.copy(e);
            return m(t.announcement) && (t.announcement = ""), m(t.broadcastUrl) && (t.broadcastUrl = ""), m(t.custom) && (t.custom = ""), n(t.createTime) && (t.createTime = +t.createTime), n(t.updateTime) && (t.updateTime = +t.updateTime), n(t.onlineMemberNum) && (t.onlineMemberNum = +t.onlineMemberNum), t
        }, e.exports = r
    }, function (e, t, o) {
        function r(e) {
            var t = this;
            n(e.nick) && (t.nick = "" + e.nick), n(e.avatar) && (t.avatar = "" + e.avatar), n(e.custom) && (t.custom = "" + e.custom)
        }

        var a = o(10), n = a.notundef, m = {"-1": "restricted", 0: "common", 1: "owner", 2: "manager"};
        r.reverse = function (e) {
            var t = a.copy(e);
            return n(t.chatroomId) && (t.chatroomId = "" + t.chatroomId), n(t.type) && (t.type = m[t.type]), n(t.level) && (t.level = +t.level), n(t.online) && (t.online = 1 === +t.online), n(t.enterTime) && (t.enterTime = +t.enterTime), n(t.guest) && (t.guest = 1 === +t.guest), n(t.blacked) && (t.blacked = 1 === +t.blacked), n(t.gaged) && (t.gaged = 1 === +t.gaged), n(t.valid) && (t.valid = 1 === +t.valid), n(t.updateTime) && (t.updateTime = +t.updateTime), n(t.tempMuted) ? t.tempMuted = 1 === +t.tempMuted : t.tempMuted = !1, n(t.tempMuteDuration) ? t.tempMuteDuration = +t.tempMuteDuration : t.tempMuteDuration = 0, t.online || delete t.enterTime, t.guest && (t.type = "guest", delete t.valid), "common" !== t.type && delete t.level, delete t.guest, t
        }, r.reverseMembers = function (e) {
            return e.map(function (e) {
                return r.reverse(e)
            })
        }, r.validTypes = Object.keys(m), e.exports = r
    }, function (e, t, o) {
        var r = o(30).fn;
        r.refreshSocketUrl = function () {
            var e = this;
            e.socketUrls = e.socketUrlsBackup.slice(0), e.connectToUrl(e.getNextSocketUrl())
        }
    }, function (e, t, o) {
        var r = o(30).fn, a = o(37), n = o(10);
        r.assembleLogin = function () {
            var e = this, t = e.options, o = {
                appKey: t.appKey,
                account: t.account,
                deviceId: a.deviceId,
                chatroomId: t.chatroomId,
                session: e.genSessionKey()
            };
            return o = n.merge(o, n.filterObj(t, "chatroomNick chatroomAvatar chatroomCustom chatroomEnterCustom")), {
                type: 1,
                login: o,
                imLogin: e.assembleIMLogin()
            }
        }, r.afterLogin = function (e) {
            var t = this, o = e.chatroom;
            t.chatroom = o, t.notifyLogin()
        }, r.kickedReasons = ["", "chatroomClosed", "managerKick", "samePlatformKick", "silentlyKick", "blacked"], r.kickedMessages = ["", "聊天室关闭了", "被房主或者管理员踢出", "不允许同一个帐号在多个地方同时登录", "悄悄被踢", "被拉黑了"]
    }, function (e, t, o) {
        var r = o(30).fn, a = o(10);
        r.completeMsg = function (e) {
            var t = this;
            e.chatroomId = t.chatroom.id, e.from = t.options.account, e.fromClientType = "Web", e.time || (e.time = +new Date)
        }, r.onMsg = function (e) {
            var t = this, o = t.message.reverse(e.content.msg);
            t.checkMsgUnique(o) && (t.msgBuffer.push(o), t.msgFlushTimer || t.startMsgFlushTimer())
        }, r.startMsgFlushTimer = function () {
            var e = this, t = e.options;
            e.msgFlushTimer = setTimeout(function () {
                var o = e.msgBuffer.splice(0, t.msgBufferSize);
                e.options.onmsgs(o), e.msgBuffer.length ? e.startMsgFlushTimer() : delete e.msgFlushTimer
            }, t.msgBufferInterval)
        }, r.checkMsgUnique = a.genCheckUniqueFunc("idClient"), r.onSendMsg = function (e) {
            var t = e.obj.msg;
            e.error ? t.status = "fail" : (t = e.content.msg, t.status = "success"), t = this.message.reverse(t), e.obj = t
        }, r.onHistoryMsgs = function (e) {
            e.error || (e.obj.msgs = this.message.reverseMsgs(e.content.msgs))
        }
    }, function (e, t, o) {
        var r = o(30).fn, a = o(47);
        r.onChatroomMembersInfo = r.onChatroomMembers = function (e) {
            e.error || (e.obj.members = a.reverseMembers(e.content.members))
        }, r.onMarkChatroomMember = function (e) {
            e.error || (e.obj.member = a.reverse(e.content.chatroomMember))
        }
    }, function (e, t, o) {
        var r = o(10), a = function (e) {
                this.account = e.account
            }, n = a.prototype, m = n.Message = o(53), i = n.TextMessage = o(55), s = n.FileMessage = o(56),
            c = n.GeoMessage = o(60), u = n.NotificationMessage = o(61), p = n.CustomMessage = o(62),
            d = n.TipMessage = o(63);
        n.validTypes = m.validTypes, n.reverse = function (e) {
            var t, o = m.getType(e);
            switch (o) {
                case"text":
                    t = i.reverse(e);
                    break;
                case"image":
                case"audio":
                case"video":
                case"file":
                    t = s.reverse(e);
                    break;
                case"geo":
                    t = c.reverse(e);
                    break;
                case"notification":
                    t = u.reverse(e);
                    break;
                case"custom":
                    t = p.reverse(e);
                    break;
                case"tip":
                    t = d.reverse(e);
                    break;
                default:
                    t = m.reverse(e)
            }
            return m.setExtra(t, this.account), t
        }, n.reverseMsgs = function (e, t) {
            var o, a, n = this;
            return e.map(function (e) {
                return e = n.reverse(e), t && (o = t.modifyObj, o && (e = r.merge(e, o)), a = t.mapper, r.isFunction(a) && (e = a(e))), e
            })
        }, e.exports = a
    }, function (e, t, o) {
        function r(e) {
            var t = this;
            e.resend ? (a.verifyOptions(e, "idClient"), t.idClient = e.idClient) : t.idClient = a.guid(), t.type = s[e.type], t.resend = e.resend ? 1 : 0, n(e.custom) && (t.custom = "" + e.custom)
        }

        var a = o(10), n = a.notundef, m = o(36), i = o(54), s = i.typeMap;
        r.validTypes = i.validTypes, r.getType = i.getType, r.reverse = function (e) {
            var t = a.filterObj(e, "chatroomId idClient from fromNick fromAvatar fromCustom userUpdateTime custom status");
            return t = a.merge(t, {
                fromClientType: m.reverseType(e.fromClientType),
                type: r.getType(e),
                time: +e.time,
                resend: 1 === +e.resend
            }), n(t.userUpdateTime) && (t.userUpdateTime = +t.userUpdateTime), t.status = t.status || "success", t
        }, r.setExtra = function (e, t) {
            i.setFlow(e, t)
        }, e.exports = r
    }, , function (e, t, o) {
        function r(e) {
            n.verifyOptions(e, "text"), e.type = "text", a.call(this, e), this.attach = e.text
        }

        var a = o(53), n = o(10);
        r.prototype = Object.create(a.prototype), r.reverse = function (e) {
            var t = a.reverse(e);
            return t.text = e.attach, t
        }, e.exports = r
    }, function (e, t, o) {
        function r(e) {
            switch (n.notundef(e.type) ? n.verifyFileType(e.type) : e.type = "file", n.verifyOptions(e, "file"), n.verifyOptions(e.file, "url ext size md5", !0, "file."), e.type) {
                case"image":
                    m.verifyFile(e.file);
                    break;
                case"audio":
                    i.verifyFile(e.file);
                    break;
                case"video":
                    s.verifyFile(e.file)
            }
            a.call(this, e), this.attach = JSON.stringify(e.file)
        }

        var a = o(53), n = o(10);
        r.prototype = Object.create(a.prototype), r.reverse = function (e) {
            var t = a.reverse(e);
            return e.attach = e.attach ? "" + e.attach : "", t.file = e.attach ? JSON.parse(e.attach) : {}, "audio" === t.type && (t.file.mp3Url = t.file.url + "?audioTrans&type=mp3"), t
        }, e.exports = r;
        var m = o(57), i = o(58), s = o(59)
    }, function (e, t, o) {
        function r() {
        }

        var a = o(10), n = o(56);
        r.prototype = Object.create(n.prototype), r.verifyFile = function (e) {
            a.verifyOptions(e, "w h", !0, "file.")
        }, e.exports = r
    }, function (e, t, o) {
        function r() {
        }

        var a = o(56), n = o(10);
        r.prototype = Object.create(a.prototype), r.verifyFile = function (e) {
            n.verifyOptions(e, "dur", !0, "file.")
        }, e.exports = r
    }, function (e, t, o) {
        function r() {
        }

        var a = o(56), n = o(10);
        r.prototype = Object.create(a.prototype), r.verifyFile = function (e) {
            n.verifyOptions(e, "dur w h", !0, "file.")
        }, e.exports = r
    }, function (e, t, o) {
        function r(e) {
            e.type = "geo", n.verifyOptions(e, "geo"), n.verifyOptions(e.geo, "lng lat title", !0, "geo."), n.verifyParamType("geo.lng", e.geo.lng, "number"), n.verifyParamType("geo.lat", e.geo.lat, "number"), n.verifyParamType("geo.title", e.geo.title, "string"), a.call(this, e), this.attach = JSON.stringify(e.geo)
        }

        var a = o(53), n = o(10);
        r.prototype = Object.create(a.prototype), r.reverse = function (e) {
            var t = a.reverse(e);
            return e.attach = e.attach ? "" + e.attach : "", t.geo = e.attach ? JSON.parse(e.attach) : {}, t
        }, e.exports = r
    }, function (e, t, o) {
        function r() {
        }

        var a = o(10), n = a.notundef, m = o(53), i = {
            301: "memberEnter",
            302: "memberExit",
            303: "blackMember",
            304: "unblackMember",
            305: "gagMember",
            306: "ungagMember",
            307: "addManager",
            308: "removeManager",
            309: "addCommon",
            310: "removeCommon",
            311: "closeChatroom",
            312: "updateChatroom",
            313: "kickMember",
            314: "addTempMute",
            315: "removeTempMute",
            316: "updateMemberInfo"
        };
        r.prototype = Object.create(m.prototype), r.reverse = function (e) {
            var t = m.reverse(e);
            if (e.attach = e.attach ? "" + e.attach : "", e.attach) {
                var o = JSON.parse(e.attach);
                if (t.attach = {type: i[o.id]}, n(o.data)) {
                    var r = o.data;
                    n(r.operator) && (t.attach.from = r.operator), n(r.opeNick) && (t.attach.fromNick = r.opeNick), n(r.target) && (t.attach.to = r.target), n(r.tarNick) && (t.attach.toNick = r.tarNick), n(r.muteDuration) && (t.attach.duration = parseInt(r.muteDuration, 10)), n(r.ext) && (t.attach.custom = r.ext)
                }
            } else t.attach = {};
            return t
        }, e.exports = r
    }, function (e, t, o) {
        function r(e) {
            n.verifyOptions(e, "content"), e.type = "custom", a.call(this, e), this.attach = e.content
        }

        var a = o(53), n = o(10);
        r.prototype = Object.create(a.prototype), r.reverse = function (e) {
            var t = a.reverse(e);
            return t.content = e.attach, t
        }, e.exports = r
    }, function (e, t, o) {
        function r(e) {
            n.verifyOptions(e, "tip"), e.type = "tip", a.call(this, e), this.attach = e.tip
        }

        var a = o(53), n = o(10);
        r.prototype = Object.create(a.prototype), r.reverse = function (e) {
            var t = a.reverse(e);
            return t.tip = e.attach, t
        }, e.exports = r
    }, function (e, t, o) {
        var r = o(10), a = r.undef, n = o(8).fn;
        n.beforeSendMsg = function (e) {
            e.cmd = "sendMsg"
        }, n.getHistoryMsgs = function (e) {
            r.verifyOptions(e), a(e.timetag) ? e.timetag = 0 : r.verifyParamType("timetag", e.timetag, "number"), a(e.limit) ? e.limit = 100 : r.verifyParamType("limit", e.limit, "number");
            var t = this;
            t.processCallback(e), t.sendCmd("getHistoryMsgs", e, e.callback)
        }
    }, function (e, t, o) {
        var r = o(10), a = r.undef, n = r.verifyOptions, m = r.verifyParamType, i = o(47), s = o(8).fn;
        s.updateMyChatroomMemberInfo = function (e) {
            n(e, "member needNotify"), m("needNotify", e.needNotify, "boolean"), this.processCustom(e), this.processCallback(e), e.chatroomMember = new i(e.member), this.sendCmd("updateMyChatroomMemberInfo", e)
        }, s.getChatroomMembers = function (e) {
            var t = this;
            n(e, "guest"), m("guest", e.guest, "boolean"), a(e.time) ? e.time = 0 : m("time", e.time, "number"), a(e.limit) ? e.limit = 100 : m("limit", e.limit, "number"), t.processCallback(e), e.type = e.guest ? 1 : 0, !e.guest && e.onlyOnline && (e.type = 2), t.sendCmd("getChatroomMembers", e)
        }, s.getChatroomMembersInfo = function (e) {
            var t = this;
            n(e, "accounts"), m("accounts", e.accounts, "array"), t.processCallback(e), t.sendCmd("getChatroomMembersInfo", e)
        }, s.markChatroomManager = function (e) {
            e.type = 1, this.markChatroomMember(e)
        }, s.markChatroomCommonMember = function (e) {
            e.type = 2, this.markChatroomMember(e)
        }, s.markChatroomBlacklist = function (e) {
            e.type = -1, this.markChatroomMember(e)
        }, s.markChatroomGaglist = function (e) {
            e.type = -2, this.markChatroomMember(e)
        }, s.markChatroomMember = function (e) {
            n(e, "account type isAdd"), m("isAdd", e.isAdd, "boolean"), a(e.level) ? e.level = 0 : m("level", e.level, "number");
            var t = this;
            t.processCustom(e), t.processCallback(e), t.sendCmd("markChatroomMember", e)
        }, s.kickChatroomMember = function (e) {
            var t = this;
            n(e, "account"), t.processCustom(e), t.processCallback(e), t.sendCmd("kickChatroomMember", e)
        }, s.updateChatroomMemberTempMute = function (e) {
            var t = this;
            n(e, "account duration needNotify"), m("duration", e.duration, "number"), m("needNotify", e.needNotify, "boolean"), t.processCustom(e), t.processCallback(e), t.sendCmd("updateChatroomMemberTempMute", e)
        }
    }])
});