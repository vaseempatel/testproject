<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ReportTest.aspx.cs" Inherits="LandT.ReportViewer.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server"> 
     <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>  
    <div>   
        <rsweb:reportviewer id="rptViewer" runat="server" height="503px" width="663px">  
        </rsweb:reportviewer>  
    </div>
    </form>
</body>
</html>
