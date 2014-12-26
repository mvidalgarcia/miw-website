$.i18n.init({
        //lng: 'en-US',
        ns: { namespaces: ['ns.common', 'ns.special'], defaultNs: 'ns.special'},
        useLocalStorage: false,
        detectLngQS: 'lang',
        debug: true
    }, function(t) {
    	
    	$('html').i18n();
    	$(".append-caret").append(" <span class=\"caret\"></span>")
    });