import './App.css'
import '@mantine/core/styles.css'
import {MantineProvider, ColorSchemeScript } from "@mantine/core";
import 'mantine-datatable/styles.layer.css';
import './layout.css';
import {SearchingAndFilteringExample} from "./SearchingAndFilteringExample.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
      <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
      <MantineProvider>
        <SearchingAndFilteringExample />
      </MantineProvider>
      </body>
      </html>
       )
}

export default App
