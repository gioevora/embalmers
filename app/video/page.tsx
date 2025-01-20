export default function VideoPage() {
  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "100%", width: "100%" }}>
      <iframe
        allow="autoplay"
        src="https://drive.google.com/file/d/1k9JJuNZ4QoNWwu-nF-nnJsq_2N64IzpM/preview"
        title="Video preview from Google Drive"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />
    </div>
  );
}
