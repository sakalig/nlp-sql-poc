import './App.css'
import '@mantine/core/styles.css'
import {MantineProvider, ColorSchemeScript, Box } from "@mantine/core";
import 'mantine-datatable/styles.layer.css';
import './layout.css';
import {DataTable} from "mantine-datatable";

function App() {
  // const [count, setCount] = useState(0)

  return (
      <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
      <MantineProvider>
        <DataTable
            withTableBorder
            borderRadius="sm"
            withColumnBorders
            striped
            highlightOnHover
            // provide data
            records={[
              { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
              { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
              { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
              { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
              { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
              { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
              { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
              { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
              { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
              { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
            ]}
            // define columns
            columns={[
              {
                accessor: 'id',
                // this column has a custom title
                title: '#',
                // right-align column
                textAlign: 'right',
              },
              { accessor: 'name' },
              {
                accessor: 'party',
                // this column has custom cell data rendering
                render: ({ party }) => (
                    <Box fw={700} c={party === 'Democratic' ? 'blue' : 'red'}>
                      {party.slice(0, 3).toUpperCase()}
                    </Box>
                ),
              },
              { accessor: 'bornIn' },
            ]}
            // execute this callback when a row is clicked

        />
      </MantineProvider>
      </body>
      </html>
       )
}

export default App
