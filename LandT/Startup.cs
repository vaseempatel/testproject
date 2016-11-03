using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LandT.Startup))]
namespace LandT
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
