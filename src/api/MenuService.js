
const menuData =
    {
        data:[
            {id: '1',
                name: 'Dashboard ',
                alias_name:"item1",
                icon:'ion-md-speedometer',
                level:1,
                item_index:0,
                has_sub:'yes',
                parent_id:"#",
                children: [
                    {
                        id: '1.1',
                        name: 'Dashboard 1',
                        link: '/dashboard1',
                        level:2,
                        has_sub:'no',
                        item_index:1,
                        parent_id:"1",

                    },
                    {
                        id: '1.2',
                        name: 'Dashboard 2',
                        link: '/dashboard2',
                        level:2,
                        has_sub:'no',
                        item_index:2,
                        parent_id:"1",
                    },
                    {
                        id: '1.3',
                        name: 'Dashboard 3',
                        link: '/dashboard3',
                        level:2,
                        has_sub:'no',
                        item_index:4,
                        parent_id:"1",

                    },
                    {
                        id: '1.4',
                        name: 'Dashboard 4',
                        link: '/dashboard4',
                        level:2,
                        has_sub:'no',
                        item_index:5,
                        parent_id:"1",

                    },
                ]
            },
            {
                id: '2',
                name: 'UI Elements  ',
                icon:'ion-md-basket',
                level:1,
                has_sub:'yes',
                item_index:6,
                alias_name:"item2",
                parent_id:"#",
                children: [
                    {
                        id: '2.1',
                        name: 'Typography ',
                        level:2,
                        has_sub:'no',
                        item_index:7,
                        parent_id:"2",

                    },
                    {
                        id: '2.2',
                        name: 'Buttons',
                        level:2,
                        has_sub:'no',
                        item_index:8,
                        parent_id:"2",

                    },
                    {
                        id: '2.3',
                        name: 'Font Awesome Icons',
                        level:2,
                        has_sub:'no',
                        item_index:9,
                        parent_id:"2",

                    },
                    {
                        id: '2.4',
                        name: 'Material Design Icons',
                        level:2,
                        has_sub:'no',
                        item_index:10,
                        parent_id:"2",

                    },
                ]
            },
            {
                id: '3',
                name: 'Components ',
                icon:'ion-ios-apps',
                level:1,
                has_sub:'yes',
                item_index:11,
                alias_name:"item3",
                parent_id:"#",
                children: [
                    {
                        id: '3.1',
                        name: 'Table',
                        link:'/table',
                        level:2,
                        has_sub:'no',
                        item_index:12,
                        parent_id:"3",

                    },
                    {
                        id: '3.2',
                        name: 'Charts',
                        link:'/chartdemo',
                        level:2,
                        has_sub:'no',
                        item_index:13,
                        parent_id:"3",

                    },
                    {
                        id: '3.3',
                        name: 'Widgets',
                        level:2,
                        has_sub:'no',
                        item_index:14,
                        parent_id:"3",

                    },
                    {
                        id: '3.4',
                        name: 'Portlets',
                        link: '/portlets',
                        level:2,
                        has_sub:'no',
                        item_index:15,
                        parent_id:"3",

                    },
                    {
                        id: '3.5',
                        name: 'Portlets1',
                        level:2,
                        has_sub:'no',
                        item_index:16,
                        parent_id:"3",

                    },
                    {
                        id: '3.6',
                        name: 'Portlets2',
                        level:2,
                        has_sub:'no',
                        item_index:17,
                        parent_id:"3",

                    },
                    {
                        id: '3.7',
                        name: 'Portlets3',
                        level:2,
                        has_sub:'no',
                        item_index:18,
                        parent_id:"3",

                    },

                    {
                        id: '3.8',
                        name: 'Portlets4',
                        level:2,
                        has_sub:'no',
                        item_index:19,
                        parent_id:"3",

                    },

                    {
                        id: '3.9',
                        name: 'Portlets5',
                        level:2,
                        has_sub:'no',
                        item_index:20,
                        parent_id:"3",

                    },

                    {
                        id: '3.10',
                        name: 'Portlets6',
                        level:2,
                        has_sub:'no',
                        item_index:21,
                        parent_id:"3",

                    },
                    {
                        id: '3.11',
                        name: 'Portlets7',
                        level:2,
                        has_sub:'no',
                        item_index:22,
                        parent_id:"3",

                    },
                    {
                        id: '3.12',
                        name: 'Portlets8',
                        level:2,
                        has_sub:'no',
                        item_index:23,
                        parent_id:"3",

                    },
                    {
                        id: '3.13',
                        name: 'Portlets9',
                        level:2,
                        has_sub:'no',
                        item_index:24,
                        parent_id:"3",

                    },
                    {
                        id: '3.14',
                        name: 'Portlets8',
                        level:2,
                        has_sub:'no',
                        item_index:25,
                        parent_id:"3",

                    },
                    {
                        id: '3.15',
                        name: 'Portlets8',
                        level:2,
                        has_sub:'no',
                        item_index:26,
                        parent_id:"3",

                    },
                ]
            },
            {
                id: '4',
                name: 'Multi Level',
                icon: 'ion-ios-apps',
                level:1,
                has_sub:'yes',
                item_index:27,
                alias_name:"item4",
                parent_id:"#",
                children: [


                    {
                        id: '4.1',
                        name: 'Level 1.1',
                        level:2,
                        has_sub:'no',
                        item_index:28,
                        parent_id:"4",

                    },
                    {
                        id: '4.2',
                        name: 'Level 1.2',
                        level:2,
                        has_sub:'no',
                        item_index:29,
                        parent_id:"4",



                    },

                    {
                        id: '4.3',
                        name: 'Level 1.3',
                        level:2,
                        has_sub:'yes',
                        item_index:30,
                        alias_name:"item5",
                        parent_id:"4",
                        children: [
                            {
                                id: '4.3.1',
                                name: 'Level 1.3.1',
                                level:3,
                                has_sub:'no',
                                item_index:31,
                                parent_id:"4.3",
                            },
                            {
                                id: '4.3.2',
                                name: 'Level 1.3.2',
                                level:3,
                                has_sub:'no',
                                item_index:32,
                                parent_id:"4.3"
                            },

                            {
                                id: '4.3.3',
                                name: 'Level 1.3.3',
                                level:3,
                                has_sub:'yes',
                                item_index:33,
                                alias_name:"item6",
                                parent_id:"4.3",

                                children: [
                                    {
                                        id: '4.3.3.1',
                                        name: 'Level 1.3.3.1',
                                        level:4,
                                        has_sub:'yes',
                                        item_index:34,
                                        parent_id:"4.3.3",
                                        children: [
                                            { id: '4.3.3.1.1',
                                                name: 'Level 1.3.3.1.1',
                                                level:5,
                                                has_sub:'no',
                                                item_index:35,
                                                parent_id:"4.3.3.1",
                                            },
                                            {
                                                id: '4.3.3.1.2',
                                                name: 'Level 1.3.3.1.2',
                                                level:5,
                                                has_sub:'no',
                                                item_index:36,
                                                parent_id:"4.3.3.1",
                                            }
                                        ]
                                    },
                                    {
                                        id: '4.3.3.2',
                                        name: 'Level 1.3.3.2',
                                        level:4,
                                        has_sub:'no',
                                        item_index:37,
                                        parent_id:"4.3.3",

                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            { id: '5', name: 'About',icon:'ion-ios-apps',link:'/about',level:1,has_sub:'no',item_index:38,parent_id:"#" },
            {
                id: '6',
                name: 'React Hooks',
                icon:'ion-ios-apps',
                level:1,
                has_sub:'yes',
                item_index:39,
                alias_name:"item7",
                parent_id:"#",
                children: [
                    { id: '6.1', name: 'useHover',link:'/usehover',level:2,has_sub:'no',item_index:40,parent_id:"6" },
                    { id: '6.2', name: 'axios-hooks' ,link:'/useaxios',level:2,has_sub:'no',item_index:41,parent_id:"6"},
                    { id: '6.3', name: 'useModal',link:'/usemodal',level:2,has_sub:'no',item_index:42,parent_id:"6" },
                    { id: '6.4', name: 'Six - four',level:2,has_sub:'no', item_index:43,parent_id:"6"},
                ]
            },
            { id: '7', name: 'Help',icon:'ion-ios-apps',link:'/help',level:1,has_sub:'no' ,item_index:44,parent_id:"#"},
            {
                id: '8',
                name: 'Tables',
                icon:'ion-ios-apps',
                level:1,
                has_sub:'yes',
                item_index:45,
                alias_name:"item7",
                parent_id:"#",
                children: [
                    { id: '8.1', name: 'ka-table',link:'/katable',level:2,has_sub:'no',item_index:46,parent_id:"8" },
                    { id: '8.2', name: 'React Data Table' ,link:'/datatable',level:2,has_sub:'no',item_index:47,parent_id:"8"},
                    { id: '8.3', name: 'React Table',link:'/reacttabledemo',level:2,has_sub:'no',item_index:48,parent_id:"8" },
                    { id: '8.4', name: 'Table Column Resize',link:'/table2',level:2,has_sub:'no', item_index:49,parent_id:"8"},
                ]
            },

            { id: '9', name: 'Support',icon:'ion-ios-apps',link:'/about',level:1,has_sub:'no',item_index:50,parent_id:"#" },

            {
                id: '10',
                name: 'Examples',
                icon:'ion-ios-apps',
                level:1,
                has_sub:'yes',
                item_index:51,
                alias_name:"item39",
                parent_id:"#",
                children: [
                    { id: '10.1', name: 'React hooks axios',link:'/hooks-axios',level:2,has_sub:'no',item_index:52,parent_id:"10" },
                    { id: '10.2', name: 'Hooks todo' ,link:'/todo',level:2,has_sub:'no',item_index:53,parent_id:"10"},
                    { id: '10.3', name: 'React Query ',link:'/reactquerydemo',level:2,has_sub:'no',item_index:54,parent_id:"10" },
                    { id: '10.4', name: 'Person list',link:'/listdemo',level:2,has_sub:'no', item_index:55,parent_id:"10"},
                    { id: '10.5', name: 'list ',link:'/listdemo1',level:2,has_sub:'no',item_index:56,parent_id:"10" },
                    { id: '10.6', name: 'treeview ',link:'/treeview',level:2,has_sub:'no',item_index:57,parent_id:"10" },

                ]
            },



        ]
    };


//export const loadMenu = () => Promise.resolve(menuData)
export default menuData