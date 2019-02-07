using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DebateApplication.Models;

namespace DebateApplication.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
           return View();
        }

        public IActionResult Registration()
        {
           return View();
        }

        public IActionResult InputResults()
        {
           return View();
        }

        public IActionResult ViewResults()
        {
            return View();
        }

        public IActionResult Statistics()
        {
            return View();
        }
    }
}