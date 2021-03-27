import About from  "./pages/About";
import Home  from "./pages/Home";
import Help  from "./pages/Help";
import Dashboard1 from  "./pages/Dashboard1";
import Dashboard2 from  "./pages/Dashboard2";
import Dashboard3 from  "./pages/Dashboard3";
import Dashboard4 from  "./pages/Dashboard4";
import UseHoverDemo from "./pages/UseHoverDemo";
import UseAxiosDemo from "./pages/UseAxiosDemo";
import KaTableDemo from "./pages/KaTableDemo";
import DataTableDemo from "./pages/DataTableDemo";
import UseModalDemo from "./pages/UseModalDemo";
import HooksAxiosDemo from "./pages/HooksAxiosDemo";
import TodoDemo       from "./pages/TodoDemo";
import TableDemo       from "./pages/TableDemo";
import ReactQueryDemo from "./pages/ReactQueryDemo";
import ListDemo from "./pages/ListDemo";
import ChartDemo from "./pages/ChartDemo";
import ReactTableDemo from "./pages/ReactTableDemo";
import TableDemoResize from "./pages/TableDemoResize";
import TreeviewDemo from "./pages/TreeviewDemo";
import PortLetsDemo from "./pages/PortLetsDemo";

const routes = [
    {
        path: "/about",
        component: About
    },
    {
        path: "/dashboard1",
        component: Dashboard1
    },
    {
        path: "/dashboard2",
        component: Dashboard2
    },
    {
        path: "/dashboard3",
        component: Dashboard3
    },
    {
        path: "/dashboard4",
        component: Dashboard4
    },
    {
        path: "/help",
        component: Help
    },

    {
        path: "/table",
        component: TableDemo
    },

    {
        path: "/portlets",
        component: PortLetsDemo
    },
    {
        path: "/chartdemo",
        component: ChartDemo
    },
    {
        path: "/usehover",
        component: UseHoverDemo
    },
    {
        path: "/useaxios",
        component: UseAxiosDemo
    },
    {
        path: "/usemodal",
        component: UseModalDemo
    },
    {
        path: "/todo",
        component: TodoDemo
    },
    {
        path: "/hooks-axios",
        component: HooksAxiosDemo
    },

    {
        path: "/reactquerydemo",
        component: ReactQueryDemo
    },

    {
        path: "/katable",
        component: KaTableDemo
    },
    {
        path: "/datatable",
        component: DataTableDemo
    },

    {
        path: "/reacttabledemo",
        component: ReactTableDemo
    },

    {
        path: "/table2",
        component: TableDemoResize
    },


    {
        path: "/listdemo",
        component: About
    },
    {
        path: "/treeview",
        component: TreeviewDemo
    },
];

export default routes