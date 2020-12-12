const Router = require("express").Router;
const ClaimcallService = require("../../services/Claimcall.service")();
const Claimcalls = require("../../models/Claimcall");

const router = Router({
    mergeParams: true,
  });

  router.get("/DisplayClaimcalls", async(req, res) => {
    try {
      const Claimcalls = await ClaimcallService.DisplayClaimcalls();
      res.send(Claimcalls);
    } catch(err) {
      res.json({ success: false, msg: "Failed to display the Claim call"});
    }
  });

router.post("/addClaimcall", async(req, res, next) => {
    try {
        console.log(req.body);
        const {title, details} = req.body;
        await ClaimcallService.addClaimcall(title, details);
        res.send({ success: true, msg: "Claim call Added"});
    } catch (err) {
        res.send({ success: false, msg: "Claim call not Added!", err})
    }
});

router.delete("/deleteClaimcall/:title", async(req, res) => {
    try {
      const title = req.params.title;
      ClaimcallService.deleteClaimcall(title);
      res.send({ success: true, msg: "Claim call is deleted"})
    } catch (error) {
      res.send({ success: false, msg: "Claim call is not added!"})
    }
  });

  module.exports = router;