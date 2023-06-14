type FileCardMenuItem = {
  title: string;
  click: any;
  children?: never;
} | {
  title: string;
  click?: never;
  children: FileCardMenuItem[];
};

export const fileCardContextMenuConfig: Array<FileCardMenuItem> = [
  {title: "1st item", click: ()=>console.log("1 clicked")},
  {title: "2nd item", click: ()=>console.log("2 clicked")},
  {title: "3rd item", click: ()=>console.log("3 clicked")},
  {title: "Sub menu", children: [
      {title: "4th item", click: ()=>console.log("4 clicked")},
    ]}
]
