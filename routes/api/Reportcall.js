const Router = require("express").Router;
const ReportcallService = require("../../services/Reportcall.service")();
const Reportcall = require("../../models/Reportcall");

const router = Router({
    mergeParams: true,
  });

  router.get("/DisplayReportcall", async(req, res) => {
    try {
      const Reportcall = await ReportcallService.DisplayReportcall();
      res.send(Reportcall);
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
      res.send({ success: true, msg: "Report is deleted"})
    } catch (error) {
      res.send({ success: false, msg: "Report is not added!"})
    }
  });

  module.exports = router;