module.exports = {
  CreateAddressTransition: function(){
    var obj = {
      Key: "",
      PairValue:{
        AddressCity: "",
        AddressCompany: "",
        AddressCountry: "",
        AddressCustAccountKey: "",
        AddressCustKey: "",
        AddressState: "",
        AddressStreet: "",
        AddressStreet2: "",
        AddressType: "",
        AddressZip: ""
      }
    }
    return obj
  },

  CreatePhoneTransition: function(){
    var obj = {

    Key:"",
     PairValue:{
      PhoneCustAccountKey: "",
      PhoneCustKey: "",
      PhoneDoNotContact: false,
      PhonePhone: "",
      PhonePhoneExt: "",
      PhoneType: ""
    }
  }
    return obj
  },

}
