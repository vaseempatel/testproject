using System.Web;
using System.Web.Optimization;

namespace LandT
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));
            bundles.Add(new ScriptBundle("~/bundlesadditional/jquery").Include(
                        "~/dist/jquery-ui-1.12.0-rc.1/jquery-ui.min.js",
                        "~/plugins/jQuery/jQuery-2.2.0.min.js",
                        "~/bootstrap/js/bootstrap.min.js",
                        "~/plugins/select2/select2.full.min.js",
                        "~/plugins/input-mask/jquery.inputmask.js",
                        "~/dist/js/app.min.js",
                        "~/plugins/input-mask/jquery.inputmask.extensions.js",
                        "~/plugins/daterangepicker/daterangepicker.js",
                        "~/plugins/iCheck/icheck.min.js"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
            bundles.Add(new StyleBundle("~/Theam/css").Include("~/bootstrap/css/bootstrap.min.css",
                "~/dist/css/AdminLTE.min.css",
                "~/dist/css/skins/_all-skins.min.css",
                "~/plugins/iCheck/flat/blue.css",
                "~/plugins/morris/morris.css",
                "~/plugins/jvectormap/jquery-jvectormap-1.2.2.css",
                "~/plugins/datepicker/datepicker3.css",
                "~/plugins/daterangepicker/daterangepicker-bs3.css",
                "~/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css"
                 ));

            bundles.Add(new ScriptBundle("~/bundles/Ttheamjs").Include(
                "~/dist/js/jquery.min.js",
                "~/dist/js/jquery-1.12.0.min.js"
                , "~/dist/js/jquery-migrate-1.2.1.min.js"
              //  , "~/plugins/select2/select2.full.min.js" 
              //  , "~/plugins/iCheck/icheck.min.js"
                , "~/dist/js/html5shiv.min.js"
                , "~/dist/js/respond.min.js"));

            bundles.Add(new StyleBundle("~/Content/Ttheamcss").Include(
                      "~/dist/OnlineCSS/jquery-ui.css",
                      "~/fonts/css/font-awesome.min.css"
                      , "~/dist/OnlineCSS/ionicons.min.css"
                      , "~/bootstrap/css/bootstrap.min.css"
                      , "~/dist/css/AdminLTE.min.css"
                      , "~/dist/css/skins/_all-skins.min.css"
                      , "~/plugins/iCheck/all.css"
                      , "~/plugins/iCheck/flat/blue.css"
                      , "~/plugins/morris/morris.css"
                      , "~/plugins/jvectormap/jquery-jvectormap-1.2.2.css"
                      , "~/plugins/datepicker/datepicker3.css"
                      , "~/plugins/daterangepicker/daterangepicker-bs3.css"
                      , "~/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css"
                           ));

            bundles.Add(new ScriptBundle("~/bundles/Btheamjs").Include(
          "~/plugins/jQuery/jQuery-2.2.0.min.js",
         // "~/plugins/select2/select2.full.min.js",
          "~/dist/js/jquery-ui.min.js"
          , "~/bootstrap/js/bootstrap.min.js"
           , "~/plugins/morris/morris.min.js"
           , "~/plugins/sparkline/jquery.sparkline.min.js"
            , "~/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"
            , "~/plugins/jvectormap/jquery-jvectormap-world-mill-en.js"
           , "~/plugins/knob/jquery.knob.js"
           , "~/plugins/daterangepicker/daterangepicker.js"
           , "~/plugins/datepicker/bootstrap-datepicker.js"
         , "~/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"
         , "~/plugins/slimScroll/jquery.slimscroll.min.js"
           , "~/plugins/fastclick/fastclick.js"
        , "~/dist/js/app.min.js"
       , "~/plugins/input-mask/jquery.inputmask.js"
         , "~/plugins/daterangepicker/daterangepicker.js"
          // , "~/plugins/iCheck/icheck.min.js"
          // , "~/dist/js/pages/dashboard.js"
       , "~/dist/js/demo.js"
       , "~/dist/js/raphael-min.js"
       , "~/dist/js/moment.min.js"
     ));

            bundles.Add(new StyleBundle("~/Content/Btheamcss").Include(
                      "~/plugins/iCheck/flat/blue.css" 
                      
                           ));


        }
    }
}
