const style = { float: "right", width: "20em", textAlign: "right" };
export default function AppInfo() {
  return (
    <div style={style}>
      This app is open source under{" "}
      <a
        href="https://github.com/gorankami/tabber/blob/main/LICENSE"
        target="_blank" rel="noreferrer"
      >
        MIT license
      </a>
      , and is hosted at{" "}
      <a href="https://github.com/gorankami/tabber" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  );
}
