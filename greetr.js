(function (global, $) {
    
    "use strict";
    
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };
    
    var LegalLang = ["en", "hindi", "mar"];
    
    var greetings = {
        en : "Hello",
        hindi : "नमस्ते",
        mar : "नमस्कार"
    };
    
    var formalGreetings = {
        en : "Greetings",
        hindi : "प्रणाम",
        mar : "ग्रीटिंग्ज"
    };
    
    var logMsg = {
        en : "Logged in",
        hindi : "लॉग इन",
        mar : "लॉग इन"
    };
    
    Greetr.prototype = {
        fullname: function() {
            return this.firstName + " " + this.lastName;
        },
        
        validate: function() {
            if(LegalLang.indexOf(this.language) === -1) {
                throw "Language not supported";
            } 
        },
        
        greeting: function() {
            return greetings[this.language] + " " + this.fullname();  
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ", " + this.fullname();  
        },
        
        greet: function(formal) {
            var msg;
            
            if(formal) {
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }
            
            if(console) {
                console.log(msg);
            }
            
            return this;
        },
        
        log: function() {
            if(console) {
                console.log(logMsg[this.language] + ": " + this.fullname());
            }
            
            return this;
        },
        
        setLang: function(lang) {
            
            this.language = lang;
            
            this.validate();
            
            return this;
        },
        
        setGreet: function(selector, formal) {
            if(!$) {
                throw "jQuery not loaded"
            }
            
            if(!selector) {
                throw "Missing jQuery selector";
            }
            
            var msg;
            
            if(formal) {
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }
            
            $(selector).html(msg);
            
            return this;
            
        }
    };
        
    Greetr.init = function(firstName, lastName, language) {
        
        if(firstName === "" || firstName === undefined) {
            global.alert("Firstname is required");
            throw "Firstname is required";            
        }
        
        var self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";        
        self.validate();
    }
    
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr; 
    
    
}(window, jQuery));