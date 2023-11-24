import Nav from "./Component/Nav";
import { SVGProps, useState } from "react";
function isYouTubeLink(link: string) {
  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  return youtubeRegex.test(link);
}
// import "video-react/dist/video-react.css";
import ReactPlayer from "react-player";
function App() {
  const [url, SetUrl] = useState("");
  const [error, SetError] = useState("");
  // show error
  const ShowError = (e: string) => {
    SetError(e);
    setTimeout(() => {
      SetError("");
    }, 3000);
  };
  const handlePaste = async () => {
    const pastedText = await navigator.clipboard.readText();
    if (!isYouTubeLink(pastedText)) {
      return ShowError("Not Valid Youtube Link !");
    }
    SetUrl(pastedText);
  };
  return (
    <div data-tauri-drag-region>
      <Nav />
      <div className="input">
        <button
          className="reset"
          onClick={() => {
            SetUrl("");
          }}
          title="Reset"
        >
          <MaterialSymbolsLightResetTv />
        </button>
      </div>

      {url && isYouTubeLink(url) ? (
        <ReactPlayer
          controls={true}
          style={{
            position: "relative",
            background: "transparent",
          }}
          width={397}
          height={224}
          url={url}
        />
      ) : (
        <div onClick={handlePaste} className="past">
          <span>
            <FluentClipboardPaste20Filled />
          </span>
          <h1>
            Copy a Youtube Video Link <br /> And Click Here
          </h1>
          <p className="error">
            {error && (
              <>
                <TaskError />
                {error}
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

export function MaterialSymbolsLightResetTv(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9 20v-2H4.615q-.666 0-1.14-.475Q3 17.051 3 16.385V5.615q0-.666.475-1.14Q3.949 4 4.615 4h14.77q.666 0 1.14.475q.475.474.475 1.14V10.5h-9.392l2.35-2.35l-.708-.708L9.692 11l3.558 3.558l.708-.708l-2.35-2.35H21v4.885q0 .666-.475 1.14q-.474.475-1.14.475H15v2H9Z"
      ></path>
    </svg>
  );
}

export function FluentClipboardPaste20Filled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4.5 4h1.585A1.5 1.5 0 0 0 7.5 5h3a1.5 1.5 0 0 0 1.415-1H13.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 1 0v-1A1.5 1.5 0 0 0 13.5 3h-1.585A1.5 1.5 0 0 0 10.5 2h-3a1.5 1.5 0 0 0-1.415 1H4.5A1.5 1.5 0 0 0 3 4.5v12A1.5 1.5 0 0 0 4.5 18h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5Zm3 0a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3Zm3 3A1.5 1.5 0 0 0 9 8.5v8a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 15.5 7h-5Z"
      ></path>
    </svg>
  );
}

export function TaskError(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7 1h10v2h4v9h-2V5h-2v2H7V5H5v16h7v2H3V3h4V1Zm2 4h6V3H9v2Zm7.172 9.757L19 17.586l2.828-2.829l1.415 1.415L20.414 19l2.829 2.828l-1.415 1.415L19 20.414l-2.828 2.829l-1.415-1.415L17.586 19l-2.829-2.828l1.415-1.415Z"
      ></path>
    </svg>
  );
}
