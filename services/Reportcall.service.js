const Reportcall = require("../models/Reportcall")

function ReportcallService() {
    async function DisplayReportcall() {
      return Reportcall.find({})
    }
  
    async function addReportcall(title, details, id) {
      return Reportcall.create({Title: title, Details: details, Id: id})
    }
  
    async function deleteReportcall(id) {
      return Reportcall.deleteOne({Id: id})
    }
  
    return {
      DisplayReportcall,
      addReportcall,
      deleteReportcall
    }
  }
  module.exports = ReportcallService;