import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// URL: https://deflow-17608.web.app/api
app.get("/api", (_req: express.Request, res: express.Response) => {
  res.send("DeFlow -- documentation can be found at https://github.com/samuel-casey/deflow-backend");
});

exports.app = functions.https.onRequest(app);
