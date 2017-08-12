using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EndPointApplication.Startup))]
namespace EndPointApplication
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
