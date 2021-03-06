/*
 * JS for loginScreen generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '33f72e88-f312-4e6d-866f-186e1004cd5b';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "SMSSuccess",
    "location": "SMSSuccess.html"
}, {
    "name": "mapViewPage",
    "location": "mapViewPage.html"
}, {
    "name": "loginScreen",
    "location": "loginScreen.html"
}, {
    "name": "editProfilePage",
    "location": "editProfilePage.html"
}, {
    "name": "profilePage",
    "location": "profilePage.html"
}, {
    "name": "dashboard",
    "location": "dashboard.html"
}, {
    "name": "discoveryPreferencesPage",
    "location": "discoveryPreferencesPage.html"
}, {
    "name": "otherProfilePage",
    "location": "otherProfilePage.html"
}];

function loginScreen_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'spacer_6': 'loginScreen_spacer_6',
        'mobilelabel_7': 'loginScreen_mobilelabel_7',
        'mobilelabel_10': 'loginScreen_mobilelabel_10',
        'spacer_8': 'loginScreen_spacer_8',
        'fbLoginButton': 'loginScreen_fbLoginButton'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["loginScreen_restservice2_onsuccess_mapping_0"] = {
        "homeScreen": "loginScreen",
        "directions": [

        {
            "from_name": "restservice2",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "userFbId",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['body']['id']",
                "target": "$"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["loginScreen_restservice2_onbeforesend_mapping_0"] = {
        "homeScreen": "loginScreen",
        "directions": [

        {

            "to_name": "restservice2",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {},
                "parameters": {
                    "access_token": "{access_token}"
                },
                "body": null
            },

            "mappings": []
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.restservice2 = Apperyio.datasources.restservice2 = new Apperyio.DataSource(Facebook_MeService, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["loginScreen_restservice2_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("loginScreen");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["loginScreen_restservice2_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'loginScreen';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var loginScreen_onLoad = function() {
            loginScreen_elementsExtraJS();

            loginScreen_deviceEvents();
            loginScreen_windowEvents();
            loginScreen_elementsEvents();
        };

    // screen window events


    function loginScreen_windowEvents() {

        $('#loginScreen').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function loginScreen_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function loginScreen_elementsExtraJS() {
        // screen (loginScreen) extra code

    };

    // screen elements handler


    function loginScreen_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#loginScreen_loginMobileContainer [name="fbLoginButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Helper.init();

                }
            },
        }, '#loginScreen_loginMobileContainer [name="fbLoginButton"]');

    };

    $(document).off("pagebeforeshow", "#loginScreen").on("pagebeforeshow", "#loginScreen", function(event, ui) {
        Apperyio.CurrentScreen = "loginScreen";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    loginScreen_onLoad();
};

$(document).off("pagecreate", "#loginScreen").on("pagecreate", "#loginScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    loginScreen_js();
});