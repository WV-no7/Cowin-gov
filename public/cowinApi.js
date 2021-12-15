require(["require", "exports", "knockout", "ojs/ojbootstrap", "ojs/ojarraydataprovider", "ojs/ojconverterutils-i18n", "ojs/ojtable", "ojs/ojgauge", "ojs/ojknockout", "ojs/ojdatetimepicker", "ojs/ojselectcombobox", "ojs/ojselectsingle", "ojs/ojlabel",  "ojs/ojbutton",  "ojs/ojinputnumber"], 
function (require, exports, ko, Bootstrap, ArrayDataProvider, ConverterUtilsI18n) {
    "use strict";
    
    function ViewModel() {
        var self = this;
        self.centerObservableArray = ko.observableArray();
        self.pincode = ko.observable();
        self.rawPincode = ko.observable();
        self.pincodeError = ko.observable();
        self.isPincodeValid = ko.observable("true");
        self.isDistrictValid = ko.observable("true");
        self.searchBy = ko.observable("byDistrict");
        self.districtObservableArray = ko.observableArray();
        self.stateObservableArray = ko.observableArray([
            {
                "state_id": 1,
                "label": "Andaman and Nicobar Islands"
            },
            {
                "state_id": 2,
                "label": "Andhra Pradesh"
            },
            {
                "state_id": 3,
                "label": "Arunachal Pradesh"
            },
            {
                "state_id": 4,
                "label": "Assam"
            },
            {
                "state_id": 5,
                "label": "Bihar"
            },
            {
                "state_id": 6,
                "label": "Chandigarh"
            },
            {
                "state_id": 7,
                "label": "Chhattisgarh"
            },
            {
                "state_id": 8,
                "label": "Dadra and Nagar Haveli"
            },
            {
                "state_id": 37,
                "label": "Daman and Diu"
            },
            {
                "state_id": 9,
                "label": "Delhi"
            },
            {
                "state_id": 10,
                "label": "Goa"
            },
            {
                "state_id": 11,
                "label": "Gujarat"
            },
            {
                "state_id": 12,
                "label": "Haryana"
            },
            {
                "state_id": 13,
                "label": "Himachal Pradesh"
            },
            {
                "state_id": 14,
                "label": "Jammu and Kashmir"
            },
            {
                "state_id": 15,
                "label": "Jharkhand"
            },
            {
                "state_id": 16,
                "label": "Karnataka",
                "district":[
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
                    }]
            },
            {
                "state_id": 17,
                "label": "Kerala"
            },
            {
                "state_id": 18,
                "label": "Ladakh"
            },
            {
                "state_id": 19,
                "label": "Lakshadweep"
            },
            {
                "state_id": 20,
                "label": "Madhya Pradesh"
            },
            {
                "state_id": 21,
                "label": "Maharashtra"
            },
            {
                "state_id": 22,
                "label": "Manipur"
            },
            {
                "state_id": 23,
                "label": "Meghalaya"
            },
            {
                "state_id": 24,
                "label": "Mizoram"
            },
            {
                "state_id": 25,
                "label": "Nagaland"
            },
            {
                "state_id": 26,
                "label": "Odisha"
            },
            {
                "state_id": 27,
                "label": "Puducherry"
            },
            {
                "state_id": 28,
                "label": "Punjab"
            },
            {
                "state_id": 29,
                "label": "Rajasthan"
            },
            {
                "state_id": 30,
                "label": "Sikkim"
            },
            {
                "state_id": 31,
                "label": "Tamil Nadu"
            },
            {
                "state_id": 32,
                "label": "Telangana"
            },
            {
                "state_id": 33,
                "label": "Tripura"
            },
            {
                "state_id": 34,
                "label": "Uttar Pradesh"
            },
            {
                "state_id": 35,
                "label": "Uttarakhand"
            },
            {
                "state_id": 36,
                "label": "West Bengal"
            }
        ]);

        self.selectedDistrict = ko.observable();
        self.selectedState = ko.observable();

        self.stateArrayData = new ArrayDataProvider(self.stateObservableArray(), {
            keyAttributes: "state_id", 
        });
        
        self.setDistrict = function(){
            self.centerObservableArray([]);
            var indexOfState = self.stateObservableArray().findIndex((element => parseInt(element.state_id) === self.selectedState()));
            if(indexOfState !== -1){
                if(!self.stateObservableArray()[indexOfState].district)     self.fetchdistrict(indexOfState);    
                else                                                        self.districtObservableArray(self.stateObservableArray()[indexOfState].district);
            }            
        };

        self.districtArrayData = new ArrayDataProvider(self.districtObservableArray, {
            keyAttributes: "district_id",
        });
        
        self.dataprovider = new ArrayDataProvider(self.centerObservableArray, {
            keyAttributes: "name",
            implicitSort: [{ attribute: "min_age_limit", direction: "ascending" }],
        });

        var d = new Date();
        self.selectedDate = ko.observable(ConverterUtilsI18n.IntlConverterUtils.dateToLocalIso(new Date(d.getFullYear(),d.getMonth(),d.getDate()+1)));
        self.selectedDate(self.selectedDate().split("T")[0]);

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

        self.fetchdistrict = function(indexOfState){
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                // Only run if the request is complete
                if (request.readyState === 4 && request.status === 200){
                    if(JSON.parse(request.response).districts){
                        var getDistrict = JSON.parse(request.response);
                        self.stateObservableArray()[indexOfState].district = [];
                        getDistrict.districts.forEach(element => {
                            self.stateObservableArray()[indexOfState].district.push({
                                "district_id": element.district_id,
                                "label": element.district_name
                            });
                        });
                        self.districtObservableArray(self.stateObservableArray()[indexOfState].district);
                    }else{
                        console.error("Error fetching Districts! try again!");
                    }
                }
            }
            request.open('GET', "https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+self.selectedState()+"?Accept-Language=en_US", true);
            request.send();
        };

        self.callAPI = function(){
            self.month = ko.observable(self.selectedDate().split("T")[0].split("-")[1]);
            self.tomorrow = ko.observable(self.selectedDate().split("T")[0].split("-")[2]);
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                // Only run if the request is complete
                if (request.readyState === 4 && request.status === 200){
                    if(JSON.parse(request.response).sessions){
                        self.centerObservableArray(JSON.parse(request.response).sessions);
                    }
                }
            }
            if(self.searchBy() === "byDistrict" && self.selectedDistrict() ){
               request.open('GET', "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id="+self.selectedDistrict()+"&date="+self.tomorrow()+"-"+self.month()+"-2021", true);
               request.send();
            }
            else if(self.searchBy() === "byPincode"){
                request.open('GET', "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode="+self.pincode()+"&date="+self.tomorrow()+"-"+self.month()+"-2021", true);
                request.send();
            }

        };

    }
    Bootstrap.whenDocumentReady().then(function () {
            ko.applyBindings(new ViewModel(), document.getElementById("sampleDemo"));
        
    });
});

