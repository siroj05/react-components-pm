import { Github } from "lucide-react";
import "./App.css";
import { KanbanBoard } from "./components/KanbanBoard";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import GanttChart from "./components/gant-chart";
import Table from "./components/treeview/table-tree-view";
import EmailInput from "./components/email-tags";
import GanttSideBar from "./components/gantt/sidebar";
import TableWithFixedColumn from "./components/tabel-example/tabel";

function App() {
  const timelineStartDate = '2024-10-10';
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {/* <GanttChart/> */}
        <div className="min-h-screen flex flex-col">
          <main className="mx-4 my-10 flex flex-col gap-6">
            {/* <KanbanBoard /> */}
            {/* <TreeView nodes={node}/> */}
            {/* <Table/> */}
            {/* <EmailInput/> */}
            <GanttSideBar/>
            {/* <TableWithFixedColumn/> */}
          </main>
        </div>
         
      </ThemeProvider>
    </>
  );
}

export default App;
