const Router = require("express").Router;
const ReportcallService = require("../../services/Reportcall.service")();
const Reportcalls = require("../../models/Reportcall");

const router = Router({
    mergeParams: true,
  });

  router.get("/DisplayReportcalls", async(req, res) => {
    try {
      const Reportcalls = await ReportcallService.DisplayReportcalls();
      res.send(Reportcalls);
    } catch(err) {
      res.json({ success: false, msg: "Failed to display the report call"});
    }
  });

router.post("/addReportcall", async(req, res, next) => {
    try {
        console.log(req.body);
        const {title, details, reportImage, type} = req.body;
        await ReportcallService.addReportcall(title, details, reportImage, type);
        res.send({ success: true, msg: "Report call Added"});
    } catch (err) {
        res.send({ success: false, msg: "Report call not Added!", err})
    }
});

router.delete("/deleteReportcall/:title", async(req, res) => {
    try {
      const title = req.params.title;
      ReportcallService.deleteReportcall(title);
      res.send({ success: true, msg: "Report call is deleted"})
    } catch (error) {
      res.send({ success: false, msg: "Report call is not deleted!"})
    }
  });

  module.exports = router;