const Reportcall = require("../models/Reportcall")

function ReportcallService() {
    async function DisplayReportcalls() {
      return Reportcall.find({})
    }
  
    async function addReportcall(title, details,type) {
      return Reportcall.create({Title: title, Details: details, Type: type})
    }
  
    async function deleteReportcall(title) {
      return Reportcall.deleteOne({Title: title})
    }
  
    return {
      DisplayReportcalls,
      addReportcall,
      deleteReportcall
    }
  }
  module.exports = ReportcallService;