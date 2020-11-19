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
        const {Title, Details, Id} = req.body;
        await ReportcallService.addReportcall(Title, Details, Id);
        res.send({ success: true, msg: "Report call Added"});
    } catch (err) {
        res.send({ success: false, msg: "Report call not Added!", err})
    }
});

router.delete("/deleteReportcall/:id", async(req, res) => {
    try {
      const id = req.params.id;
      ReportcallService.deleteReportcall(id);
      res.send({ success: true, msg: "Report call is deleted"})
    } catch (error) {
      res.send({ success: false, msg: "Report call is not added!"})
    }
  });

  module.exports = router;