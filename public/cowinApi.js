require(["require", "exports", "knockout", "ojs/ojbootstrap", "ojs/ojarraydataprovider", "ojs/ojconverterutils-i18n", "ojs/ojtable", "ojs/ojknockout", "ojs/ojdatetimepicker", "ojs/ojselectcombobox", "ojs/ojselectsingle", "ojs/ojlabel",  "ojs/ojbutton",  "ojs/ojinputnumber"], 
function (require, exports, ko, Bootstrap, ArrayDataProvider, ConverterUtilsI18n) {
    "use strict";
    
    function ViewModel() {
        var self = this;
        self.centerObservableArray = ko.observableArray();
        self.pincode = ko.observable();
        self.rawPincode = ko.observable();
        self.pincodeError = ko.observable();
        self.isPincodeValid = ko.observable("true");
        self.searchBy = ko.observable("byDistrict");

        self.stateArray = [
            {
                "state_id": 1,
                "state_name": "Andaman and Nicobar Islands"
            },
            {
                "state_id": 2,
                "state_name": "Andhra Pradesh"
            },
            {
                "state_id": 3,
                "state_name": "Arunachal Pradesh"
            },
            {
                "state_id": 4,
                "state_name": "Assam"
            },
            {
                "state_id": 5,
                "state_name": "Bihar"
            },
            {
                "state_id": 6,
                "state_name": "Chandigarh"
            },
            {
                "state_id": 7,
                "state_name": "Chhattisgarh"
            },
            {
                "state_id": 8,
                "state_name": "Dadra and Nagar Haveli"
            },
            {
                "state_id": 37,
                "state_name": "Daman and Diu"
            },
            {
                "state_id": 9,
                "state_name": "Delhi"
            },
            {
                "state_id": 10,
                "state_name": "Goa"
            },
            {
                "state_id": 11,
                "state_name": "Gujarat"
            },
            {
                "state_id": 12,
                "state_name": "Haryana"
            },
            {
                "state_id": 13,
                "state_name": "Himachal Pradesh"
            },
            {
                "state_id": 14,
                "state_name": "Jammu and Kashmir"
            },
            {
                "state_id": 15,
                "state_name": "Jharkhand"
            },
            {
                "state_id": 16,
                "state_name": "Karnataka"
            },
            {
                "state_id": 17,
                "state_name": "Kerala"
            },
            {
                "state_id": 18,
                "state_name": "Ladakh"
            },
            {
                "state_id": 19,
                "state_name": "Lakshadweep"
            },
            {
                "state_id": 20,
                "state_name": "Madhya Pradesh"
            },
            {
                "state_id": 21,
                "state_name": "Maharashtra"
            },
            {
                "state_id": 22,
                "state_name": "Manipur"
            },
            {
                "state_id": 23,
                "state_name": "Meghalaya"
            },
            {
                "state_id": 24,
                "state_name": "Mizoram"
            },
            {
                "state_id": 25,
                "state_name": "Nagaland"
            },
            {
                "state_id": 26,
                "state_name": "Odisha"
            },
            {
                "state_id": 27,
                "state_name": "Puducherry"
            },
            {
                "state_id": 28,
                "state_name": "Punjab"
            },
            {
                "state_id": 29,
                "state_name": "Rajasthan"
            },
            {
                "state_id": 30,
                "state_name": "Sikkim"
            },
            {
                "state_id": 31,
                "state_name": "Tamil Nadu"
            },
            {
                "state_id": 32,
                "state_name": "Telangana"
            },
            {
                "state_id": 33,
                "state_name": "Tripura"
            },
            {
                "state_id": 34,
                "state_name": "Uttar Pradesh"
            },
            {
                "state_id": 35,
                "state_name": "Uttarakhand"
            },
            {
                "state_id": 36,
                "state_name": "West Bengal"
            }
        ];

        self.districtArray = [
            {
                "district_id": 270,
                "label": "Bagalkot"
            },
            {
                "district_id": 276,
                "label": "Bangalore Rural"
            },
            {
                "district_id": 265,
                "label": "Bangalore Urban"
            },
            {
                "district_id": 294,
                "label": "BBMP"
            },
            {
                "district_id": 264,
                "label": "Belgaum"
            },
            {
                "district_id": 274,
                "label": "Bellary"
            },
            {
                "district_id": 272,
                "label": "Bidar"
            },
            {
                "district_id": 271,
                "label": "Chamarajanagar"
            },
            {
                "district_id": 273,
                "label": "Chikamagalur"
            },
            {
                "district_id": 291,
                "label": "Chikkaballapur"
            },
            {
                "district_id": 268,
                "label": "Chitradurga"
            },
            {
                "district_id": 269,
                "label": "Dakshina Kannada"
            },
            {
                "district_id": 275,
                "label": "Davanagere"
            },
            {
                "district_id": 278,
                "label": "Dharwad"
            },
            {
                "district_id": 280,
                "label": "Gadag"
            },
            {
                "district_id": 267,
                "label": "Gulbarga"
            },
            {
                "district_id": 289,
                "label": "Hassan"
            },
            {
                "district_id": 279,
                "label": "Haveri"
            },
            {
                "district_id": 283,
                "label": "Kodagu"
            },
            {
                "district_id": 277,
                "label": "Kolar"
            },
            {
                "district_id": 282,
                "label": "Koppal"
            },
            {
                "district_id": 290,
                "label": "Mandya"
            },
            {
                "district_id": 266,
                "label": "Mysore"
            },
            {
                "district_id": 284,
                "label": "Raichur"
            },
            {
                "district_id": 292,
                "label": "Ramanagara"
            },
            {
                "district_id": 287,
                "label": "Shimoga"
            },
            {
                "district_id": 288,
                "label": "Tumkur"
            },
            {
                "district_id": 286,
                "label": "Udupi"
            },
            {
                "district_id": 281,
                "label": "Uttar Kannada"
            },
            {
                "district_id": 293,
                "label": "Vijayapura"
            },
            {
                "district_id": 285,
                "label": "Yadgir"
            }
        ];

        self.selectedDistrict = ko.observable(294);

        self.districtArrayData = new ArrayDataProvider(self.districtArray, {
            keyAttributes: "district_id", 
        });

        self.dataprovider = new ArrayDataProvider(self.centerObservableArray, {
            keyAttributes: "name",
            implicitSort: [{ attribute: "min_age_limit", direction: "ascending" }],
        });

        var d = new Date();
        self.selectedDate = ko.observable(ConverterUtilsI18n.IntlConverterUtils.dateToLocalIso(new Date(d.getFullYear(),d.getMonth(),d.getDate()+1)));
        //console.log(self.selectedDate());

        self.verifyPincode = function(){
            if(isNaN(self.rawPincode()) || self.rawPincode() < 110001 || self.rawPincode() >999999 ){
                if(self.rawPincode() === "") self.pincodeError("Please enter pincode.");
                else    self.pincodeError("Invalid Pincode.");
                self.isPincodeValid("true");
            }else{
                self.pincodeError("");
                self.isPincodeValid("");
            }
        }

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
            if(self.searchBy() === "byDistrict")        request.open('GET', "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id="+self.selectedDistrict()+"&date="+self.tomorrow()+"-"+self.month()+"-2021", true);
            else if(self.searchBy() === "byPincode")    request.open('GET', "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode="+self.pincode()+"&date="+self.tomorrow()+"-"+self.month()+"-2021", true);
            
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            request.send();
        };

        self.callAPI();

    }
    Bootstrap.whenDocumentReady().then(function () {
            ko.applyBindings(new ViewModel(), document.getElementById("sampleDemo"));
        
    });
});

