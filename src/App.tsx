import { useEffect, useState } from "react";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/scroll/Scroll";
import "./i18n";
import ReactPlayer from "react-player";
import { Toaster } from "sonner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading data
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay for loading data
  }, []);

  return (
    <div>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <ReactPlayer
            url={`/loading.mp4`}
            muted={true}
            loop={true}
            width="400px"
            height="400px"
            playing={true}
            controls={false}
            playsinline={true}
            config={{
              file: {
                attributes: {
                  disablePictureInPicture: true,
                },
              },
            }}
          />
        </div>
      ) : (
        <>
          <Layout />
          <Toaster richColors position="top-center" />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;
