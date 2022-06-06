import { CssBaseline } from "@mui/material";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { EditorAppbar } from "./component/Appbar";
import { NavigationDrawer } from "./component/NavigationDrawer";
import AltitudeEditor from "./screen/AltitudeEditor";
import ClockEditor from "./screen/ClockEditor";
import DistanceEditor from "./screen/DistanceEditor";
import GoogleMapsEditor from "./screen/GoogleMapsEditor";
import HeadingEditor from "./screen/HeadingEditor";
import { Home } from "./screen/Home";
import MapboxEditor from "./screen/MapboxEditor";
import NeighborhoodEditor from "./screen/NeighborhoodEditor";
import { SimpleTextEditScreen } from "./screen/SimpleTextEditorScreen";
import SpeedEditor from "./screen/SpeedEditor";
import WeatherEditor from "./screen/WeatherEditor";
import editorTheme from "./theme/editorTheme";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [pullKey, setPullKey] = useState({ value: "", valid: false });

  return (
    <div className="App">
      <ThemeProvider theme={editorTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Stack>
            <EditorAppbar setOpenDrawer={setOpenDrawer} />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/mapbox"
                element={
                  <MapboxEditor
                    pullKey={pullKey}
                    onPullKeyChange={setPullKey}
                  />
                }
              />
              <Route
                exact
                path="/googlemap"
                element={
                  <GoogleMapsEditor
                    pullKey={pullKey}
                    onPullKeyChange={setPullKey}
                  />
                }
              />
              <Route
                exact
                path="/neighborhood"
                element={
                  <NeighborhoodEditor
                    pullKey={pullKey}
                    onPullKeyChange={setPullKey}
                  />
                }
              />
              <Route
                exact
                path="/clock"
                element={
                  <ClockEditor pullKey={pullKey} onPullKeyChange={setPullKey} />
                }
              />
              <Route
                exact
                path="/weather"
                element={
                  <WeatherEditor
                    pullKey={pullKey}
                    onPullKeyChange={setPullKey}
                  />
                }
              />
              <Route
                exact
                path="/speed"
                element={
                  <SpeedEditor pullKey={pullKey} onPullKeyChange={setPullKey} />
                }
              />
              <Route
                exact
                path="/heading"
                element={
                  <HeadingEditor
                    pullKey={pullKey}
                    onPullKeyChange={setPullKey}
                  />
                }
              />
              <Route
                exact
                path="/altitude"
                element={
                  <AltitudeEditor
                    pullKey={pullKey}
                    onPullKeyChange={setPullKey}
                  />
                }
              />
              <Route
                exact
                path="/distance"
                element={
                  <DistanceEditor
                    pullKey={pullKey}
                    onPullKeyChange={setPullKey}
                  />
                }
              />
            </Routes>
          </Stack>
          <NavigationDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
