using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Katas.Startup))]
namespace Katas
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
