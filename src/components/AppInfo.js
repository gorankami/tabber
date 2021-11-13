import { a } from "../utils/a";

const style = { float: "right", width: "20em", textAlign: "right" };

const mitLicenceUrl = "https://github.com/gorankami/tabber/blob/main/LICENSE";
const githubUrl = "https://github.com/gorankami/tabber";

export default function AppInfo() {
  return (
    <div style={style}>
      This app is open source under {a(mitLicenceUrl, "MIT license")}, and is
      hosted at {a(githubUrl, "GitHub")}
    </div>
  );
}
