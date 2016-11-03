using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LandT.App_Start
{
    public static class ExtensionMethods
    {

    }
    public static class LabelExtensions
    {
        public static IHtmlString Label1(this  HtmlHelper helper, string target, string text)
        {
            string htmlString =String.Format("<label for='{0}'>{1}</label>", target, text);
            return new HtmlString(htmlString);
        }
    }
}