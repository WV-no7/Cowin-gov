require(["require", "exports", "knockout", "ojs/ojbootstrap", "ojs/ojarraydataprovider", "ojs/ojconverterutils-i18n", "ojs/ojtable", "ojs/ojknockout", "ojs/ojdatetimepicker", "ojs/ojselectcombobox", "ojs/ojlabel"], 
function (require, exports, ko, Bootstrap, ArrayDataProvider, ConverterUtilsI18n) {
    "use strict";
    
    function ViewModel() {
        var self = this;
        self.centerObservableArray = ko.observableArray();
       

        self.centerArray = [];
        
        self.dataprovider = new ArrayDataProvider(self.centerObservableArray, {
            keyAttributes: "name",
            implicitSort: [{ attribute: "min_age_limit", direction: "ascending" }],
        });

        var d = new Date();
        self.selectedDate = ko.observable(ConverterUtilsI18n.IntlConverterUtils.dateToLocalIso(new Date(d.getFullYear(),d.getMonth(),d.getDate()+1)));
        //console.log(self.selectedDate());

        self.callAPI = function(){
            self.month = ko.observable(self.selectedDate().split("T")[0].split("-")[1]);
            self.tomorrow = ko.observable(self.selectedDate().split("T")[0].split("-")[2]);
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                // Only run if the request is complete
                if (request.readyState === 4 && request.status === 200){
                    console.log(request.response);
                    if(JSON.parse(request.response).sessions){
                        self.centerObservableArray(JSON.parse(request.response).sessions);
                    }
                }
            }
            request.open('GET', "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=294&date="+self.tomorrow()+"-"+self.month()+"-2021", true);
            
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            request.send();
        };

        self.callAPI();

    }
    Bootstrap.whenDocumentReady().then(function () {
            ko.applyBindings(new ViewModel(), document.getElementById("sampleDemo"));
        
    });
});

