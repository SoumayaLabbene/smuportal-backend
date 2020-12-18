const Reportcall = require("../models/Reportcall")

function ReportcallService() {
    async function DisplayReportcalls() {
      return Reportcall.find({})
    }
  
    async function addReportcall(title, details, reportImage, type) {
      return Reportcall.create({Title: title, Details: details,  Image: reportImage, Type: type})
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