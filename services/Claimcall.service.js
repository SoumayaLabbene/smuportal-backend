const Claimcall = require("../models/Claimcall")

function ClaimcallService() {
    async function DisplayClaimcalls() {
      return Claimcall.find({})
    }
  
    async function addClaimcall(title, details) {
      return Claimcall.create({Title: title, Details: details})
    }
  
    async function deleteClaimcall(title) {
      return Claimcall.deleteOne({Title: title})
    }
  
    return {
      DisplayClaimcalls,
      addClaimcall,
      deleteClaimcall
    }
  }
  module.exports = ClaimcallService;