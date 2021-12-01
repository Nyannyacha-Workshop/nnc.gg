var discordInvite = discordInvite || function() {
    var i1 = {
    }, e1 = "1.0";
    return {
        init: function(e) {
            e.inviteCode = void 0 !== e.inviteCode && e.inviteCode, e.title = void 0 !== e.title ? e.title : "", e.introText = void 0 !== e.introText ? e.introText : "YOU'VE BEEN INVITED TO JOIN A SERVER", e.joinText = void 0 !== e.joinText ? e.joinText : "Join", e.joinedText = void 0 !== e.joinedText ? e.joinedText : "Joined", e.width = void 0 !== e.width ? e.width : 400, e.miniMode = void 0 !== e.miniMode && e.miniMode, e.hideIntro = void 0 !== e.hideIntro && e.hideIntro, e.targetElement = void 0 !== e.targetElement ? e.targetElement : "#discordInviteBox", i1.inviteCode = e.inviteCode, i1.title = e.title, i1.introText = e.introText, i1.joinText = e.joinText, i1.joinedText = e.joinedText, i1.miniMode = e.miniMode, i1.hideIntro = e.hideIntro, i1.width = e.width, i1.targetElement = e.targetElement;
        },
        render: function() {
            if (window.jQuery) d1();
            else {
                var t = document.createElement("script");
                t.type = "text/javascript", t.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", document.head.appendChild(t), t.onload = function() {
                    d1();
                };
            }
            function d1() {
                if (discordCode = i1.inviteCode, discordCode && "" != discordCode) {
                    i1.miniMode ? i1.width = "auto" : "number" == typeof i1.width && (i1.width = i1.width + "px");
                    var t1 = '<div id="discordInvite" style="width: ' + i1.width + ';"><h5 id="introText" class="noselect loadHidden">' + i1.introText + '</h5><div id="discordData"><div id="serverImg" class="discordLink loadHidden" style="background: rgb(54, 57, 63) repeat scroll 50% 50% / 100% 100% padding-box padding-box;"></div><div id="discordInfo"><div id="serverNameBox" class="discordLink"><span class="noselect" id="serverName">' + i1.title + '</span></div><div id="status" class="loadHidden"><div id="statusIndicators" class="noselect"><i id="onlineInd"></i><span id="numOnline">... Online</span><i id="offlineInd"></i><span id="numTotal">... Members</span></div></div></div><button type="button" class="discordLink" id="callToAction"><div id="buttonText" class="noselect">' + i1.joinText + "</div></button></div></div>", d = '<div id="joinedDiscord">' + i1.joinedText + '<svg name="Checkmark" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" id="discordSVG"><g fill="none" fill-rule="evenodd" id="gDiscord"><polyline stroke="currentColor" stroke-width="2" points="3.5 9.5 7 13 15 5" id="discordPolyline"></polyline></g></svg></div>';
                    $(i1.targetElement).append(t1).attr("version", e1), $.ajax({
                        url: "https://discordapp.com/api/v6/invite/" + discordCode + "?with_counts=true",
                        success: function(e) {
                            e.code;
                            var t = e.approximate_member_count.toLocaleString("en") + " Members", o = e.approximate_presence_count.toLocaleString("en") + " Online", n = e.guild.name, r = "https://cdn.discordapp.com/icons/" + e.guild.id + "/" + e.guild.icon + ".jpg";
                            $("#serverName").html(n), $("#serverImg").css("background-image", "url(" + r + ")"), $("#numTotal").html(t), $("#numOnline").html(o), $(".discordLink").click(function() {
                                $("#callToAction").html(d).attr("id", "callToAction-clicked"), url = "https://discordapp.com/invite/" + i1.inviteCode, window.open(url, "_blank");
                            }), $(".loadHidden").show(), i1.miniMode && $("#offlineInd, #numTotal").hide(), i1.hideIntro && $("#introText").hide();
                        },
                        error: function(i) {
                            $("#discordInvite").css("width", "auto");
                            var e = null;
                            void 0 !== i.responseJSON ? ($("#buttonText").html(i.responseJSON.message), $("#discordInfo").remove()) : ($("#discordData").remove(), e = !0), e ? $("#introText").html("ERROR: Invalid Data URL.") : $("#introText").html("An error has occurred."), $("#introText").css("margin", 0).show();
                        }
                    });
                } else $(i1.targetElement).html("Error: No Invite Code Provided").attr("id", "discordInviteError").css("display", "inline-block");
            }
        }
    };
}();

//# sourceMappingURL=index.4f7ca1e6.js.map
