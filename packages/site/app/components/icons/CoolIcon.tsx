import { twJoin } from "tailwind-merge";

export type CoolIconsGlyph =
  | "Add_Column"
  | "Add_Minus_Square"
  | "Add_Plus_Circle"
  | "Add_Plus_Square"
  | "Add_Plus"
  | "Add_Row"
  | "Add_To_Queue"
  | "Airplay"
  | "Alarm"
  | "Archive"
  | "Arrow_Circle_Down_Left"
  | "Arrow_Circle_Down_Right"
  | "Arrow_Circle_Down"
  | "Arrow_Circle_Left"
  | "Arrow_Circle_Right"
  | "Arrow_Circle_Up_Left"
  | "Arrow_Circle_Up_Right"
  | "Arrow_Circle_Up"
  | "Arrow_Down_Left_LG"
  | "Arrow_Down_Left_MD"
  | "Arrow_Down_Left_SM"
  | "Arrow_Down_LG"
  | "Arrow_Down_MD"
  | "Arrow_Down_Right_LG"
  | "Arrow_Down_Right_MD"
  | "Arrow_Down_Right_SM"
  | "Arrow_Down_SM"
  | "Arrow_Down_Up"
  | "Arrow_Left_LG"
  | "Arrow_Left_MD"
  | "Arrow_Left_Right"
  | "Arrow_Left_SM"
  | "Arrow_Reload_02"
  | "Arrow_Right_LG"
  | "Arrow_Right_MD"
  | "Arrow_Right_SM"
  | "Arrow_Sub_Down_Left"
  | "Arrow_Sub_Down_Right"
  | "Arrow_Sub_Left_Down"
  | "Arrow_Sub_Left_Up"
  | "Arrow_Sub_Right_Down"
  | "Arrow_Sub_Right_Up"
  | "Arrow_Sub_Up_Left"
  | "Arrow_Sub_Up_Right"
  | "Arrow_Undo_Down_Left"
  | "Arrow_Undo_Down_Right"
  | "Arrow_Undo_Up_Left"
  | "Arrow_Undo_Up_Right"
  | "Arrow_Up_Left_LG"
  | "Arrow_Up_Left_MD"
  | "Arrow_Up_Left_SM"
  | "Arrow_Up_LG"
  | "Arrow_Up_MD"
  | "Arrow_Up_Right_LG"
  | "Arrow_Up_Right_MD"
  | "Arrow_Up_Right_SM"
  | "Arrow_Up_SM"
  | "Arrows_Reload_01"
  | "Bar_Bottom"
  | "Bar_Left"
  | "Bar_Right"
  | "Bar_Top"
  | "Bell_Add"
  | "Bell_Close"
  | "Bell_Notification"
  | "Bell_Off"
  | "Bell_Remove"
  | "Bell_Ring"
  | "Bell"
  | "Bold"
  | "Book_Open"
  | "Book"
  | "Bookmark"
  | "Building_01"
  | "Building_02"
  | "Building_03"
  | "Building_04"
  | "Bulb"
  | "Calendar_Add"
  | "Calendar_Check"
  | "Calendar_Close"
  | "Calendar_Days"
  | "Calendar_Event"
  | "Calendar_Remove"
  | "Calendar_Week"
  | "Calendar"
  | "Camera"
  | "Car_Auto"
  | "Caret_Circle_Down"
  | "Caret_Circle_Left"
  | "Caret_Circle_Right"
  | "Caret_Circle_Up"
  | "Caret_Down_MD"
  | "Caret_Down_SM"
  | "Caret_Left_SM"
  | "Caret_Right_SM"
  | "Caret_Up_MD"
  | "Caret_Up_SM"
  | "Chart_Bar_Horizontal_01"
  | "Chart_Bar_Vertical_01"
  | "Chart_Line"
  | "Chart_Pie"
  | "Chat_Add"
  | "Chat_Check"
  | "Chat_Circle_Add"
  | "Chat_Circle_Check"
  | "Chat_Circle_Close"
  | "Chat_Circle_Dots"
  | "Chat_Circle_Remove"
  | "Chat_Circle"
  | "Chat_Close"
  | "Chat_Conversation_Circle"
  | "Chat_Conversation"
  | "Chat_Dots"
  | "Chat_Remove"
  | "Chat"
  | "Check_All_Big"
  | "Check_All"
  | "Check_Big"
  | "Check"
  | "Checkbox_Check"
  | "Checkbox_Fill"
  | "Checkbox_Unchecked"
  | "Chevron_Down_Duo"
  | "Chevron_Down"
  | "Chevron_Left_Duo"
  | "Chevron_Left_MD"
  | "Chevron_Left"
  | "Chevron_Right_Duo"
  | "Chevron_Right_MD"
  | "Chevron_Right"
  | "Chevron_Up_Duo"
  | "Chevron_Up"
  | "Chromecast"
  | "Circle_Check"
  | "Circle_Help"
  | "Circle_Warning"
  | "Circle"
  | "Clock"
  | "Close_Circle"
  | "Close_LG"
  | "Close_MD"
  | "Close_SM"
  | "Close_Square"
  | "Cloud_Add"
  | "Cloud_Check"
  | "Cloud_Close"
  | "Cloud_Download"
  | "Cloud_Off"
  | "Cloud_Remove"
  | "Cloud_Upload"
  | "Cloud"
  | "Code"
  | "Coffe_To_Go"
  | "Coffee"
  | "Columns"
  | "Combine_Cells"
  | "Command"
  | "Compass"
  | "Cookie"
  | "Copy"
  | "Credit_Card_01"
  | "Credit_Card_02"
  | "Crop"
  | "Cupcake"
  | "Cylinder"
  | "Data"
  | "Delete_Column"
  | "Delete_Row"
  | "Desktop_Tower"
  | "Desktop"
  | "Devices"
  | "Double_Quotes_L"
  | "Double_Quotes_R"
  | "Download_Package"
  | "Download"
  | "Drag_Horizontal"
  | "Drag_Vertical"
  | "Dummy_Circle_Small"
  | "Dummy_Circle"
  | "Dummy_Square_Small"
  | "Dummy_Square"
  | "Edit_Pencil_01"
  | "Edit_Pencil_02"
  | "Edit_Pencil_Line_01"
  | "Edit_Pencil_Line_02"
  | "Exit"
  | "Expand"
  | "External_Link"
  | "Figma"
  | "File_Add"
  | "File_Blank"
  | "File_Check"
  | "File_Close"
  | "File_Code"
  | "File_Document"
  | "File_Download"
  | "File_Edit"
  | "File_Remove"
  | "File_Search"
  | "File_Upload"
  | "Files"
  | "Filter_Off"
  | "Filter"
  | "First_Aid"
  | "Flag"
  | "Folder_Add"
  | "Folder_Check"
  | "Folder_Close"
  | "Folder_Code"
  | "Folder_Document"
  | "Folder_Download"
  | "Folder_Edit"
  | "Folder_Open"
  | "Folder_Remove"
  | "Folder_Search"
  | "Folder_Upload"
  | "Folder"
  | "Folders"
  | "Font"
  | "Forward"
  | "Gift"
  | "Globe"
  | "Hamburger_LG"
  | "Hamburger_MD"
  | "Handbag"
  | "Heading_H1"
  | "Heading_H2"
  | "Heading_H3"
  | "Heading_H4"
  | "Heading_H5"
  | "Heading_H6"
  | "Heading"
  | "Headphones"
  | "Heart_01"
  | "Heart_02"
  | "Help"
  | "Hide"
  | "House_01"
  | "House_02"
  | "House_03"
  | "House_Add"
  | "House_Check"
  | "House_Close"
  | "House_Remove"
  | "Image_01"
  | "Image_02"
  | "Info"
  | "Instance"
  | "Italic"
  | "Keyboard"
  | "Label"
  | "Laptop"
  | "Layer"
  | "Layers"
  | "Leaf"
  | "Line_L"
  | "Line_M"
  | "Line_S"
  | "Line_Xl"
  | "Link_Break"
  | "Link_Horizontal_Off"
  | "Link_Horizontal"
  | "Link_Vertical"
  | "Link"
  | "List_Add"
  | "List_Check"
  | "List_Checklist"
  | "List_Ordered"
  | "List_Remove"
  | "List_Unordered"
  | "Loading"
  | "Lock_Open"
  | "Lock"
  | "Log_Out"
  | "Magnifying_Glass_Minus"
  | "Magnifying_Glass_Plus"
  | "Mail_Open"
  | "Mail"
  | "Main_Component"
  | "Map_Pin"
  | "Map"
  | "Mention"
  | "Menu_Alt_01"
  | "Menu_Alt_02"
  | "Menu_Alt_03"
  | "Menu_Alt_04"
  | "Menu_Alt_05"
  | "Menu_Duo_LG"
  | "Menu_Duo_MD"
  | "Mobile_Button"
  | "Mobile"
  | "Monitor_Play"
  | "Monitor"
  | "Moon"
  | "More_Grid_Big"
  | "More_Grid_Small"
  | "More_Horizontal"
  | "More_Vertical"
  | "Mouse"
  | "Move_Horizontal"
  | "Move_Vertical"
  | "Move"
  | "Moving_Desk"
  | "Navigation"
  | "Note_Edit"
  | "Note_Search"
  | "Note"
  | "Notebook"
  | "Octagon_Check"
  | "Octagon_Help"
  | "Octagon_Warning"
  | "Octagon"
  | "Option"
  | "Paper_Plane"
  | "Paperclip_Attechment_Horizontal"
  | "Paperclip_Attechment_Tilt"
  | "Paragraph"
  | "Path"
  | "Pause_Circle"
  | "Pause"
  | "Phone"
  | "Planet"
  | "Play_Circle"
  | "Play"
  | "Printer"
  | "Puzzle"
  | "Qr_Code"
  | "Radio_Fill"
  | "Radio_Unchecked"
  | "Rainbow"
  | "Redo"
  | "Remove_Minus_Circle"
  | "Remove_Minus"
  | "Rewind"
  | "Rows"
  | "Ruler"
  | "Save"
  | "Search_Magnifying_Glass"
  | "Select_Multiple"
  | "Settings_Future"
  | "Settings"
  | "Share_Android"
  | "Share_iOS_Export"
  | "Shield_Check"
  | "Shield_Warning"
  | "Shield"
  | "Shopping_Bag_01"
  | "Shopping_Bag_02"
  | "Shopping_Cart_01"
  | "Shopping_Cart_02"
  | "Show"
  | "Shrink"
  | "Shuffle"
  | "Single_Quotes_L"
  | "Single_Quotes_R"
  | "Skip_Back"
  | "Skip_Forward"
  | "Slider_01"
  | "Slider_02"
  | "Slider_03"
  | "Sort_Ascending"
  | "Sort_Descending"
  | "Square_Check"
  | "Square_Help"
  | "Square_Warning"
  | "Square"
  | "Star"
  | "Stop_Circle"
  | "Stop_Sign"
  | "Stop"
  | "Strikethrough"
  | "Suitcase"
  | "Sun"
  | "Swatches_Palette"
  | "Swicht_Left"
  | "Swicht_Right"
  | "Table_Add"
  | "Table_Remove"
  | "Table"
  | "Tablet_Button"
  | "Tablet"
  | "Tag"
  | "Terminal"
  | "Text_Align_Center"
  | "Text_Align_Justify"
  | "Text_Align_Left"
  | "Text_Align_Right"
  | "Text"
  | "Ticket_Voucher"
  | "Timer_Add"
  | "Timer_Close"
  | "Timer_Remove"
  | "Timer"
  | "Trash_Empty"
  | "Trash_Full"
  | "Trending_Down"
  | "Trending_Up"
  | "Triangle_Check"
  | "Triangle_Warning"
  | "Triangle"
  | "Underline"
  | "Undo"
  | "Unfold_Less"
  | "Unfold_More"
  | "User_01"
  | "User_02"
  | "User_03"
  | "User_Add"
  | "User_Card_ID"
  | "User_Check"
  | "User_Circle"
  | "User_Close"
  | "User_Remove"
  | "User_Square"
  | "User_Voice"
  | "Users_Group"
  | "Users"
  | "Volume_Max"
  | "Volume_Min"
  | "Volume_Minus"
  | "Volume_Off_02"
  | "Volume_Off"
  | "Volume_Plus"
  | "Warning"
  | "Water_Drop"
  | "Wavy_Check"
  | "Wavy_Help"
  | "Wavy_Warning"
  | "Wavy"
  | "Wifi_High"
  | "Wifi_Low"
  | "Wifi_Medium"
  | "Wifi_None"
  | "Wifi_Off"
  | "Wifi_Problem"
  | "Window_Check"
  | "Window_Close"
  | "Window_Code_Block"
  | "Window_Sidebar"
  | "Window_Terminal"
  | "Window";

export const CoolIcon: React.FC<{
  icon: CoolIconsGlyph;
  rtl?: CoolIconsGlyph;
  title?: string;
  className?: string;
}> = ({ icon, rtl, title, className }) =>
  rtl ? (
    <>
      <i
        title={title}
        className={twJoin("ltr:inline rtl:hidden", `ci-${icon}`, className)}
      />
      <i
        title={title}
        className={twJoin("rtl:inline ltr:hidden", `ci-${rtl}`, className)}
      />
    </>
  ) : (
    <i title={title} className={twJoin(`ci-${icon}`, className)} />
  );
