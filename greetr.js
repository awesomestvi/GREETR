(function(global, $) {
    
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }
    
    Greetr.init(firstName, lastName, language) {
        firstName = firstName || "Default";
        
        {
            firstName: "Default",
            lastName: "Default",
            language: "Default"
        }
    }    
    
    
})(window, jQuery);