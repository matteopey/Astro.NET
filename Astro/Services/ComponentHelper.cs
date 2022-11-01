using System.Net.Http;
using System.Threading.Tasks;

namespace Astro.Services
{
    public class ComponentHelper
    {
        public async Task<string> GetHtmlAsync()
        {
            var client = new HttpClient();

            string response = await client.GetStringAsync("http://localhost:3101");

            return response.Replace("<!DOCTYPE html>", "");
        }
    }
}
