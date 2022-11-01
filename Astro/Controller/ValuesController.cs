using Microsoft.AspNetCore.Mvc;

namespace Astro.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "https://google.com";
        }
    }
}
